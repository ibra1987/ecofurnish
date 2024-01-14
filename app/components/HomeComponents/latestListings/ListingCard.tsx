"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type ListingCardType = {
  imgSrc: string;
  title: string;
  description: string;
};

const ListingCard = ({ imgSrc, title, description }: ListingCardType) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
       setInView(true)
      } else {
        setInView(false);
      }
    },
    { threshold: 0.2 } // Adjust the threshold as needed
  );

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`p-4 border rounded-md flex flex-col justify-start items-center space-y-6 opacity-0  transition-all duration-200 ${inView ? "fadeIn" : " fadOut"}`}
    >
      <div className="w-full h-60 rounded-md relative">
        <Image className="rounded-md" alt="listing_image" src={imgSrc} fill={true} />
      </div>
      <h2 className="w-full text-xl text-primary font-medium">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <Link role="button"  href="#" className="text-white font-medium px-6 py-2 bg-primary hover:underline rounded-lg">View listing</Link> 
    </div>
  );
};

export default ListingCard;
