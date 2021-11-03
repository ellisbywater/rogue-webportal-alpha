import AppBar from "../dashboard/appbar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <AppBar />
      <div className="flex flex-no-wrap">
        <DashMenu />
        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
          <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
