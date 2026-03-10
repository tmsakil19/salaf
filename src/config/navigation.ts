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
import type { NavItem } from "@/interfaces/navigation.interface";

export const navigationItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Ad Account", href: "/ad-account", icon: Megaphone },
  { label: "Top Ups", href: "/top-ups", icon: ArrowUpCircle },
  { label: "Finance", href: "/finance", icon: DollarSign },
  { label: "Client Refund", href: "/client-refund", icon: RotateCcw },
  { label: "Analysis", href: "/analysis", icon: BarChart3 },
  { label: "Clients", href: "/clients", icon: Users, active: true },
  { label: "Credits", href: "/credits", icon: CreditCard },
  { label: "Vendors", href: "/vendors", icon: Store },
  { label: "Banks", href: "/banks", icon: Landmark },
  { label: "Admins", href: "/admins", icon: ShieldCheck },
  { label: "Refer to Earn", href: "/refer", icon: Gift },
  { label: "Settings", href: "/settings", icon: Settings },
  { label: "Support", href: "/support", icon: HelpCircle },
];
