import { Italianno } from "next/font/google"
import { api } from "@/app/[lang]/api"
import { Dict, getDictionary } from "@/app/[lang]/dictionaries"
import Head from "next/head"
import classNames from "classnames"
import { GetTalkContent200Response } from "@/app/lib/api"

const italianno = Italianno({
    weight: '400',
    subsets: ['latin']
})

export async function generateMetadata({ params: { lang, talkId } }: { params: { lang: string, talkId: number } }) {
    try {
        const [talk, dict] = await Promise.all([
            api.getTalkContent({ id: talkId, lang: lang }),
            getDictionary(lang)
        ])

        return {
            title: `${talk.title} - Great Man`,
        }
    } catch (err) {
    }
}

export default async function Page({ params: { lang, talkId } }: { params: { lang: string, talkId: number } }) {
    try {
        const [talk, dict] = await Promise.all([
            api.getTalkContent({ id: talkId, lang: lang }),
            getDictionary(lang)
        ])

        return (
            <>
                <main>
                    <div className={
                        classNames(
                            "flex justify-center text-6xl font-extrabold mt-16",
                            { [`${italianno.className} text-9xl`]: lang.toLowerCase().startsWith("en") }
                        )
                    }>
                        {talk.title}
                    </div>
                    <div className="flex justify-center">
                        <div className="">
                            {talk.date?.toLocaleDateString()}
                        </div>
                    </div>
                    {
                        talk.source &&
                        <div className="mr-16 text-right">
                            {dict.talk.source}: {talk.source}
                        </div>
                    }

                    <div className="m-16 flex justify-center">
                        <p className="break-words max-w-screen-2xl w-full">
                            {talk.content}
                        </p>
                    </div>


                    {
                        talk.interviewer &&
                        <div className="mr-16 text-right">
                            {dict.talk.interviwer}: {talk.interviewer}
                        </div>
                    }
                </main>
            </>
        )
    } catch (err) {
        return <div>no current language version</div>
    }
}