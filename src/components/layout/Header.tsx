"use client";

import Image from "next/image";
import { MobileSidebarTrigger } from "@/components/sidebar";
import { Icon } from "../ui/icon";
import { ArrowDown01Icon, Notification01Icon, Search02Icon, User03Icon } from "@hugeicons/core-free-icons";

export function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-22 items-center justify-between border-b border-stroke-soft bg-bg-white px-4 md:px-8">
      {/* Left: Mobile menu + Page Info */}
      <div className="flex items-center gap-3">
        <MobileSidebarTrigger />
        <div className="flex items-center gap-3.5">
          <div className="hidden sm:flex size-12 items-center justify-center rounded-full bg-bg-weak shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]">
            <Icon icon={User03Icon} className="size-6 text-text-strong" />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-medium leading-6 tracking-[-0.27px] text-text-strong">
              Client Details
            </h1>
            <p className="hidden sm:block text-sm font-normal leading-5 tracking-[-0.084px] text-text-sub">
              View client details, update profiles, and manage account activity.
            </p>
          </div>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        {/* Search */}
        <button className="flex size-10 items-center justify-center rounded-[10px]">
          <Icon icon={Search02Icon} className="size-5 text-text-strong" />
        </button>

        {/* Notifications */}
        <button className="relative flex size-10 items-center justify-center rounded-[10px]">
          <Icon icon={Notification01Icon} className="size-5 text-text-strong" />
          <span className="absolute right-3 top-3 size-1 rounded-full bg-state-danger" />
        </button>

        {/* User Profile */}
        <button className="flex items-center gap-1.5 rounded-[10px] border border-stroke-soft py-1 pl-1 pr-2">
          <Image
            src="/images/user1.png"
            alt="Super Admin"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="hidden sm:inline text-sm font-medium leading-5 tracking-[-0.084px] text-text-strong">
            Super Admin
          </span>
          <Icon icon={ArrowDown01Icon} className="size-5 text-text-sub" />
        </button>
      </div>
    </header>
  );
}
