"use client";

import { AddListingAction } from "@/actions/app/listings/AddListingAction";
import { LISTINGS_CATEGORIES } from "@/constants/ListingCatgories";
import { ServerActionResponse } from "@/types/app";
import { ListingCondition } from "@/types/listing";
import toast from "react-hot-toast";

export async function addListingHandler(formdata: FormData) {
  const title = formdata.get("title");
  const price = formdata.get("price");
  const condition = formdata.get("condition") as ListingCondition;
  const category = formdata.get("category");
  const subcategory = formdata.get("subcategory");
  const images = formdata.getAll("images") as File[];
  const description = document.querySelector(".ql-editor")?.innerHTML;
  // if (
  //   !title ||
  //   !description ||
  //   !price ||
  //   !images ||
  //   !condition ||
  //   !category ||
  //   !subcategory
  // ) {
  //   toast.error("Please fill in all fields.");
  //   return;
  // }

  // //CHECK FOR TYPES AS AN EXTRA VALIDATION STEP
  // if (typeof title !== "string" || typeof description !== "string") {
  //   toast.error("Some fields are missing.");

  //   return;
  // }

  // if (
  //   typeof condition !== "string" &&
  //   (condition !== "excellent" || condition !== "good" || condition !== "fair")
  // ) {
  //   toast.error("Please select item condition.");

  //   return;
  // }

  // if (!Object.keys(LISTINGS_CATEGORIES).includes(category as string)) {
  //   toast.error("Invalid category.");

  //   return;
  // }
  // if (LISTINGS_CATEGORIES[subcategory as keyof typeof LISTINGS_CATEGORIES]) {
  //   toast.error("Invalid sub category.");
  //   return;
  // }

  // //check for images - every listing should have at least 2 images with one of them as a  featured image

  // if (!images || images.length < 2) {
  //   toast.error("Please add at least two images.");
  //   return;
  // }
  //TODO ADD A CHECKER FOR  FILE TYPE

  const { success, errors, data } = (await AddListingAction(
    formdata
  )) as ServerActionResponse;

  if (!success && errors && errors?.length > 0) {
    const errorString = errors.join("-\n");
    toast.error(errorString);
    return;
  }
}
