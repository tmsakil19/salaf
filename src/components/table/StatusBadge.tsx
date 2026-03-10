import type { TransactionStatus } from "@/interfaces/transaction.interface";

interface StatusBadgeProps {
  status: TransactionStatus;
}

const statusStyles: Record<TransactionStatus, string> = {
  Approved:
    "bg-[#ecfdf3] text-[#12b76a] border border-[#d1fadf]",
  Pending:
    "bg-[#fffaeb] text-[#f79009] border border-[#fedf89]",
  Completed:
    "bg-[#eff8ff] text-[#2e90fa] border border-[#b2ddff]",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}
