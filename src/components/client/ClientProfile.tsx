import Image from "next/image";
import type { ClientProfile as ClientProfileType } from "@/interfaces/client.interface";
import { Icon } from "../ui/icon";
import { ArrowDown01Icon, Copy01Icon, Link01Icon, Location05Icon, Money04Icon, MoreHorizontalIcon, WhatsappIcon } from "@hugeicons/core-free-icons";

interface ClientProfileProps {
  client: ClientProfileType;
}

export function ClientProfile({ client }: ClientProfileProps) {
  return (
    <div className="rounded-xl border border-[#ebebeb] bg-[#f7f7f7] p-5">
      {/* Top row: Avatar, Name, Badges, More button */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="relative h-16 w-16 shrink-0">
            <div className="h-16 w-16 overflow-hidden rounded-full border-[3px] border-white shadow-[0px_16px_24px_0px_rgba(0,0,0,0.05)]">
              <Image
                src={client.avatar}
                alt={client.name}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          {/* Name & Badges */}
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-3 md:gap-7.5">
              <h2 className="text-xl md:text-2xl font-medium leading-6 tracking-[-0.36px] text-[#171717]">
                {client.name}
              </h2>
              <div className="flex items-center gap-2">
                {client.tags.map((tag) =>
                  tag.variant === "destructive" ? (
                    <span
                      key={tag.label}
                      className="inline-flex items-center rounded-full bg-[#fb3748] px-2.5 py-0.5 text-[11px] font-medium uppercase leading-3 tracking-[0.22px] text-white"
                    >
                      {tag.label}
                    </span>
                  ) : (
                    <span
                      key={tag.label}
                      className="inline-flex items-center gap-1 rounded-full border border-[#fa7319] px-2.5 py-0.5 text-[11px] font-medium uppercase leading-3 tracking-[0.22px] text-[#fa7319]"
                    >
                      {tag.label}
                      <Icon icon={ArrowDown01Icon} className="h-4 w-4" />
                    </span>
                  )
                )}
              </div>
            </div>
            <p className="text-sm leading-5 tracking-[-0.084px] text-[#5c5c5c]">
              {client.company}
            </p>
          </div>
        </div>
        {/* More button */}
        <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#ebebeb] bg-white shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]">
          <Icon icon={MoreHorizontalIcon} className="h-5 w-5 text-[#171717]" />
        </button>
      </div>

      {/* Contact info row */}
      <div className="mt-5 flex flex-wrap gap-3">
        {/* Phone */}
        <div className="flex items-center justify-between rounded-xl bg-white p-3 w-full sm:w-auto sm:min-w-[280px]">
          <div className="flex items-center gap-2">
            <Icon icon={WhatsappIcon} className="size-6" />
            <span className="text-sm font-medium tracking-[-0.084px] text-[#171717]">
              {client.contact.phone}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <button className="flex h-7 w-8 items-center justify-center rounded-lg bg-[#f7f7f7]">
              <Icon icon={Copy01Icon} className="size-5 text-[#5c5c5c]" />
            </button>
            <button className="flex h-7 items-center gap-1 rounded-lg bg-[#f7f7f7] px-2">
              <span className="text-sm font-medium text-[#5c5c5c]">Chat</span>
            </button>
          </div>
        </div>

        {/* Website */}
        <div className="flex items-center justify-between rounded-xl bg-white p-3 w-full sm:w-auto sm:min-w-[320px]">
          <div className="flex items-center gap-2">
            <Icon icon={Link01Icon} className="h-6 w-6 text-[#171717]" />
            <span className="text-sm font-medium tracking-[-0.084px] text-[#171717]">
              {client.contact.website}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <button className="flex h-7 w-8 items-center justify-center rounded-lg bg-[#f7f7f7]">
              <Icon icon={Copy01Icon} className="size-5 text-[#5c5c5c]" />
            </button>
            <button className="flex h-7 items-center gap-1 rounded-lg bg-[#f7f7f7] px-2">
              <span className="text-sm font-medium text-[#5c5c5c]">Visit</span>
            </button>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center rounded-xl bg-white p-3">
          <div className="flex items-center gap-2">
            <Icon icon={Location05Icon} className="h-6 w-6 text-[#171717]" />
            <span className="text-sm font-medium tracking-[-0.084px] text-[#171717]">
              {client.contact.location}
            </span>
          </div>
        </div>

        {/* Currency */}
        <div className="flex items-center justify-between rounded-xl bg-white p-3">
          <div className="flex items-center gap-2">
            <Icon icon={Money04Icon} className="h-6 w-6 text-[#171717]" />
            <span className="text-sm font-medium tracking-[-0.084px] text-[#171717]">
              Currency
            </span>
          </div>
          <div className="ml-4 flex items-center gap-2">

            <Image src={"/images/bd.png"} alt="BD Flag" width={20} height={20} />
            <span className="text-sm font-medium text-[#171717]">
              {client.contact.currency}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
