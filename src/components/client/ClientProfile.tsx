import Image from "next/image";
import type { ClientProfile as ClientProfileType } from "@/interfaces/client.interface";
import { Icon } from "../ui/icon";
import {
  ArrowDown01Icon,
  Copy01Icon,
  Link01Icon,
  Location05Icon,
  Money04Icon,
  MoreHorizontalIcon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { Button } from "../ui/button";

interface ClientProfileProps {
  client: ClientProfileType;
}

export function ClientProfile({ client }: ClientProfileProps) {
  return (
    <div className="flex flex-col gap-5 rounded-lg border border-stroke-soft bg-bg-weak p-5">
      {/* Top row: Avatar, Name, Badges, More button */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="relative size-16 shrink-0 rounded-full bg-[#e1e4ea] shadow-[0px_16px_24px_0px_rgba(0,0,0,0.05)]">
            <div className="absolute inset-0 overflow-hidden rounded-full border-4 border-bg-white">
              <Image
                src={client.avatar}
                alt={client.name}
                width={64}
                height={64}
                className="size-full object-cover"
              />
            </div>
          </div>
          {/* Name & Badges */}
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-3 md:gap-[30px]">
              <h2 className="text-xl font-medium leading-6 tracking-[-0.36px] text-text-strong md:text-2xl">
                {client.name}
              </h2>
              <div className="flex items-center gap-2">
                {client.tags.map((tag) =>
                  tag.variant === "destructive" ? (
                    <span
                      key={tag.label}
                      className="inline-flex h-6 items-center rounded-full bg-state-error px-2.5 py-0.5 text-[11px] font-medium uppercase leading-3 tracking-[0.22px] text-white"
                    >
                      {tag.label}
                    </span>
                  ) : (
                    <span
                      key={tag.label}
                      className="inline-flex items-center gap-1 rounded-full border border-state-warning px-2 h-6.25 text-[11px] font-medium uppercase leading-3 tracking-[0.22px] text-state-warning"
                    >
                      {tag.label}
                      <Icon icon={ArrowDown01Icon} className="size-4" />
                    </span>
                  )
                )}
              </div>
            </div>
            <p className="text-sm leading-5 tracking-[-0.084px] text-text-sub">
              {client.company}
            </p>
          </div>
        </div>
        {/* More button */}
        <Button variant={"ghost"} className="flex items-center justify-center rounded-lg border border-stroke-soft bg-white hover:bg-gray-50 p-1.5 shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)] size-8 ">
          <Icon icon={MoreHorizontalIcon} className="size-5 text-text-strong" />
        </Button>
      </div>

      {/* Contact info row */}
      <div className="flex flex-wrap gap-3">
        {/* Phone */}
        <div className="flex w-full items-center justify-between rounded-xl bg-bg-white p-3 sm:w-auto sm:min-w-[280px]">
          <div className="flex items-center gap-2">
            <Icon icon={WhatsappIcon} className="size-6" />
            <span className="text-sm font-medium leading-5 tracking-[-0.084px] text-text-strong">
              {client.contact.phone}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Button className="flex items-center justify-center rounded-lg bg-bg-weak w-8 h-7">
              <Icon icon={Copy01Icon} className="size-5 text-text-sub" />
            </Button>
            <Button className="flex items-center justify-center rounded-lg bg-bg-weak px-1.5 h-7">
              <span className="px-1 text-sm font-medium leading-5 tracking-[-0.084px] text-text-sub">
                Chat
              </span>
            </Button>
          </div>
        </div>

        {/* Website */}
        <div className="flex w-full items-center justify-between rounded-xl bg-bg-white p-3 sm:w-auto sm:min-w-[320px]">
          <div className="flex items-center gap-2">
            <Icon icon={Link01Icon} className="size-6 text-text-strong" />
            <span className="text-sm font-medium leading-5 tracking-[-0.084px] text-text-strong">
              {client.contact.website}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Button className="flex items-center justify-center rounded-lg bg-bg-weak w-8 h-7">
              <Icon icon={Copy01Icon} className="size-5 text-text-sub" />
            </Button>
            <Button className="flex items-center justify-center rounded-lg bg-bg-weak px-1.5 h-7">
              <span className="px-1 text-sm font-medium leading-5 tracking-[-0.084px] text-text-sub">
                Visit
              </span>
            </Button>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center rounded-xl bg-bg-white p-3">
          <div className="flex items-center gap-2">
            <Icon icon={Location05Icon} className="size-6 text-text-strong" />
            <span className="text-sm font-medium leading-5 tracking-[-0.084px] text-text-strong">
              {client.contact.location}
            </span>
          </div>
        </div>

        {/* Currency */}
        <div className="flex items-center justify-between rounded-xl bg-bg-white p-3">
          <div className="flex items-center gap-2">
            <Icon icon={Money04Icon} className="size-6 text-text-strong" />
            <span className="text-sm font-medium leading-5 tracking-[-0.084px] text-text-strong">
              Currency
            </span>
          </div>
          <div className="ml-4 flex items-center gap-2">
            <Image
              src="/images/bd.png"
              alt="BD Flag"
              width={20}
              height={20}
              className="size-5"
            />
            <span className="text-sm font-medium leading-5 tracking-[-0.084px] text-text-sub">
              {client.contact.currency}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
