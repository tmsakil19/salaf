import {
  Wallet,
  DollarSign,
  BarChart3,
  Activity,
} from "lucide-react";
import type { OverviewCardData } from "@/interfaces/overviewCard.interface";

export const overviewCards: OverviewCardData[] = [
  {
    id: "wallet-balance",
    title: "Wallet Balance",
    value: "$6.2k",
    icon: Wallet,
    iconColor: "text-[#335cff]",
    iconBg: "bg-[rgba(71,108,255,0.1)]",
  },
  {
    id: "usd-rate",
    title: "Current USD Rate",
    value: "৳123.50",
    subtitle: "Updated today",
    icon: DollarSign,
    iconColor: "text-[#335cff]",
    iconBg: "bg-[rgba(71,108,255,0.1)]",
  },
  {
    id: "ad-balance",
    title: "Ad Acc. Balance",
    value: "$0.5k",
    icon: BarChart3,
    iconColor: "text-[#335cff]",
    iconBg: "bg-[rgba(71,108,255,0.1)]",
  },
  {
    id: "active-ad-accounts",
    title: "Active Ad Acc.",
    value: "42",
    icon: Activity,
    iconColor: "text-[#335cff]",
    iconBg: "bg-[rgba(71,108,255,0.1)]",
  },
];
