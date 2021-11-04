import DashboardLayout from "@/components/layouts/DashboardLayout";
import MenuProvider from "@/context/MenuProvider";
import PerformancePage from "@/components/dashboard/performance";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <PerformancePage />
    </DashboardLayout>
  );
}
