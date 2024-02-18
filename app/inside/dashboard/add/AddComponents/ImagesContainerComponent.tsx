import Image from "next/image";

function ImagesContainerComponent({ imagePaths }: { imagePaths: string[] }) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 my-10">
      {imagePaths &&
        imagePaths.map((imagePath: string) => {
          const imageSrc = imagePath;

          return (
           <div key={imagePath} className=" p-2 border rounded">
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
