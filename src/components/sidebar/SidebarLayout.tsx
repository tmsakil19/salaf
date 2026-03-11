"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { SidebarContext } from "./SidebarContext";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarNav } from "./SidebarNav";
import { SidebarFooter } from "./SidebarFooter";

export function SidebarProvider({ children }: { children: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState(false);
    const toggle = useCallback(() => setCollapsed((c) => !c), []);

    return (
        <SidebarContext.Provider value={{ collapsed, toggle }}>
            <div className="flex min-h-screen">
                {/* Desktop Sidebar */}
                <aside
                    className={cn(
                        "hidden border-r border-sb-border bg-sb-bg transition-all duration-300 ease-in-out lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:flex lg:flex-col",
                        collapsed ? "w-18" : "w-68"
                    )}
                >
                    <div className="flex h-full flex-col">
                        <SidebarHeader collapsed={collapsed} onToggle={toggle} />
                        <SidebarNav collapsed={collapsed} />
                        <SidebarFooter collapsed={collapsed} />
                    </div>
                </aside>

                {/* Main content wrapper */}
                <div
                    className={cn(
                        "min-h-screen min-w-0 flex-1 overflow-x-hidden bg-[#FAFAFA] transition-all duration-300 ease-in-out",
                        collapsed ? "lg:pl-18" : "lg:pl-68"
                    )}
                >
                    {children}
                </div>
            </div>
        </SidebarContext.Provider>
    );
}
