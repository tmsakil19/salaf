"use client";

import { useState } from "react";
import { Search, CalendarDays, Building2 } from "lucide-react";
import { StatusBadge } from "@/components/table/StatusBadge";
import { transactions } from "@/config/transactions";
import type { Transaction } from "@/interfaces/transaction.interface";

const filterTabs = [
  "Balance Sheet",
  "Deposit",
  "Top Up",
  "Withdrawals",
  "Refund",
  "Correction",
];

export function TransactionsTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Balance Sheet");

  const filteredTransactions = transactions.filter(
    (txn: Transaction) =>
      txn.reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
      txn.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      txn.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="rounded-xl border border-[#ebebeb] bg-white shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#ebebeb] px-5 py-4">
        <h3 className="text-base font-medium text-[#171717]">
          Recent Transactions
        </h3>
        <button className="text-sm font-medium text-[#335cff]">See All</button>
      </div>

      {/* Filter tabs + Search + Date Range */}
      <div className="flex items-center justify-between border-b border-[#ebebeb] px-5 py-3">
        {/* Segmented filter */}
        <div className="flex items-center gap-0.5 rounded-lg bg-[#f7f7f7] p-0.5">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${activeTab === tab
                  ? "bg-white text-[#171717] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]"
                  : "text-[#a3a3a3] hover:text-[#5c5c5c]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search + Date range */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#a3a3a3]" />
            <input
              type="text"
              placeholder="Search..."
              className="h-8 w-45 rounded-lg border border-[#ebebeb] bg-white pl-9 pr-10 text-sm text-[#171717] placeholder:text-[#a3a3a3] focus:outline-none focus:ring-1 focus:ring-[#335cff]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 rounded border border-[#ebebeb] bg-[#f7f7f7] px-1 py-0.5 text-[10px] font-medium text-[#a3a3a3]">
              ⌘1
            </span>
          </div>
          <button className="flex h-8 items-center gap-1.5 rounded-lg border border-[#ebebeb] px-3 text-xs font-medium text-[#5c5c5c]">
            <CalendarDays className="h-4 w-4" />
            Date Range
          </button>
        </div>
      </div>

      {/* Table */}
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#ebebeb]">
            <th className="px-5 py-3 text-left text-xs font-medium text-[#a3a3a3]">
              Date
            </th>
            <th className="px-5 py-3 text-left text-xs font-medium text-[#a3a3a3]">
              References
            </th>
            <th className="px-5 py-3 text-left text-xs font-medium text-[#a3a3a3]">
              USD Amount
            </th>
            <th className="px-5 py-3 text-left text-xs font-medium text-[#a3a3a3]">
              Fill
            </th>
            <th className="px-5 py-3 text-left text-xs font-medium text-[#a3a3a3]">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((txn) => (
            <tr
              key={txn.id}
              className="border-b border-[#ebebeb] last:border-b-0"
            >
              <td className="whitespace-nowrap px-5 py-3 text-sm text-[#5c5c5c]">
                {new Date(txn.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </td>
              <td className="px-5 py-3">
                <div className="flex items-center gap-2">
                  {txn.hasIcon && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f7f7f7]">
                      <Building2 className="h-4 w-4 text-[#5c5c5c]" />
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-[#171717]">
                      {txn.reference}
                    </span>
                    <span className="text-xs text-[#a3a3a3]">
                      {txn.referenceId}
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-5 py-3 text-sm font-medium text-[#171717]">
                {txn.amount >= 0 ? "+" : ""}$
                {Math.abs(txn.amount).toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                })}
              </td>
              <td className="px-5 py-3 text-sm text-[#5c5c5c]">{txn.type}</td>
              <td className="px-5 py-3">
                <StatusBadge status={txn.status} />
              </td>
            </tr>
          ))}
          {filteredTransactions.length === 0 && (
            <tr>
              <td
                colSpan={5}
                className="px-5 py-8 text-center text-sm text-[#a3a3a3]"
              >
                No transactions found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
