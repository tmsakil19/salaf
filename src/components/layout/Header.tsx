"use client";

import { Search, Bell, ChevronDown, UserRound } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-22 items-center justify-between border-b border-[#ebebeb] bg-white px-8">
      {/* Left: Page Info */}
      <div className="flex items-center gap-3.5">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fafafa] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]">
          <UserRound className="h-6 w-6 text-[#171717]" />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-medium leading-6 tracking-[-0.27px] text-[#171717]">
            Client Details
          </h1>
          <p className="text-sm leading-5 tracking-[-0.084px] text-[#5c5c5c]">
            View client details, update profiles, and manage account activity.
          </p>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        {/* Search */}
        <button className="flex h-10 w-10 items-center justify-center rounded-[10px]">
          <Search className="h-5 w-5 text-[#171717]" />
        </button>

        {/* Notifications */}
        <button className="relative flex h-10 w-10 items-center justify-center rounded-[10px]">
          <Bell className="h-5 w-5 text-[#171717]" />
          <span className="absolute right-3 top-3 h-1 w-1 rounded-full bg-red-500" />
        </button>

        {/* User Profile */}
        <button className="flex items-center gap-1.5 rounded-[10px] border border-[#ebebeb] py-1 pl-1 pr-2">
          <Image
            src="/images/user2.png"
            alt="Super Admin"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-sm font-medium tracking-[-0.084px] text-[#171717]">
            Super Admin
          </span>
          <ChevronDown className="h-5 w-5 text-[#5c5c5c]" />
        </button>
      </div>
    </header>
  );
}
