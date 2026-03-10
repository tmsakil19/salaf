
import type { NavSection } from "@/interfaces/navigation.interface";
import { Analytics02Icon, BankIcon, BotIcon, BriefcaseDollarIcon, CoinsDollarIcon, HandCoinsIcon, MetaIcon, MoneyReceiveFlow01Icon, PieChart09Icon, PurseIcon, SaveMoneyDollarIcon, Settings02Icon, UserGroup03Icon, UserSettings01Icon } from "@hugeicons/core-free-icons";

export const navigationSections: NavSection[] = [
  {
    title: "Main",
    items: [
      { label: "Dashboard", href: "/dashboard", icon: Analytics02Icon },
      { label: "Ad Account", href: "/ad-account", icon: MetaIcon },
      { label: "Top Ups", href: "/top-ups", icon: MoneyReceiveFlow01Icon },
      { label: "Finance", href: "/finance", icon: PurseIcon, hasSubmenu: true },
      { label: "Client Refund", href: "/client-refund", icon: SaveMoneyDollarIcon, hasSubmenu: true },
      { label: "Analysis", href: "/analysis", icon: PieChart09Icon },
    ],
  },
  {
    title: "Manage",
    items: [
      { label: "Clients", href: "/clients/CLT-001", icon: UserGroup03Icon, active: true },
      { label: "Credits", href: "/credits", icon: HandCoinsIcon },
      { label: "Vendors", href: "/vendors", icon: BriefcaseDollarIcon },
      { label: "Banks", href: "/banks", icon: BankIcon, hasSubmenu: true },
    ],
  },
  {
    title: "Others",
    items: [
      { label: "Admins", href: "/admins", icon: UserSettings01Icon },
      { label: "Refer to Earn", href: "/refer", icon: CoinsDollarIcon, hasSubmenu: true },
      { label: "Settings", href: "/settings", icon: Settings02Icon },
      { label: "Support", href: "/support", icon: BotIcon },
    ],
  },
];
