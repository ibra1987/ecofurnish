"use server";

import { LISTINGS_CATEGORIES } from "@/constants/ListingCatgories";
import { CustomError } from "@/lib/CustomError";
import { ErrorFormatter } from "@/lib/ErrorFormater";
import { ServerActionResponse } from "@/types/app";
import { ListingCondition } from "@/types/listing";

export async function AddListingAction(
  formdata: FormData
): Promise<ServerActionResponse> {
  const title = formdata.get("title");
  const price = formdata.get("price");
  const condition = formdata.get("condition") as ListingCondition;
  const category = formdata.get("category");
  const subcategory = formdata.get("subCategory");
  const images = formdata.getAll("images") as File[];
  const description = formdata.get("description");
  // TODO CHECK VAKIDITY OIF FIELDS SERVER SIDE AND RETURN SERVER ACTION RESPONSE AND REVALIDATE PATH
  console.log(title, price, condition, category, subcategory, description);
  try {
    if (
      !title ||
      !description ||
      !price ||
      !condition ||
      !category ||
      !subcategory
    ) {
      throw new CustomError("Please fill in all fields.", 400);
    }

    //CHECK FOR TYPES AS AN EXTRA VALIDATION STEP
    if (typeof title !== "string" || typeof description !== "string") {
      throw new CustomError("Some fields are missing.", 400);
    }

    if (
      typeof condition !== "string" &&
      (condition !== "excellent" ||
        condition !== "good" ||
        condition !== "fair")
    ) {
      throw new CustomError("Please select item condition.", 400);
    }

    if (!Object.keys(LISTINGS_CATEGORIES).includes(category as string)) {
      throw new CustomError("Invalid category.", 400);
    }
    if (LISTINGS_CATEGORIES[subcategory as keyof typeof LISTINGS_CATEGORIES]) {
      throw new CustomError("Invalid sub category.", 400);
    }

    //check for images - every listing should have at least 2 images with one of them as a  featured image

    if (!images || images.length < 2) {
      throw new CustomError("Please add at least two images.", 400);

      // TODO ADD LISTING TO SANITY
    }
    return {
      success: true,
    };
  } catch (error) {
    const handledError = ErrorFormatter(error);

    return {
      success: false,
      errors: handledError.error,
    };
  }
}
