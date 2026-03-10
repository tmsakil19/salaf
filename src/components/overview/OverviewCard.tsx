import type { OverviewCardData } from "@/interfaces/overviewCard.interface";
import { cn } from "@/lib/utils";

interface OverviewCardProps {
  card: OverviewCardData;
}

export function OverviewCard({ card }: OverviewCardProps) {
  const Icon = card.icon;

  return (
    <div className="flex flex-col justify-between rounded-xl border border-[#ebebeb] bg-white p-4 shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]">
      <div className="flex flex-col gap-1">
        <div
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
            card.iconBg
          )}
        >
          <Icon className={cn("h-4.5 w-4.5", card.iconColor)} />
        </div>
        <p className="text-xs text-[#a3a3a3]">{card.title}</p>
        <p className="text-2xl font-semibold leading-8 tracking-[-0.36px] text-[#171717]">
          {card.value}
        </p>
      </div>
      {card.subtitle && (
        <p className="mt-1 text-xs text-[#a3a3a3]">{card.subtitle}</p>
      )}
    </div>
  );
}
