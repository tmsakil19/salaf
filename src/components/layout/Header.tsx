"use client";

// import { Search, Bell, ChevronDown, UserRound } from "lucide-react";
import Image from "next/image";
import { MobileSidebarTrigger } from "@/components/sidebar";
import { Icon } from "../ui/icon";
import { ArrowDown01Icon, Notification01Icon, Search02Icon, User03Icon } from "@hugeicons/core-free-icons";

export function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-22 items-center justify-between border-b border-[#ebebeb] bg-white px-4 md:px-8">
      {/* Left: Mobile menu + Page Info */}
      <div className="flex items-center gap-3">
        <MobileSidebarTrigger />
        <div className="flex items-center gap-3.5">
          <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-[#fafafa] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]">
            <Icon icon={User03Icon} className="h-6 w-6 text-[#171717]" />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-base md:text-lg font-medium leading-6 tracking-[-0.27px] text-[#171717]">
              Client Details
            </h1>
            <p className="hidden sm:block text-sm leading-5 tracking-[-0.084px] text-[#5c5c5c]">
              View client details, update profiles, and manage account activity.
            </p>
          </div>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        {/* Search */}
        <button className="flex h-10 w-10 items-center justify-center rounded-[10px]">
          <Icon icon={Search02Icon} className="h-5 w-5 text-[#171717]" />
        </button>

        {/* Notifications */}
        <button className="relative flex h-10 w-10 items-center justify-center rounded-[10px]">
          <Icon icon={Notification01Icon} className="h-5 w-5 text-[#171717]" />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-500 border border-white" />
        </button>

        {/* User Profile */}
        <button className="flex items-center gap-1.5 rounded-[10px] border border-[#ebebeb] py-1 pl-1 pr-2">
          <Image
            src="/images/user1.png"
            alt="Super Admin"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="hidden sm:inline text-sm font-medium tracking-[-0.084px] text-[#171717]">
            Super Admin
          </span>
          <Icon icon={ArrowDown01Icon} className="h-5 w-5 text-[#5c5c5c]" />
        </button>
      </div>
    </header>
  );
}
