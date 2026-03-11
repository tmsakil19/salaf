import { DollarCircleIcon } from "@hugeicons/core-free-icons";
import type { OverviewCardData } from "@/interfaces/overviewCard.interface";

export const overviewCards: OverviewCardData[] = [
  {
    id: "wallet-balance",
    title: "Wallet Balance",
    value: "$ 6.2k",
    subtitle: "Last deposit: 13 Mar 2025",
  },
  {
    id: "usd-rate",
    title: "Current USD Rate",
    value: "৳ 123.50",
    subtitle: "Expires on: 31 Jan 2025"
  },
  {
    id: "ad-balance",
    title: "Ad Acc. Balance",
    value: "$ 0.5k",
    subtitle: "Including Closed Accounts"
  },
  {
    id: "active-ad-accounts",
    title: "Active Ad Acc.",
    value: "42",
    subtitle: "40 accounts in total"
  },
];
