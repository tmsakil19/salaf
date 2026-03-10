"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/icon";

interface SidebarFooterProps {
    collapsed: boolean;
}

export function SidebarFooter({ collapsed }: SidebarFooterProps) {
    return (
        <div className="border-t border-sb-border p-3">
            <div
                className={cn(
                    "flex items-center gap-3 rounded-[10px] p-3 transition-all duration-300 ease-in-out",
                    collapsed && "justify-center p-2"
                )}
            >
                <Image
                    src="/images/user1.png"
                    alt="Super Admin"
                    width={40}
                    height={40}
                    className="shrink-0 rounded-full"
                />
                <div
                    className={cn(
                        "flex-1 min-w-0 flex flex-col gap-1 overflow-hidden transition-all duration-300 ease-in-out",
                        collapsed ? "w-0 opacity-0" : "opacity-100"
                    )}
                >
                    <p className="text-sm font-medium text-sb-text-strong tracking-[-0.084px] truncate leading-5">
                        Super Admin
                    </p>
                    <p className="text-xs text-sb-text-sub truncate leading-4">
                        super@admin.com
                    </p>
                </div>
                <Icon
                    icon={ArrowRight01Icon}
                    className={cn(
                        "size-5 shrink-0 text-sb-text-muted overflow-hidden transition-all duration-300 ease-in-out",
                        collapsed && "w-0 opacity-0"
                    )}
                />
            </div>
        </div>
    );
}
