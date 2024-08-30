import Image from "next/image"
import { api } from "../api"
import { getDictionary } from "../dictionaries"
import Card from "./Card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAppleWhole, faBed, faChartColumn, faClock, faClover, faHandshake, faLandmark, faMagnifyingGlass, faMicrophoneLines, faStar } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

export default async function Page({ params: { lang, greatManId } }: { params: { lang: string, greatManId: number } }) {
    try {
        const [man, talks, dict] = await Promise.all([
            api.getMan({ id: greatManId, lang }),
            api.getTalks({ id: greatManId, limit: 10, page: 0, lang }),
            getDictionary(lang)
        ])
        
        return (
            <main className="">
                <div className="flex justify-between m-20 border-b-2 dark:border-zinc-800 border-orange-100">
                    <div className="space-y-4 lg:mt-32 md:mt-16 mt-8 lg:max-w-screen-sm">
                        <div className="font-extrabold lg:text-9xl md:text-8xl text-6xl text-red-500">{man.name}</div>
                        <div className="font-bold lg:text-8xl md:text-7xl text-5xl text-red-800 dark:text-red-200">{dict.greatMan.databaseName}</div>
                    </div>
                    {man.headImgUrl && <img alt="avatar" src={man.headImgUrl} className="max-w-lg w-full lg:block hidden" />}
                </div>

                <div className="grid gap-12 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 m-16">
                    <Section href={`/${lang}/${greatManId}/talks?type=activity`}>
                        <FontAwesomeIcon className="w-16 h-16" icon={faLandmark} />
                        <div>{dict.greatMan.activity}</div>
                    </Section>
                    <Section href={`/${lang}/${greatManId}/talks?type=talk`}>
                        <FontAwesomeIcon className="w-16 h-16" icon={faMicrophoneLines} />
                        <div>{dict.greatMan.talk}</div>
                    </Section>

                    <Section  href={`/${lang}/${greatManId}/talks?type=visit`}>
                        <FontAwesomeIcon className="w-16 h-16" icon={faHandshake} />
                        <div>{dict.greatMan.visit}</div>
                    </Section>
                    <Section href={`/${lang}/${greatManId}/talks?type=meeting`}>
                        <FontAwesomeIcon className="w-16 h-16" icon={faAppleWhole} />
                        <div>{dict.greatMan.meeting}</div>
                    </Section>
                    <Section href={`/${lang}/${greatManId}/talks?type=phone`}>
                        <FontAwesomeIcon className="w-16 h-16" icon={faChartColumn} />
                        <div>{dict.greatMan.phone}</div>
                    </Section>
                    <Section href={`/${lang}/${greatManId}/talks?type=daily`}>
                        <FontAwesomeIcon className="w-16 h-16" icon={faBed} />
                        <div>{dict.greatMan.daily}</div>
                    </Section>
                    <Section href={`/${lang}/${greatManId}/talks?type=inspect`}>
                        <FontAwesomeIcon className="w-16 h-16" icon={faMagnifyingGlass} />
                        <div>{dict.greatMan.inspect}</div>
                    </Section>
                    <Section href={`/${lang}/${greatManId}/talks?type=other`}>
                        <FontAwesomeIcon className="w-16 h-16" icon={faClover} />
                        <div>{dict.greatMan.other}</div>
                    </Section>
                </div>


                <div className="flex items-center justify-center space-x-8 mt-32">
                    <FontAwesomeIcon className="w-16 h-16 dark:text-yellow-200 text-yellow-400" icon={faStar} />
                    <div className="font-bold text-3xl">{dict.greatMan.latest}</div>
                </div>
                <ul className="rounded-3xl border-2 dark:border-zinc-800 border-red-200 m-16 p-4 space-y-4">
                    { 
                        talks.length !== 0 ? talks.map(t => {
                            return <Link href={`/${lang}/${greatManId}/talk/${t.id}`} key={t.id} className="flex justify-between items-center p-4 border dark:border-opacity-0 border-opacity-0 hover:border-opacity-95 dark:border-amber-100 border-red-800 rounded-lg transition-all">
                                <div>{t.title}</div>
                                <div>{t.date?.toLocaleDateString()}</div>
                            </Link>
                        }) : <span>{ dict.greatMan.noTalks }</span>
                    }
                </ul>
            </main>
        )

    } catch (err) {
        return <div>no current language version</div>
    }
}

function Section({ children, href }: { children: React.ReactNode, href: string }) {
    return <Link href={href}>
    <Card className="border-red-200 dark:text-red-200 text-red-800 flex justify-center items-center hover:dark:border-red-200 hover:border-red-800 transition-colors text-2xl space-x-4">
        {children}
    </Card>
    </Link>
}
