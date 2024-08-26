import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { getDictionary } from "./dictionaries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Great Man",
};

export default async function RootLayout({
  children,
  params: { lang }
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const dict = await getDictionary(lang)

  return (
    <html lang="en">
      <body className={`${jetbrainsMono.className} dark:bg-zinc-950 bg-yellow-50 dark:text-neutral-100 text-zinc-950`}>
        <nav className="h-18 border-b-2 border-orange-100 dark:border-zinc-800 flex justify-between items-center">
          <div className="flex justify-center items-center space-x-4 ml-16">
            <FontAwesomeIcon className="w-8 h-8 text-red-600" icon={faStar} />
            <div className="font-bold text-2xl text-yellow-600 dark:text-yellow-400">{dict.title}</div>
          </div>
          <div className="items-center mr-16 mt-4 mb-4">
            <a target="_blank" href="https://github.com/kom3ng/greatmanfrontend">
              <Image src="/_/github-mark.svg" alt="github" className="block dark:hidden" width={40} height={40} />
              <Image src="/_/github-mark-white.svg" alt="github" className="hidden dark:block" width={40} height={40} />
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
