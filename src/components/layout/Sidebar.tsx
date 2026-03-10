"use client";

import Link from "next/link";
import Image from "next/image";
import { PanelLeftClose, ChevronDown, ChevronRight, Menu } from "lucide-react";
import { navigationSections } from "@/config/navigation";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

function SidebarContent() {
  return (
    <div className="flex h-full flex-col">
      {/* Logo Header */}
      <div className="flex h-22 items-center justify-between border-b border-[#ebebeb] px-3">
        <div className="flex items-center px-3 py-3">
          <Image src="/images/logo.png" alt="Salaf" width={99} height={32} />
        </div>
        <button className="flex h-6 w-6 items-center justify-center text-[#5c5c5c]">
          <PanelLeftClose className="h-5 w-5" />
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-5 py-5">
        <div className="space-y-5">
          {navigationSections.map((section) => (
            <div key={section.title}>
              <p className="mb-2 px-1 text-[11px] font-medium uppercase tracking-[2px] text-[#a3a3a3]">
                {section.title}
              </p>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={cn(
                        "flex h-9 items-center justify-between rounded-lg px-3 text-sm font-medium transition-colors",
                        item.active
                          ? "bg-[#335cff] text-white"
                          : "text-[#5c5c5c] hover:bg-[#f7f7f7]"
                      )}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="h-4.5 w-4.5 shrink-0" />
                        <span>{item.label}</span>
                      </div>
                      {item.hasSubmenu && (
                        <ChevronDown className={cn("h-4 w-4", item.active ? "text-white" : "text-[#a3a3a3]")} />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer - User Profile */}
      <div className="border-t border-[#ebebeb] px-3 py-3">
        <div className="flex items-center gap-3 rounded-lg px-2 py-2">
          <Image
            src="/images/user2.png"
            alt="Super Admin"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-[#171717] truncate">Super Admin</p>
            <p className="text-xs text-[#a3a3a3] truncate">superadmin.com</p>
          </div>
          <ChevronRight className="h-4 w-4 shrink-0 text-[#a3a3a3]" />
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
          <Menu className="h-5 w-5 text-[#171717]" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" showCloseButton={false} className="w-68 p-0">
        <SidebarContent />
      </SheetContent>
    </Sheet>
  );
}

export function Sidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden h-screen w-68 border-r border-[#ebebeb] bg-white lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:flex lg:flex-col">
        <SidebarContent />
      </aside>
    </>
  );
}
