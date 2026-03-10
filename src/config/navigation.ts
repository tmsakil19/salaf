import {
  LayoutDashboard,
  Megaphone,
  ArrowUpCircle,
  DollarSign,
  RotateCcw,
  BarChart3,
  Users,
  CreditCard,
  Store,
  Landmark,
  ShieldCheck,
  Gift,
  Settings,
  HelpCircle,
} from "lucide-react";
import type { NavSection } from "@/interfaces/navigation.interface";

export const navigationSections: NavSection[] = [
  {
    title: "Main",
    items: [
      { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { label: "Ad Account", href: "/ad-account", icon: Megaphone },
      { label: "Top Ups", href: "/top-ups", icon: ArrowUpCircle },
      { label: "Finance", href: "/finance", icon: DollarSign, hasSubmenu: true },
      { label: "Client Refund", href: "/client-refund", icon: RotateCcw, hasSubmenu: true },
      { label: "Analysis", href: "/analysis", icon: BarChart3 },
    ],
  },
  {
    title: "Manage",
    items: [
      { label: "Clients", href: "/clients/CLT-001", icon: Users, active: true },
      { label: "Credits", href: "/credits", icon: CreditCard },
      { label: "Vendors", href: "/vendors", icon: Store },
      { label: "Banks", href: "/banks", icon: Landmark, hasSubmenu: true },
    ],
  },
  {
    title: "Others",
    items: [
      { label: "Admins", href: "/admins", icon: ShieldCheck },
      { label: "Refer to Earn", href: "/refer", icon: Gift, hasSubmenu: true },
      { label: "Settings", href: "/settings", icon: Settings },
      { label: "Support", href: "/support", icon: HelpCircle },
    ],
  },
];
