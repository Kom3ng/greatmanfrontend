export default function Card({ children, className }: { children: React.ReactNode, className?: string }){
    return (
        <div className={`${className} rounded-lg border-2 border-zinc-200 dark:border-zinc-800 p-4`}>
            {children}
        </div>
    )
}