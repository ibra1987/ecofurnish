"use server";

import { ServerActionResponse } from "@/types/app";

export async function AddListingAction(
  formdata: FormData
): Promise<ServerActionResponse> {
  // TODO CHECK VAKIDITY OIF FIELDS SERVER SIDE AND RETURN SERVER ACTION RESPONSE AND REVALIDATE PATH

  return {
    success: true,
  };
}
