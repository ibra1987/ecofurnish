import Image from "next/image";

function ImagesContainerComponent({ imagePaths }: { imagePaths: string[] }) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
      {imagePaths &&
        imagePaths.map((imagePath: string) => {
          const imageSrc = imagePath;

          return (
            <Image
              key={imagePath}
              alt="listing_image"
              src={imageSrc}
              width={100}
              height={80}
            />
          );
        })}
    </div>
  );
}

export default ImagesContainerComponent;
