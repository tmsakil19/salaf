import { Badge } from "@/components/ui/badge";
import type { TransactionStatus } from "@/interfaces/transaction.interface";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: TransactionStatus;
}

const statusStyles: Record<TransactionStatus, string> = {
  Approved: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Pending: "bg-amber-50 text-amber-700 border-amber-200",
  Completed: "bg-blue-50 text-blue-700 border-blue-200",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <Badge variant="outline" className={cn("font-medium", statusStyles[status])}>
      {status}
    </Badge>
  );
}
