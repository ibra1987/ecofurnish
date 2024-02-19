"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export type ImageInfo = {
  name:string,
  path:string
}
function ImagesContainerComponent({ imagesInfo,setFeaturedImage,featuredImage}: {featuredImage:string, imagesInfo: ImageInfo[],setFeaturedImage:(imageName:string)=>void }) {
  const [divClass,setDivClass]=useState('p-2 border rounded cursor-pointer')

  const selectFeaturedImage=(name:string)=>{
        
    setFeaturedImage(name)
    setDivClass("p-2  border-2 rounded bg-red-400 cursor-pointer")
      console.log(featuredImage)
      console.log(divClass)
  }
  
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 my-10">
      {imagesInfo &&
        imagesInfo.map((info: ImageInfo) => {
          const imageSrc = info.path;

          return (
           <div  onClick={()=>selectFeaturedImage(info.name)}  key={info.path}
            className={divClass}>
             <Image
              alt="listing_image"
              src={imageSrc} 
              width={300}
              height={200}
              className="rounded"
            />
            </div>
          );
        })}
    </div>
  );
}

export default ImagesContainerComponent;
