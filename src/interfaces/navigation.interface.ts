import { type LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  active?: boolean;
  hasSubmenu?: boolean;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}
