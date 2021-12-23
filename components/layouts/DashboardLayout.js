import MoralisAuthProvider from "@/moralis/MoralisAuthContext"
import Header from "../shared/header";
import Sidebar from "../dashboard/sidebar";
import Footer from "../shared/footer";


export default function DashboardLayout({ children }) {
  return (
    <>
    <MoralisAuthProvider>
      <Header>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
      </Header>
      <div className="h-full bg-gray-900">
        <Sidebar>{children}</Sidebar>
        <Footer />
      </div>
      </MoralisAuthProvider>
    </>
  );
}
