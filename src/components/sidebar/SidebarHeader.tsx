"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { SidebarLeft01Icon, SidebarRight01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/icon";

interface SidebarHeaderProps {
    collapsed: boolean;
    onToggle: () => void;
}

export function SidebarHeader({ collapsed, onToggle }: SidebarHeaderProps) {
    return (
        <div className="flex h-22 items-center justify-between border-b border-sb-border px-3">
            <div
                className={cn(
                    "flex items-center px-3 py-3 overflow-hidden transition-all duration-300 ease-in-out",
                    collapsed ? "w-0 opacity-0" : "opacity-100"
                )}
            >
                <Image src="/images/logo.png" alt="Salaf" width={99} height={32} />
            </div>
            <button
                onClick={onToggle}
                className={cn(
                    "flex h-6 w-6 items-center justify-center text-sb-text-sub hover:text-sb-text-strong transition-colors cursor-pointer shrink-0",
                    collapsed && "mx-auto"
                )}
            >
                <Icon
                    icon={collapsed ? SidebarRight01Icon : SidebarLeft01Icon}
                    className="size-5"
                />
            </button>
        </div>
    );
}
