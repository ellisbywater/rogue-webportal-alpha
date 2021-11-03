import Head from "next/head";

export default function Header({ title, keywords, description }) {
  return (
    <Head>
      <title>{title} | Rogue</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
  );
}
