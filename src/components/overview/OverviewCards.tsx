import { OverviewCard } from "@/components/overview/OverviewCard";
import { overviewCards } from "@/config/overviewCards";

export function OverviewCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {overviewCards.map((card) => (
        <OverviewCard key={card.id} card={card} />
      ))}
    </div>
  );
}
