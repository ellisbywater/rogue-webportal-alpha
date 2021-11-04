import Head from "next/head";

export default function Header({ title, keywords, description, children }) {
  return (
    <Head>
      <title>{title} | Rogue</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {children}
    </Head>
  );
}
