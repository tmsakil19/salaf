import type { TransactionStatus } from "@/interfaces/transaction.interface";

const statusStyles: Record<TransactionStatus, string> = {
  Approved: "border-state-success-light text-state-success",
  Pending: "border-state-warning-light text-state-warning",
  Completed: "border-state-info-light text-state-info",
};

export function StatusBadge({ status }: { status: TransactionStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium leading-4 ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}
