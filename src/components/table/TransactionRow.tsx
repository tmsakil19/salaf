import Image from "next/image";
import { StatusBadge } from "./StatusBadge";
import type { Transaction } from "@/interfaces/transaction.interface";

export function TransactionRow({ transaction }: { transaction: Transaction }) {
    const isPositive = transaction.type === "Deposit";
    const prefix = isPositive ? "+" : "-";

    return (
        <div className="flex h-17.5 items-center bg-bg-white">
            {/* Date */}
            <div className="w-32.5 shrink-0 py-3 pl-3 pr-5">
                <p className="truncate text-sm leading-5 tracking-[-0.084px] text-text-sub">
                    {new Date(transaction.date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                    })}
                </p>
            </div>

            {/* References */}
            <div className="flex flex-1 items-center gap-1.5 py-3 pl-3 pr-5">
                {transaction.hasIcon && (
                    <Image
                        src="/images/Islamic-bank.png"
                        height={32}
                        width={32}
                        alt="Bank Icon"
                        className="size-8 shrink-0 rounded-full"
                    />
                )}
                <div className="flex min-w-0 flex-col gap-0.5">
                    <p className="truncate text-sm font-medium leading-5 tracking-[-0.084px] text-text-strong">
                        {transaction.reference}
                    </p>
                    <p className="truncate text-xs leading-4 text-text-sub">
                        {transaction.referenceId}
                    </p>
                </div>
            </div>

            {/* USD Amount */}
            <div className="flex-1 py-3 pl-3 pr-5">
                <p className="truncate text-sm leading-5 tracking-[-0.084px] text-text-strong">
                    {prefix} $
                    {Math.abs(transaction.amount).toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                    })}
                </p>
            </div>

            {/* Fill / Type */}
            <div className="flex-1 py-3 pl-3 pr-5">
                <p className="truncate text-sm leading-5 tracking-[-0.084px] text-text-strong">
                    {transaction.type}
                </p>
            </div>

            {/* Status */}
            <div className="flex-1 px-3 py-3">
                <StatusBadge status={transaction.status} />
            </div>
        </div>
    );
}
