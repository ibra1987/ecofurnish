import { ImageAsset, Slug } from "sanity";

export interface Listing {
  _id: string;
  user: string;
  title: string;
  description: string;
  price: number;
  publishedAt: Date;
  slug: Slug;
  images: ImageAsset[];
}

export type ListingCondition = "excellent" | "good" | "fair";
