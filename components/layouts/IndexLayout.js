import { useRouter } from "next/router";
import Header from "@/components/shared/header";
import Navigation from "@/components/shared/navigation";
import Footer from "@/components/shared/footer";

export default function IndexLayout({
  title,
  keywords,
  description,
  children,
}) {
  const router = useRouter();
  return (
    <>
      <Header title={title} keywords={keywords} description={description} />
      <Navigation />
      <div>{children}</div>
      <Footer />
    </>
  );
}

IndexLayout.defaultProps = {
  title: "Welcome",
  description: "A new type of private hedge fund.",
  keyword: "Rogue.Finance, Cryptocurrency, Blockchain, Private Hedge Fund",
};
