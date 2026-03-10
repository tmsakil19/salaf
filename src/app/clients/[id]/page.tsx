import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClientProfile } from "@/components/client/ClientProfile";
import { OverviewCards } from "@/components/overview/OverviewCards";
import { ActivityChart } from "@/components/overview/ActivityChart";
import { TransactionsTable } from "@/components/table/TransactionsTable";
import { clientData } from "@/config/clients";

export default function ClientDetailsPage() {
  return (
    <div className="space-y-6">
      {/* Client Profile */}
      <ClientProfile client={clientData} />

      {/* Tabs */}
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="ad-accounts">Ad Accounts</TabsTrigger>
          <TabsTrigger value="growth">Growth</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6 space-y-6">
          {/* Overview Cards */}
          <OverviewCards />

          {/* Activity Chart */}
          <ActivityChart />

          {/* Transactions Table */}
          <TransactionsTable />
        </TabsContent>

        <TabsContent value="ad-accounts">
          <div className="flex h-40 items-center justify-center rounded-lg border border-dashed text-muted-foreground">
            Ad Accounts content coming soon
          </div>
        </TabsContent>

        <TabsContent value="growth">
          <div className="flex h-40 items-center justify-center rounded-lg border border-dashed text-muted-foreground">
            Growth content coming soon
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
