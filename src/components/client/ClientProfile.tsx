import Image from "next/image";
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  DollarSign,
  MessageCircle,
  ExternalLink,
  Flag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ClientTags } from "@/components/client/ClientTags";
import type { ClientProfile as ClientProfileType } from "@/interfaces/client.interface";

interface ClientProfileProps {
  client: ClientProfileType;
}

export function ClientProfile({ client }: ClientProfileProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          {/* Avatar & Name */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Image
              src={client.avatar}
              alt={client.name}
              width={80}
              height={80}
              className="rounded-full"
            />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold">{client.name}</h2>
              <div className="mt-1 flex items-center justify-center gap-1.5 text-sm text-muted-foreground md:justify-start">
                <Flag className="h-4 w-4" />
                <span>{client.contact.country}</span>
              </div>
              <div className="mt-3">
                <ClientTags tags={client.tags} />
              </div>
            </div>
          </div>

          <Separator className="md:hidden" />
          <Separator orientation="vertical" className="hidden h-auto self-stretch md:block" />

          {/* Contact Info */}
          <div className="flex-1 space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{client.contact.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{client.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span>{client.contact.website}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{client.contact.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                <span>{client.contact.currency}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-row gap-2 md:flex-col">
            <Button variant="outline" className="gap-2">
              <MessageCircle className="h-4 w-4" />
              Chat
            </Button>
            <Button variant="outline" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              Visit Website
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
