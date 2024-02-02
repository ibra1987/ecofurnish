"use client"
import { Listing } from "@/types/listing";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId, useCdn } from "../../../sanity/env";
import {Eye} from "lucide-react"
import userState from "@/state/users";
const myConfiguredSanityClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: process.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

function SingleListingCard({ listing }: { listing: Listing }) {
// if(userId !== listing.user)  return<></>
  return (
  <>
    <li
      key={listing._id}
      className="hover:scale-105 transition duration-100 hover:bg-gray-100 flex flex-col justify-start items-start w-full space-y-2 p-2 py-8 border-b  border rounded hover:shadow-md cursor-pointer"
    >
      <div className=" w-full h-56 relative ">
        <Image
          alt="listing"
          src={urlFor(listing.images[0]).url()}
         fill={true}
          className="rounded"
        />
      </div>
     
        <h2 className=" font-extr-bold text-gray-500">{listing.title}</h2>
        {/* <BlockContent
     blocks={sliceDescription(listing.description, 5)}
     serializers={serializers}
   />               */}

        <span className="font-medium text-primary">  ${listing.price}</span>
   <div className="w-full flex justify-between">
   <span className="text-gray-500">
      used 
    </span>
    <span>
        <Eye />
    </span>
   </div>
    </li>

    {/* delete */}
    
  
  </>
  );
}

export default SingleListingCard;
