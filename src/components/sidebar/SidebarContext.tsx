"use client";

import { createContext, useContext } from "react";

interface SidebarContextType {
    collapsed: boolean;
    toggle: () => void;
}

export const SidebarContext = createContext<SidebarContextType>({
    collapsed: false,
    toggle: () => { },
});

export function useSidebar() {
    return useContext(SidebarContext);
}
