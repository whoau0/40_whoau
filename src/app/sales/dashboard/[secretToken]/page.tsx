import DashboardView from "@/components/sales/DashboardView";

export default function TokenSalesDashboardPage({
  params,
}: {
  params: { secretToken: string };
}) {
  return <DashboardView secretToken={params.secretToken} />;
}
