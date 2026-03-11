"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { SidebarLeft01Icon, SidebarRight01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/icon";
import { Button } from "../ui/button";

interface SidebarHeaderProps {
    collapsed: boolean;
    onToggle: () => void;
}

export function SidebarHeader({ collapsed, onToggle }: SidebarHeaderProps) {
    return (
        <div className={cn(
            "flex h-22 items-center border-b border-sb-border px-3 transition-all duration-300 ease-in-out",
            collapsed ? "justify-center" : "justify-between"
        )}>
            <div
                className={cn(
                    "flex items-center pr-3 pl-6 py-3 overflow-hidden transition-all duration-300 ease-in-out",
                    collapsed ? "w-0 opacity-0 p-0" : "opacity-100"
                )}
            >
                <Image src="/images/logo.png" alt="Salaf" width={99} height={32} />
            </div>
            <Button
                variant={"ghost"}
                onClick={onToggle}
                className="flex h-6 w-6 items-center justify-center text-sb-text-sub hover:text-sb-text-strong transition-colors cursor-pointer shrink-0"
            >
                <Icon
                    icon={collapsed ? SidebarRight01Icon : SidebarLeft01Icon}
                    className="size-5"
                />
            </Button>
        </div>
    );
}
