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
                    <div className="space-y-4 mt-32">
                        <div className="font-extrabold text-9xl text-red-500">{man.name}</div>
                        <div className="font-bold text-8xl text-red-800 dark:text-red-200 max-w-screen-sm">{dict.greatMan.databaseName}</div>
                    </div>
                    {man.headImgUrl && <Image alt='img' src={man.headImgUrl} height={720} width={720} className="max-w-lg"></Image>}
                </div>

                <div className="grid gap-12 grid-cols-4 m-16">
                    <C>
                        <FontAwesomeIcon className="w-16 h-16" icon={faLandmark} />
                        <div>{dict.greatMan.activity}</div>
                    </C>
                    <C>
                        <FontAwesomeIcon className="w-16 h-16" icon={faMicrophoneLines} />
                        <div>{dict.greatMan.talk}</div>
                    </C>

                    <C>
                        <FontAwesomeIcon className="w-16 h-16" icon={faHandshake} />
                        <div>{dict.greatMan.visit}</div>
                    </C>
                    <C>
                        <FontAwesomeIcon className="w-16 h-16" icon={faAppleWhole} />
                        <div>{dict.greatMan.meeting}</div>
                    </C>
                    <C>
                        <FontAwesomeIcon className="w-16 h-16" icon={faChartColumn} />
                        <div>{dict.greatMan.activity}</div>
                    </C>
                    <C>
                        <FontAwesomeIcon className="w-16 h-16" icon={faBed} />
                        <div>{dict.greatMan.daily}</div>
                    </C>
                    <C>
                        <FontAwesomeIcon className="w-16 h-16" icon={faMagnifyingGlass} />
                        <div>{dict.greatMan.inspect}</div>
                    </C>
                    <C>
                        <FontAwesomeIcon className="w-16 h-16" icon={faClover} />
                        <div>{dict.greatMan.other}</div>
                    </C>
                </div>


                <div className="flex items-center justify-center space-x-8 mt-32">
                    <FontAwesomeIcon className="w-16 h-16 dark:text-yellow-200 text-yellow-400" icon={faStar} />
                    <div className="font-bold text-3xl">{dict.greatMan.latest}</div>
                </div>
                <ul className="rounded-3xl border-2 dark:border-zinc-800 border-amber-100 m-16 p-4 space-y-4">
                    {talks.map(t => {
                        return <Link href={`/${lang}/${greatManId}/${t.id}`} key={t.id} className="flex justify-between items-center p-4 border dark:border-opacity-0 border-opacity-0 hover:border-opacity-95 dark:border-amber-100 border-amber-300 rounded-lg transition-all">
                            <div>{t.title}</div>
                            <div>{t.date?.toLocaleDateString()}</div>
                        </Link>
                    })}
                </ul>
            </main>
        )

    } catch (err) {
        return <div>no current language version</div>
    }
}

function C({ children }: { children: React.ReactNode }) {
    return <Card className="border-amber-100 dark:text-red-200 text-red-800 flex justify-center items-center hover:dark:border-red-200 hover:border-amber-200 transition-colors text-2xl space-x-4">
        {children}
    </Card>
}
