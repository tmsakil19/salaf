"use client";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/icon";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarNav } from "./SidebarNav";
import { SidebarFooter } from "./SidebarFooter";

export function MobileSidebarTrigger() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <button className="flex h-10 w-10 items-center justify-center rounded-lg lg:hidden">
                    <Icon icon={Menu01Icon} className="size-5 text-sb-text-strong" />
                </button>
            </SheetTrigger>
            <SheetContent side="left" showCloseButton={false} className="w-68 p-0">
                <div className="flex h-full flex-col">
                    <SidebarHeader collapsed={false} onToggle={() => { }} />
                    <SidebarNav collapsed={false} />
                    <SidebarFooter collapsed={false} />
                </div>
            </SheetContent>
        </Sheet>
    );
}
