import { Card, CardContent } from "@/components/ui/card";
import type { OverviewCardData } from "@/interfaces/overviewCard.interface";
import { cn } from "@/lib/utils";

interface OverviewCardProps {
  card: OverviewCardData;
}

export function OverviewCard({ card }: OverviewCardProps) {
  const Icon = card.icon;

  return (
    <Card>
      <CardContent className="flex items-center gap-4 p-4">
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
            card.iconBg
          )}
        >
          <Icon className={cn("h-5 w-5", card.iconColor)} />
        </div>
        <div className="min-w-0">
          <p className="text-sm text-muted-foreground">{card.title}</p>
          <p className="text-lg font-semibold leading-tight">{card.value}</p>
          <p className="truncate text-xs text-muted-foreground">
            {card.metadata}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
