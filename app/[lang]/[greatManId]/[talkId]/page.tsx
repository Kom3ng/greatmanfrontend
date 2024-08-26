import { Italianno } from "next/font/google"
import { api } from "../../api"
import { getDictionary } from "../../dictionaries"

const italianno = Italianno({
    weight: '400',
    subsets: ['latin']
})

export default async function Page({ params: { lang, talkId } }: { params: { lang: string, talkId: number } }) {
    try {
        const [talk, dict] = await Promise.all([
            api.getTalkContent({ id: talkId, lang: lang }),
            getDictionary(lang)
        ])
    
        return (
            <main>
                <div className={`flex justify-center font-extrabold text-9xl mt-16 ${italianno.className}`}>
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
                        
                    </p>
                </div>
    
    
                {
                    talk.interviwer &&
                    <div className="relative mt-8">
                        <div className="absolute right-16">
                            {dict.talk.interviwer}: {talk.interviwer}
                        </div>
                    </div>
                }
            </main>
        )
    } catch(err) {
        return <div>no current language version</div>
    }
}