"use client";

import { navigationSections } from "@/config/navigation";
import { SidebarNavSection } from "./SidebarNavSection";

interface SidebarNavProps {
    collapsed: boolean;
}

export function SidebarNav({ collapsed }: SidebarNavProps) {
    return (
        <div className="flex-1 overflow-y-auto px-5 pt-5 pb-4">
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
