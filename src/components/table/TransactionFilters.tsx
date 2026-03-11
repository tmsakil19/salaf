"use client";

import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icon } from "../ui/icon";
import { Calendar02Icon } from "@hugeicons/core-free-icons";

interface TransactionFiltersProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
}

const filterTabs = [
    "Balance Sheet",
    "Deposit",
    "Top Up",
    "Withdrawals",
    "Refund",
    "Correction",
];

export function TransactionFilters({
    activeTab,
    onTabChange,
    searchQuery,
    onSearchChange,
}: TransactionFiltersProps) {
    return (
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            {/* Segmented Control */}
            <div className="flex items-start gap-1 overflow-x-auto rounded-[10px] border border-stroke-soft bg-bg-weak p-1">
                {filterTabs.map((tab) => (
                    <Button
                        variant="ghost"
                        key={tab}
                        onClick={() => onTabChange(tab)}
                        className={cn(
                            "h-auto whitespace-nowrap rounded-[6px] border-0 px-4 py-1 text-sm font-medium leading-5 tracking-[-0.084px]",
                            activeTab === tab
                                ? "bg-bg-white text-text-strong shadow-[0px_2px_4px_0px_rgba(14,18,27,0.03),0px_6px_10px_0px_rgba(14,18,27,0.06)] hover:bg-bg-white hover:text-text-strong"
                                : "bg-transparent text-text-soft hover:bg-transparent hover:text-text-sub"
                        )}
                    >
                        {tab}
                    </Button>
                ))}
            </div>

            {/* Search + Date Range */}
            <div className="flex items-center gap-3">
                {/* Search */}
                <div className="flex w-full items-center gap-2 rounded-lg border border-stroke-soft bg-bg-white py-2 pl-2.5 pr-2 shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)] sm:w-55">
                    <Search className="size-5 shrink-0 text-text-soft" />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="min-w-0 flex-1 bg-transparent text-sm leading-5 tracking-[-0.084px] text-text-strong placeholder:text-text-soft outline-none"
                    />
                    <span className="shrink-0 rounded border border-stroke-soft bg-bg-white px-1.5 py-0.5 text-xs font-medium uppercase leading-4 tracking-[0.48px] text-text-soft">
                        ⌘1
                    </span>
                </div>

                {/* Date Range */}
                <Button variant={"ghost"} className="flex items-center gap-2 rounded-lg border border-stroke-soft bg-bg-white py-2 pl-2.5 pr-2 shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)] hover:bg-gray-50 font-normal">
                    <Icon icon={Calendar02Icon} className="size-5 shrink-0 text-text-soft" />
                    <span className="hidden whitespace-nowrap text-sm leading-5 tracking-[-0.084px] text-text-sub sm:inline">
                        Date Range
                    </span>
                    <ChevronDown className="size-5 shrink-0 text-text-soft" />
                </Button>
            </div>
        </div>
    );
}
