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
                    "flex items-center rounded-[10px] transition-all duration-300 ease-in-out",
                    collapsed ? "justify-center p-0" : "gap-3 p-3"
                )}
            >
                <Image
                    src="/images/user1.png"
                    alt="Super Admin"
                    width={40}
                    height={40}
                    className="shrink-0 rounded-full"
                />
                {!collapsed && (
                    <>
                        <div className="flex-1 min-w-0 flex flex-col gap-1">
                            <p className="text-sm font-medium text-sb-text-strong tracking-[-0.084px] truncate leading-5">
                                Super Admin
                            </p>
                            <p className="text-xs text-sb-text-sub truncate leading-4">
                                super@admin.com
                            </p>
                        </div>
                        <Icon
                            icon={ArrowRight01Icon}
                            className="size-5 shrink-0 text-sb-text-muted"
                        />
                    </>
                )}
            </div>
        </div>
    );
}
