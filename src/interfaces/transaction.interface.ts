export type TransactionType = "Deposit" | "Withdraw" | "Top Up" | "Refund" | "Correction";
export type TransactionStatus = "Approved" | "Pending" | "Completed";

export interface Transaction {
  id: string;
  date: string;
  reference: string;
  referenceId: string;
  amount: number;
  type: TransactionType;
  status: TransactionStatus;
  hasIcon: boolean;
}
