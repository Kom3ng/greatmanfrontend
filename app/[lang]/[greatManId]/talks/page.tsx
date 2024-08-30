import Link from "next/link"
import { api } from "../../api"
import { getDictionary } from "../../dictionaries"

export default async function Talks({ params, searchParams }: { params: { greatManId: number, lang: string }, searchParams: { "type": string } }) {
    const talkType = searchParams["type"]
    const { greatManId, lang } = params

    const [dict, talks] = await Promise.all([
        getDictionary(lang),
        api.getTalks({ id: greatManId, lang, type: talkType, limit: 10, page: 0 })
    ])


    return <div className="m-16">
        <ul className="rounded-3xl border-2 dark:border-zinc-800 border-red-200 m-16 p-4 space-y-4">
            {
                talks.length !== 0 ? talks.map(t => {
                    return <Link href={`/${lang}/${greatManId}/talk/${t.id}`} key={t.id} className="flex justify-between items-center p-4 border dark:border-opacity-0 border-opacity-0 hover:border-opacity-95 dark:border-amber-100 border-red-800 rounded-lg transition-all">
                        <div>{t.title}</div>
                        <div>{t.date?.toLocaleDateString()}</div>
                    </Link>
                }) : <span>{dict.greatMan.noTalks}</span>
            }
        </ul>
    </div>
}