import type { OverviewCardData } from "@/interfaces/overviewCard.interface";
import { CircleDollarIncomingIcon } from "../custom-icons";
interface OverviewCardProps {
  card: OverviewCardData;
}

export function OverviewCard({ card }: OverviewCardProps) {
  return (
    <div className="flex flex-col rounded-xl border border-stroke-soft bg-bg-white px-5 pb-[30px] pt-6 shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-bg-weak">
            {/* <Icon icon={card.icon} className="size-6 text-text-sub" /> */}
            <CircleDollarIncomingIcon className="size-6 text-text-sub" />
          </span>
          <span className="text-base leading-5 tracking-[-0.12px] text-text-sub sm:text-xl">
            {card.title}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-medium leading-8 tracking-[-0.16px] text-text-strong sm:text-[32px] sm:leading-10">
            {card.value}
          </p>
          {card.subtitle && (
            <p className="text-sm leading-5 tracking-[-0.084px] text-text-strong">
              {card.subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
