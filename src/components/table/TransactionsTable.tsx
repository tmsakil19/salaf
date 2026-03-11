"use client";

import { useState, useMemo } from "react";
import { ListFilter } from "lucide-react";
import { transactions } from "@/config/transactions";
import type { Transaction } from "@/interfaces/transaction.interface";
import { TransactionHeader } from "./TransactionHeader";
import { TransactionFilters } from "./TransactionFilters";
import { TransactionRow } from "./TransactionRow";
import { ArrowUpDownIcon } from "../custom-icons";

const tabToTypeMap: Record<string, string | null> = {
  "Balance Sheet": null,
  Deposit: "Deposit",
  "Top Up": "Top Up",
  Withdrawals: "Withdraw",
  Refund: "Refund",
  Correction: "Correction",
};

export function TransactionsTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Balance Sheet");

  const filteredTransactions = useMemo(() => {
    const typeFilter = tabToTypeMap[activeTab];

    return transactions.filter((txn: Transaction) => {
      const matchesTab = typeFilter === null || txn.type === typeFilter;
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        !query ||
        txn.reference.toLowerCase().includes(query) ||
        txn.referenceId.toLowerCase().includes(query) ||
        txn.type.toLowerCase().includes(query) ||
        txn.status.toLowerCase().includes(query);

      return matchesTab && matchesSearch;
    });
  }, [searchQuery, activeTab]);

  return (
    <div className="flex min-w-0 flex-col gap-3">
      {/* Header */}
      <TransactionHeader />

      {/* Filters */}
      <TransactionFilters
        activeTab={activeTab}
        onTabChange={setActiveTab}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Table */}
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-187.5">
          {/* Table Header */}
          <div className="flex items-center overflow-hidden rounded-lg border border-stroke-soft bg-bg-weak">
            <div className="w-32.5 shrink-0 px-3 py-2">
              <span className="text-sm leading-5 tracking-[-0.084px] text-text-sub">
                Date
              </span>
            </div>
            <div className="flex-1 px-3 py-2">
              <span className="text-sm leading-5 tracking-[-0.084px] text-text-sub">
                References
              </span>
            </div>
            <div className="flex flex-1 items-center gap-1 px-3 py-2">
              <span className="text-sm leading-5 tracking-[-0.084px] text-text-sub">
                USD Amount
              </span>
              <ArrowUpDownIcon className="size-3.5 text-text-soft" />
            </div>
            <div className="flex flex-1 items-center gap-1 px-3 py-2">
              <span className="text-sm leading-5 tracking-[-0.084px] text-text-sub">
                Fill
              </span>
              <ListFilter className="size-3.5 text-text-soft" />
            </div>
            <div className="flex flex-1 items-center gap-1 px-3 py-2">
              <span className="text-sm leading-5 tracking-[-0.084px] text-text-sub">
                Status
              </span>
              <ListFilter className="size-3.5 text-text-soft" />
            </div>
          </div>

          {/* Table Body */}
          <div className="mt-2 flex flex-col gap-1">
            {filteredTransactions.map((txn) => (
              <TransactionRow key={txn.id} transaction={txn} />
            ))}
            {filteredTransactions.length === 0 && (
              <div className="flex h-17.5 items-center justify-center text-sm text-text-soft">
                No transactions found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
