"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { ClientProfile } from "@/components/client/ClientProfile";
import { OverviewCards } from "@/components/overview/OverviewCards";
import { ActivityChart } from "@/components/overview/ActivityChart";
import { TransactionsTable } from "@/components/table/TransactionsTable";
import { clientData } from "@/config/clients";

const tabs = ["Overview", "Ad Accounts", "Growth"];

export default function ClientDetailsPage() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="space-y-5">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-sm">
        <span className="text-[#a3a3a3]">Dashboard</span>
        <ChevronRight className="h-4 w-4 text-[#a3a3a3]" />
        <span className="text-[#a3a3a3]">Clients</span>
        <ChevronRight className="h-4 w-4 text-[#a3a3a3]" />
        <span className="font-medium text-[#171717]">{clientData.name}</span>
      </nav>

      {/* Client Profile */}
      <ClientProfile client={clientData} />

      {/* Segmented Tabs */}
      <div className="flex items-center gap-0.5 rounded-lg bg-[#f7f7f7] p-0.5 w-fit">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${activeTab === tab
                ? "bg-white text-[#171717] shadow-[0px_6px_10px_0px_rgba(14,18,27,0.06),0px_2px_4px_0px_rgba(14,18,27,0.03)]"
                : "text-[#a3a3a3] hover:text-[#5c5c5c]"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "Overview" && (
        <div className="space-y-5">
          {/* Account Overview: Spend chart + Cards grid */}
          <div className="flex gap-5">
            <div className="flex-1 min-w-0">
              <ActivityChart />
            </div>
            <div className="w-85 shrink-0">
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
