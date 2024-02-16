import { FAKEITEMS } from "@/constants/FakeItems";
import ListingCard, { ListingCardType } from "./ListingCardComponent";

const LatestListings = () => {
  return (
    <section className="w-full flex flex-col justify-start  items-center mb-10 p-2 lg:p-4 bg-white border rounded">
      <div className="w-full lg:w-10/12 flex flex-col justify-start items-center">
        <h2 className="w-full text-left font-bold mt-6 text-gray-700 text-3xl">
          Latest Listings
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 my-4 ">
          {FAKEITEMS.map((item: ListingCardType, index) => (
            <ListingCard
              key={`${item.title}-${index}`}
              imgSrc={item.imgSrc}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestListings;
