"use client";

import { cn } from "@/lib/utils";
import { navigationSections } from "@/config/navigation";
import { SidebarNavSection } from "./SidebarNavSection";

interface SidebarNavProps {
    collapsed: boolean;
}

export function SidebarNav({ collapsed }: SidebarNavProps) {
    return (
        <div className={cn("flex-1 overflow-y-auto pt-5 pb-4 transition-all duration-300 ease-in-out", collapsed ? "px-2" : "px-5")}>
            <div className="space-y-5">
                {navigationSections.map((section) => (
                    <SidebarNavSection
                        key={section.title}
                        section={section}
                        collapsed={collapsed}
                    />
                ))}
            </div>
        </div>
    );
}
