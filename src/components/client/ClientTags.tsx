import { Badge } from "@/components/ui/badge";
import type { ClientTag } from "@/interfaces/client.interface";

interface ClientTagsProps {
  tags: ClientTag[];
}

export function ClientTags({ tags }: ClientTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge key={tag.label} variant={tag.variant}>
          {tag.label}
        </Badge>
      ))}
    </div>
  );
}
