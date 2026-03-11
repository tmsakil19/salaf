"use client";

import { useState } from "react";
import { ClientProfile } from "@/components/client/ClientProfile";
import { OverviewCards } from "@/components/overview/OverviewCards";
import { ActivityChart } from "@/components/overview/ActivityChart";
import { TransactionsTable } from "@/components/table/TransactionsTable";
import { clientData } from "@/config/clients";
import { Icon } from "@/components/ui/icon";
import { Analytics02Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";

const tabs = ["Overview", "Ad Accounts", "Growth"];

export default function ClientDetailsPage() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="space-y-5 pt-2">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm">
        <Icon icon={Analytics02Icon} className="h-4 w-4 text-sb-text-muted" />
        <span className="text-sb-text-muted">/</span>
        <span className="text-sb-text-muted">Clients</span>
        <span className="text-sb-text-muted">/</span>
        <span className="font-medium text-sb-text-sub">{clientData.name}</span>
      </nav>

      {/* Client Profile */}
      <ClientProfile client={clientData} />

      {/* Segmented Tabs */}
      <div className="flex items-start rounded-lg border border-stroke-soft bg-bg-weak p-1">
        {tabs.map((tab) => (
          <Button
            key={tab}
            variant="ghost"
            onClick={() => setActiveTab(tab)}
            className={`rounded-[6px] px-6 py-1 h-10 text-lg font-medium leading-5 tracking-[-0.108px] transition-colors sm:px-10 hover:bg-gray-50 ${activeTab === tab
              ? "bg-bg-white text-text-strong shadow-[0px_6px_10px_0px_rgba(14,18,27,0.06),0px_2px_4px_0px_rgba(14,18,27,0.03)]"
              : "text-text-muted hover:text-text-sub"
              }`}
          >
            {tab}
          </Button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "Overview" && (
        <div className="space-y-5">
          {/* Account Overview title */}
          <h2 className="text-lg font-medium text-text-strong">Account Overview</h2>

          {/* Spend chart + Cards grid */}
          <div className="grid xl:grid-cols-2 gap-5">
            <div className="">
              <ActivityChart />
            </div>
            <div className="">
              <OverviewCards />
            </div>
          </div>

          {/* Transactions Table */}
          <TransactionsTable />
        </div>
      )}

      {activeTab === "Ad Accounts" && (
        <div className="flex h-40 items-center justify-center rounded-lg border border-dashed text-text-soft">
          Ad Accounts content coming soon
        </div>
      )}

      {activeTab === "Growth" && (
        <div className="flex h-40 items-center justify-center rounded-lg border border-dashed text-text-soft">
          Growth content coming soon
        </div>
      )}
    </div>
  );
}
