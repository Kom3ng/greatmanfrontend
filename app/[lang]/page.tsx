import Link from "next/link";
import { api } from "./api";

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const men = await api.gerMen({ limit: 10, page: 0 })

  return (
    <div className="m-16">
      <ul>
        {
          men.map(id => {
            return <li key={id}><Link href={`/${lang}/${id}`}>{id}</Link></li>
          })
        }
      </ul>
    </div>
  );
}
