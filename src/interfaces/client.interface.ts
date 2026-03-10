export interface ClientTag {
  label: string;
  variant: "default" | "secondary" | "outline" | "destructive";
}

export interface ClientContact {
  email: string;
  phone: string;
  website: string;
  location: string;
  currency: string;
  country: string;
}

export interface ClientProfile {
  id: string;
  name: string;
  avatar: string;
  tags: ClientTag[];
  contact: ClientContact;
}
