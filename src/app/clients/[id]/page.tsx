"use client";

import { useState } from "react";
import { ClientProfile } from "@/components/client/ClientProfile";
import { OverviewCards } from "@/components/overview/OverviewCards";
import { ActivityChart } from "@/components/overview/ActivityChart";
import { TransactionsTable } from "@/components/table/TransactionsTable";
import { clientData } from "@/config/clients";
import { Icon } from "@/components/ui/icon";
import { Analytics02Icon } from "@hugeicons/core-free-icons";

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
      <div className="flex items-center gap-0.5 rounded-xl bg-[#f5f5f5] p-1 w-fit">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-lg px-6 py-2.5 text-sm font-medium transition-colors ${activeTab === tab
              ? "bg-white text-[#171717] shadow-[0px_6px_10px_0px_rgba(14,18,27,0.06),0px_2px_4px_0px_rgba(14,18,27,0.03)]"
              : "sb-text-muted hover:text-[#5c5c5c]"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "Overview" && (
        <div className="space-y-5">
          {/* Account Overview title */}
          <h2 className="text-lg font-medium text-[#171717]">Account Overview</h2>

          {/* Spend chart + Cards grid */}
          <div className="flex flex-col xl:flex-row gap-5">
            <div className="flex-1 min-w-0">
              <ActivityChart />
            </div>
            <div className="w-full xl:w-[500px] shrink-0">
              <OverviewCards />
            </div>
          </div>

          {/* Transactions Table */}
          <TransactionsTable />
        </div>
      )}

      {activeTab === "Ad Accounts" && (
        <div className="flex h-40 items-center justify-center rounded-lg border border-dashed text-[#a3a3a3]">
          Ad Accounts content coming soon
        </div>
      )}

      {activeTab === "Growth" && (
        <div className="flex h-40 items-center justify-center rounded-lg border border-dashed text-[#a3a3a3]">
          Growth content coming soon
        </div>
      )}
    </div>
  );
}
