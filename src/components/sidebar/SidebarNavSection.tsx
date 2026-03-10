"use client";

import { cn } from "@/lib/utils";
import type { NavSection } from "@/interfaces/navigation.interface";
import { SidebarNavItem } from "./SidebarNavItem";

interface SidebarNavSectionProps {
    section: NavSection;
    collapsed: boolean;
}

export function SidebarNavSection({ section, collapsed }: SidebarNavSectionProps) {
    return (
        <div>
            {/* Section title - visible when expanded */}
            <div
                className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    collapsed ? "max-h-0 opacity-0" : "max-h-8 opacity-100 mb-2"
                )}
            >
                <p className="p-1 text-xs font-medium uppercase leading-4 tracking-[0.48px] text-sb-text-muted">
                    {section.title}
                </p>
            </div>

            {/* Divider - visible when collapsed */}
            <div
                className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    collapsed ? "max-h-2 opacity-100 mb-2" : "max-h-0 opacity-0"
                )}
            >
                <div className="border-t border-sb-border" />
            </div>

            <div className="space-y-1">
                {section.items.map((item) => (
                    <SidebarNavItem key={item.label} item={item} collapsed={collapsed} />
                ))}
            </div>
        </div>
    );
}
