import { type IconSvgElement } from "@hugeicons/react";

export interface NavItem {
  label: string;
  href: string;
  icon: IconSvgElement;
  active?: boolean;
  hasSubmenu?: boolean;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}
