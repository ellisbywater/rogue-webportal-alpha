import DashboardLayout from "@/components/layouts/DashboardLayout";
import UpdateFieldCard from "@/components/dashboard/updateFieldCard";

export default function Settings() {
  return (
    <DashboardLayout>
      <UpdateFieldCard fieldName="Pin" />
    </DashboardLayout>
  );
}
