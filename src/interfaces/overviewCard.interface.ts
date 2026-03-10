import { type LucideIcon } from "lucide-react";

export interface OverviewCardData {
  id: string;
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
}
