"use client";

import { LISTINGS_CATEGORIES } from "@/constants/ListingCatgories";
import { ListingCondition } from "@/types/listing";
import toast from "react-hot-toast";

export async function addListingHandler(formdata: FormData, userId: string) {
  const title = formdata.get("title");
  const price = formdata.get("price");
  const condition = formdata.get("condition") as ListingCondition;
  const category = formdata.get("category");
  const subcategory = formdata.get("subcategory");
  const images = formdata.getAll("images");
  const description = document.querySelector(".ql-editor")?.innerHTML;
  console.log(description);
  if (
    !title ||
    !description ||
    !price ||
    !images ||
    !condition ||
    !category ||
    !subcategory
  ) {
    toast.error("Please fill in all fields.");
    return;
  }

  //CHECK FOR TYPES AS AN EXTRA VALIDATION STEP
  if (typeof title !== "string" || typeof description !== "string") {
    toast.error("Some fields are missing.");

    return;
  }

  if (
    typeof condition !== "string" &&
    (condition !== "excellent" || condition !== "good" || condition !== "fair")
  ) {
    toast.error("Please select item condition.");

    return;
  }

  if (!Object.keys(LISTINGS_CATEGORIES).includes(category as string)) {
    toast.error("Invalid category.");

    return;
  }
  if (LISTINGS_CATEGORIES[subcategory as keyof typeof LISTINGS_CATEGORIES]) {
    toast.error("Invalid sub category.");
    return;
  }

  //check for images - every listing should have at least 2 images with one of them as a  featured image

  if (!images || images.length < 2) {
    toast.error("Please add at least two images.");
    return;
  }
}
