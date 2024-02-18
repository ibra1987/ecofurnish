import { LISTINGS_CATEGORIES } from "@/constants/ListingCatgories";
import { LISTING_CONDITIONS } from "@/constants/ListingCondition";

export default {
  name: "listing",
  title: "Listing",
  type: "document",
  fields: [
    {
      name: "user",
      title: "user",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: Object.keys(LISTINGS_CATEGORIES),
      },
    },
    {
      name: "subCargeory",
      title: "Subcategory",
      type: "string",
    },
    {
      name: "condition",
      title: "Condition",
      type: "string",

      options: {
        list: LISTING_CONDITIONS,
      },
    },

    {
      name: "publishedAt",
      title: "Published At",
      type: "date",
    },
    // New fields for image gallery
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "featuredImage",
      title: "Featured Image",
      type: "reference",
      to: [{ type: "image" }],
    },
  ],
};
