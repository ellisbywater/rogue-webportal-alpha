import DashboardLayout from "@/components/layouts/DashboardLayout";
import PerformancePage from "@/components/dashboard/performance";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <PerformancePage />
    </DashboardLayout>
  );
}
