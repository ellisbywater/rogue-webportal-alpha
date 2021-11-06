import { useRouter } from "next/router";
import Header from "@/components/shared/header";
import { MinNavigation } from "@/components/shared/navigation";
import Footer from "@/components/shared/footer";
import ProgressBar from "@/components/onboarding/progressbar";

export default function OnboardingLayout({
  title,
  keywords,
  description,
  children,
}) {
  return (
    <>
      <Header title={title} keywords={keywords} description={description} />
      <MinNavigation />
      <ProgressBar />
      <div>{children}</div>
      <Footer />
    </>
  );
}

OnboardingLayout.defaultProps = {
  title: "Onboarding",
  description: "A new type of private hedge fund.",
  keyword: "Rogue.Finance, Cryptocurrency, Blockchain, Private Hedge Fund",
};
