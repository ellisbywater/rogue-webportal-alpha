import DashboardLayout from "@/components/layouts/DashboardLayout";
import MenuProvider from "@/context/MenuProvider";
import InvestmentLedger from "@/components/dashboard/cards/investment-ledger";

export default function Investments() {
  return (
    <DashboardLayout>
      <h1>Investments</h1>
      <InvestmentLedger />
    </DashboardLayout>
  );
}
