import { OverviewCard } from "@/components/overview/OverviewCard";
import { overviewCards } from "@/config/overviewCards";

export function OverviewCards() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {overviewCards.map((card) => (
        <OverviewCard key={card.id} card={card} />
      ))}
    </div>
  );
}
