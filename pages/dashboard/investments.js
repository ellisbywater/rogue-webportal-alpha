import DashboardLayout from "@/components/layouts/DashboardLayout";
import MenuProvider from "@/context/MenuProvider";
import InvestmentLedger from "@/components/dashboard/cards/investment-ledger";
import { useRouter } from "next/router";

export default function Investments() {
  const router = useRouter();
  return (
    <DashboardLayout>
      <InvestmentLedger />
    </DashboardLayout>
  );
}
