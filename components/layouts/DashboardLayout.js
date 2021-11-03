import AppBar from "../dashboard/appbar";
import DashMenu from "../dashboard/menu";

export default function DashboardLayout({ children }) {
  return (
    <div className="bg-gray-900">
      <AppBar />
      <div className="flex flex-no-wrap min-h-screen">
        <DashMenu />
        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
          <div className="w-full h-full rounded">{children}</div>
        </div>
      </div>
    </div>
  );
}
