import type { IconSvgElement } from "@hugeicons/react";

export interface OverviewCardData {
  id: string;
  title: string;
  value: string;
  subtitle?: string;
  icon: IconSvgElement;
}
