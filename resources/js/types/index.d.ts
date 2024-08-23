import type { User } from "./models/user";

export type SharedProps<
  T extends Record<string, unknown> = Record<string, unknown>
> = T & {
  auth: {
    user: User | null;
  };
  site: {
    name: string;
    email: string | null;
    phone: string | null;
    logo: string | null;
    slogan: string | null;
    title: string | null;
    description: string | null;
    address: string | null;
    facebook: string | null;
    twitter: string | null;
    instagram: string | null;
    tiktok: string | null;
    youtube: string | null;
    whatsapp: string | null;
  };
};
