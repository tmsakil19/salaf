"use client";

import { createContext, useContext, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { navigationSections } from "@/config/navigation";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowDown01Icon, ArrowRight01Icon, Menu01Icon, SidebarLeft01Icon, SidebarRight01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "../ui/icon";

// Context for sidebar collapsed state
const SidebarContext = createContext<{
  collapsed: boolean;
  toggle: () => void;
}>({ collapsed: false, toggle: () => { } });

export function useSidebar() {
  return useContext(SidebarContext);
}

function SidebarNav({ collapsed }: { collapsed: boolean }) {
  return (
    <div className="flex-1 overflow-y-auto px-5 py-5">
      <div className="space-y-5">
        {navigationSections.map((section) => (
          <div key={section.title}>
            {!collapsed && (
              <p className="mb-2 px-1 text-xs font-medium uppercase tracking-[0.48px] text-[#a3a3a3]">
                {section.title}
              </p>
            )}
            {collapsed && <div className="mb-2 border-t border-[#ebebeb]" />}
            <div className="space-y-1">
              {section.items.map((item) => {

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    title={collapsed ? item.label : undefined}
                    className={cn(
                      "relative flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      collapsed && "justify-center px-0",
                      item.active
                        ? "bg-[#ebf1ff] text-[#335cff] font-semibold"
                        : "text-[#5c5c5c] hover:bg-[#f7f7f7]"
                    )}
                  >
                    {/* Active indicator bar */}
                    {item.active && (
                      <span className="absolute -left-5 top-2 h-5 w-1 rounded-r bg-[#335cff]" />
                    )}
                    <div className={cn("flex items-center gap-2.5", collapsed && "gap-0")}>
                      <Icon icon={item?.icon} className="h-5 w-5 shrink-0" />
                      {!collapsed && <span>{item.label}</span>}
                    </div>
                    {!collapsed && item.hasSubmenu && (
                      <Icon icon={ArrowDown01Icon} className="h-5 w-5 text-[#a3a3a3]" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SidebarContent({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  return (
    <div className="flex h-full flex-col">
      {/* Logo Header */}
      <div className="flex h-22 items-center justify-between border-b border-[#ebebeb] px-3">
        {!collapsed && (
          <div className="flex items-center px-3 py-3">
            <Image src="/images/logo.png" alt="Salaf" width={99} height={32} />
          </div>
        )}
        <button
          onClick={onToggle}
          className={cn(
            "flex h-6 w-6 items-center justify-center text-[#5c5c5c] hover:text-[#171717] transition-colors cursor-pointer",
            collapsed && "mx-auto"
          )}
        >
          {collapsed ? (
            <Icon icon={SidebarRight01Icon} className="size-5" />
          ) : (
            <Icon icon={SidebarLeft01Icon} className="size-5" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <SidebarNav collapsed={collapsed} />

      {/* Footer - User Profile */}
      <div className="border-t border-[#ebebeb] px-3 py-3">
        <div className={cn(
          "flex items-center gap-3 rounded-[10px] px-3 py-3",
          collapsed && "justify-center px-0"
        )}>
          <Image
            src="/images/user1.png"
            alt="Super Admin"
            width={40}
            height={40}
            className="shrink-0 rounded-full"
          />
          {!collapsed && (
            <>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#171717] tracking-[-0.084px] truncate">Super Admin</p>
                <p className="text-xs text-[#5c5c5c] truncate">super@admin.com</p>
              </div>
              <Icon icon={ArrowRight01Icon} className="h-5 w-5 shrink-0 text-[#a3a3a3]" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function MobileSidebarTrigger() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex h-10 w-10 items-center justify-center rounded-lg lg:hidden">
          <Icon icon={Menu01Icon} className="h-5 w-5 text-[#171717]" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" showCloseButton={false} className="w-68 p-0">
        <SidebarContent collapsed={false} onToggle={() => { }} />
      </SheetContent>
    </Sheet>
  );
}

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = useCallback(() => setCollapsed((c) => !c), []);

  return (
    <SidebarContext.Provider value={{ collapsed, toggle }}>
      <div className="flex min-h-screen">
        {/* Desktop Sidebar */}
        <aside
          className={cn(
            "hidden border-r border-[#ebebeb] bg-white transition-all duration-300 lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:flex lg:flex-col",
            collapsed ? "w-18" : "w-68"
          )}
        >
          <SidebarContent collapsed={collapsed} onToggle={toggle} />
        </aside>

        {/* Main content wrapper */}
        <div
          className={cn(
            "min-h-screen flex-1 transition-all duration-300",
            collapsed ? "lg:pl-18" : "lg:pl-68"
          )}
        >
          {children}
        </div>
      </div>
    </SidebarContext.Provider>
  );
}
