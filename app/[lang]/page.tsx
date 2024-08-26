export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  return (
    <div>
      test
      {lang}
    </div>
  );
}
