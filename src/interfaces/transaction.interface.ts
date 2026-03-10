export type TransactionType = "Deposit" | "Withdraw" | "Top Up" | "Refund";
export type TransactionStatus = "Approved" | "Pending" | "Completed";

export interface Transaction {
  id: string;
  date: string;
  reference: string;
  amount: number;
  type: TransactionType;
  status: TransactionStatus;
}
