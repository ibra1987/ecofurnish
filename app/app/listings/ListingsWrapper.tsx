import { Listing } from "@/types/listing";
import BlockContent from "@sanity/block-content-to-react"; // Import BlockContent
import Link from "next/link";
import SingleListingCard from "./SingleListingCard";

function ListingsWrapper({ listings }: { listings: Listing[] }) {
  console.log(listings[0].slug.current)
  return (
    <section className="w-full ">
 
        {listings.map((listing,index) => (
         <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1" key={index}>
           <Link href={`/app/listings/${listing.slug.current}/${listing._id}`}>
           <SingleListingCard listing={listing} />
           </Link>
           <Link href={`/app/listings/${listing.slug.current}/${listing._id}`}>
           <SingleListingCard listing={listing} />
           </Link>
           <Link href={`/app/listings/${listing.slug.current}/${listing._id}`}>
           <SingleListingCard listing={listing} />
           </Link>
           <Link href={`/app/listings/${listing.slug.current}/${listing._id}`}>
           <SingleListingCard listing={listing} />
           </Link>
           <Link href={`/app/listings/${listing.slug.current}/${listing._id}`}>
           <SingleListingCard listing={listing} />
           </Link>
           <Link href={`/app/listings/${listing.slug.current}/${listing._id}`}>
           <SingleListingCard listing={listing} />
           </Link>
           <Link href={`/app/listings/${listing.slug.current}/${listing._id}`}>
           <SingleListingCard listing={listing} />
           </Link>
         </div>
        ))}
    
    </section>
  );
}

export default ListingsWrapper;
