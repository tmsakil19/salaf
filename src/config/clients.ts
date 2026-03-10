import type { ClientProfile } from "@/interfaces/client.interface";

export const clientData: ClientProfile = {
  id: "CLT-001",
  name: "Rakib Hasan",
  avatar: "/images/user1.png",
  tags: [
    { label: "Ad Agency", variant: "secondary" },
    { label: "VIP", variant: "default" },
  ],
  contact: {
    email: "rakib.hasan@example.com",
    phone: "+880 1712-345678",
    website: "https://rakibagency.com",
    location: "Dhaka, Bangladesh",
    currency: "BDT (৳)",
    country: "Bangladesh",
  },
};
