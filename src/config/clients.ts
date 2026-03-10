import type { ClientProfile } from "@/interfaces/client.interface";

export const clientData: ClientProfile = {
  id: "CLT-001",
  name: "Arthur Taylor",
  avatar: "/images/user1.png",
  company: "Walton Bangladesh",
  tags: [
    { label: "Ad Agency", variant: "destructive" },
    { label: "VIP", variant: "outline" },
  ],
  contact: {
    email: "arthur@walton.com",
    phone: "+880 1234567890",
    website: "lebukdigital.com",
    location: "California, USA",
    currency: "BDT",
    country: "Bangladesh",
  },
};
