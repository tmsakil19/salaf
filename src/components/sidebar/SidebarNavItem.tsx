"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/icon";
import type { NavItem } from "@/interfaces/navigation.interface";

interface SidebarNavItemProps {
    item: NavItem;
    collapsed: boolean;
}

export function SidebarNavItem({ item, collapsed }: SidebarNavItemProps) {
    return (
        <Link
            href={item.href}
            title={collapsed ? item.label : undefined}
            className={cn(
                "relative flex items-center gap-2 rounded-lg py-2 text-sm tracking-[-0.084px] transition-all duration-300 ease-in-out",
                collapsed ? "justify-center px-2" : "px-3",
                item.active
                    ? "bg-sb-active-bg text-sb-active font-semibold"
                    : "text-sb-text-sub font-medium hover:bg-sb-hover"
            )}
        >
            {item.active && (
                <span className="absolute -left-5 top-2 h-5 w-1 rounded-r-[4px] bg-sb-active" />
            )}
            <Icon icon={item.icon} className="size-5 shrink-0" />
            <span
                className={cn(
                    "flex-1 whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out",
                    collapsed ? "w-0 opacity-0" : "opacity-100"
                )}
            >
                {item.label}
            </span>
            {item.hasSubmenu && (
                <Icon
                    icon={ArrowDown01Icon}
                    className={cn(
                        "size-5 shrink-0 text-sb-text-muted overflow-hidden transition-all duration-300 ease-in-out",
                        collapsed && "w-0 opacity-0"
                    )}
                />
            )}
        </Link>
    );
}
