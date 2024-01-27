
import { client } from "@/sanity/lib/client";
import { Listing } from "@/types/listing";

import ListingsWrapper from "./ListingsWrapper";
import ListingsFilters from "./ListingsFilters";





export default async function page() {
  const listings =
    (await client.fetch(`*[_type == "listing"] | order(publishedAt){
      _id,
      slug,
    title,
    description,
    price,
    images,
    PublishedAt
  }`)) as Listing[];


  return (
   <section className=" flex flex-col justify-start items-center min-h-screen">
        <div className="w-full lg:w-10/12 flex  items-start my-10">
      
        <ListingsWrapper listings={listings} />
        
        </div>
   </section>
  );
}
