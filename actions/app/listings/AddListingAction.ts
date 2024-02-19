"use server";

import { LISTINGS_CATEGORIES } from "@/constants/ListingCatgories";
import { CustomError } from "@/lib/CustomError";
import { ErrorFormatter } from "@/lib/ErrorFormater";
import { ServerActionResponse } from "@/types/app";
import { ListingCondition } from "@/types/listing";
import { sanityClient } from "@/sanity/lib/client";
import { v4 as uuidv4 } from "uuid";
import { SanityDocument } from "next-sanity";

export async function AddListingAction(
  formdata: FormData
): Promise<ServerActionResponse> {
  const title = formdata.get("title") as string;
  const price = formdata.get("price") as string;
  const condition = formdata.get("condition") as ListingCondition;
  const category = formdata.get("category") as string;
  const subCategory = formdata.get("subCategory") as string;
  const images = formdata.getAll("images") as File[];
  const description = formdata.get("description") as string;
  const user = formdata.get("userId") as string;
  const  featuredImage = formdata.get("featuredImage") as string
  // TODO CHECK VAKIDITY OIF FIELDS SERVER SIDE AND RETURN SERVER ACTION RESPONSE AND REVALIDATE PATH

  try {
    if (
      !title ||
      !description ||
      !price ||
      !condition ||
      !category ||
      !subCategory
    ) {
      throw new CustomError("Please fill in all fields.", 400);
    }

    //CHECK FOR TYPES AS AN EXTRA VALIDATION STEP
    if (typeof title !== "string" || typeof description !== "string") {
      throw new CustomError("Some fields are missing.", 400);
    }

    if (
      typeof condition !== "string" ||
      (condition !== "excellent" &&
        condition !== "good" &&
        condition !== "fair")
    ) {
      throw new CustomError("Please select a valid item condition.", 400);
    }

    if (!Object.keys(LISTINGS_CATEGORIES).includes(category as string)) {
      throw new CustomError("Invalid category.", 400);
    }
    if (
      !LISTINGS_CATEGORIES[
        category as keyof typeof LISTINGS_CATEGORIES
      ].includes(subCategory as string)
    ) {
      throw new CustomError("Invalid sub category.", 400);
    }

    //check for images - every listing should have at least 2 images with one of them as a  featured image

    if (!images || images.length < 2) {
      throw new CustomError("Please add at least two images.", 400);
    }

    // Generate unique keys for each image
    const imagesWithKeys = images.map(() => uuidv4());

    // Upload images to Sanity and get their asset IDs
    const uploadedImages = await Promise.all(
      imagesWithKeys.map(async (imageKey, index) => {
        const image = images[index];
        const uploadedImage = await sanityClient.assets.upload("image", image);
        return {
          _type: "image",
          _key: imageKey, // Include the generated _key for the image
          asset: { _type: "reference", _ref: uploadedImage._id },
          url:uploadedImage.url,
          name:uploadedImage.originalFilename,
          id:uploadedImage._id
        };
      })
    );

    const mainImage = uploadedImages.find((image)=>image.name === featuredImage) || uploadedImages[0]  
    console.log(mainImage)
    const _featuredImage = {
      _type: 'image',
      asset: {
        _type: 'reference',
       _ref: mainImage.id.split("-")[1], 
      },
    }
    console.log(_featuredImage)
    const dataObject = {
      _type: "listing",
      title,
      price: parseFloat(price),
      condition,
      category,
      subCategory,
      description,
      user,
      featuredImage:_featuredImage,
      images: uploadedImages,
      publishedAt:new Date().toISOString()
    };
    const insertionResponse = await sanityClient.create(dataObject);
    return {
      success: true,
      data: insertionResponse as SanityDocument,
    };
  } catch (error) {
    const handledError = ErrorFormatter(error);

    return {
      success: false,
      errors: handledError.error,
    };
  }
}
