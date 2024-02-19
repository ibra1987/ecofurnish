"use client";

import FormInput from "@/app/components/Reusables/FormInput";
import { RichTextEditor } from "../../dashboardComponents/RichTextEditorComponent";
import { ChangeEvent, useState } from "react";
import Button from "@/app/components/Reusables/Button";
import { LISTINGS_CATEGORIES } from "@/constants/ListingCatgories";
import userState from "@/state/users";
import { addListingHandler } from "../handlers";
import { LISTING_CONDITIONS } from "@/constants/ListingCondition";
import ImagesContainerComponent, { ImageInfo } from "./ImagesContainerComponent";

export default function AddListingComponent() {
  const [richTextEditorFocus, setRichTextEditorFocus] = useState(false);
  const [featuredImage,setFeauturedImage]=useState('')
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [imagesInfo, setImagesInfo] = useState<ImageInfo[]>([]);
  const userId = userState.state().id;

  const subCategories =
    LISTINGS_CATEGORIES[selectedCategory as keyof typeof LISTINGS_CATEGORIES] ||
    [];
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    Array.from(files).forEach((file: File) => {
      const reader = new FileReader();
      reader.onload = () => {
        setImagesInfo((prevImages) => [
         ...prevImages,
          {
            path:reader.result as string,
            name:file.name
          },
        ]);
      };
      reader.readAsDataURL(file);
    });
  };
  return (
    <>
      <form
        action={(FormData) => {
          FormData.append("description", description);
          FormData.append("featuredImage",featuredImage)
          addListingHandler(FormData);
        }}
        className="flex-1 bg-white"
      >
        <h2 className="text-4xl font-bold w-full text-center my-5">
          Add a new listing
        </h2>
        <FormInput
          type="text"
          name="title"
          placeholder="Add a descriptive title"
          containerClass="w-full  bg-white   p-2 "
          cssClass="outline-none  p-2 w-full border rounded  focus:border-black focus:border-2 "
          label={{
            text: "Choose a title:",
            cssClass: " block font-bold p-2 ",
            htmlFor: "title",
          }}
        />
        <div className=" p-2 w-full flex flex-col justify-start bg-white ">
          <label className=" block font-bold p-2">Item Description:</label>
          <RichTextEditor
            onChange={(html) => setDescription(html)}
            style={{ minHeight: "100px" }}
            onBlur={() => setRichTextEditorFocus(false)}
            onFocus={() => setRichTextEditorFocus(true)}
            className={`${
              richTextEditorFocus
                ? " border-black border-2 bg-white text-lg  "
                : "w-full text-lg    bg-white "
            }`}
          />
        </div>

        <FormInput
          type="number"
          name="price"
          placeholder="0"
          containerClass="w-full  bg-white   p-2 "
          cssClass="outline-none  p-2 w-full border rounded  focus:border-black focus:border-2 "
          label={{
            text: "Set the price:",
            cssClass: " block font-bold p-2 ",
            htmlFor: "price",
          }}
        />
        <input type="hidden" value={userId} name="userId" />
        <div className="w-full  bg-white   p-2 ">
          <label htmlFor="condition" className=" block font-bold p-2">
            Item condition:
          </label>
          <select
            name="condition"
            id="condition"
            className="outline-none  p-2 w-full border rounded  focus:border-black focus:border-2"
          >
            <option className="text-gray-400" disabled={true} value={""}>
              Select item condition
            </option>
            {LISTING_CONDITIONS.map((condition: string) => (
              <option key={condition}>{condition}</option>
            ))}
          </select>
        </div>
        <div className="w-full  bg-white   p-2 ">
          <label className=" block font-bold p-2">Item category:</label>
          <select
            name="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="outline-none  p-2 w-full border rounded  focus:border-black focus:border-2"
          >
            <option className="text-gray-400" disabled={true} value={""}>
              choose a category
            </option>
            {Object.keys(LISTINGS_CATEGORIES).map((category: string) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="w-full  bg-white   p-2 ">
          <label htmlFor="subCategory" className=" block font-bold p-2">
            Item subactegpry:
          </label>
          <select
            id="subCategory"
            name="subCategory"
            defaultValue={""}
            className="outline-none  p-2 w-full border rounded  focus:border-black focus:border-2"
          >
            <option className="text-gray-400" disabled={true} value={""}>
              choose a sub category
            </option>
            {subCategories.map((subcategory: string) => (
              <option key={subcategory}>{subcategory}</option>
            ))}
          </select>
        </div>
        <FormInput
          type="file"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleFileChange(e)
          }
          allowMultiple={true}
          name="images"
          placeholder=""
          containerClass="w-full  bg-white   p-2 "
          cssClass="outline-none  p-2 w-full border rounded  focus:border-black focus:border-2 "
          label={{
            text: "Add images:",
            cssClass: " block font-bold p-2 ",
            htmlFor: "price",
          }}
        />
        <div className="w-full flex justify-end space-x-6 px-10">
          <Button
            text="Publish"
            cssClass=" bg-secondary outline-none flex justify-center text-white  block font-bold p-2 rounded w-1/2 md:1/3 lg:w-1/4"
            type="submit"
          />
          <Button
            text="Save for later"
            cssClass=" bg-gray-600 outline-none flex justify-center text-white  block font-bold p-2 rounded w-1/2 md:1/3 lg:w-1/4"
            type="button"
          />
        </div>
      </form>
      {imagesInfo && imagesInfo.length > 0 && (
        <ImagesContainerComponent featuredImage={featuredImage} imagesInfo={imagesInfo}  setFeaturedImage={setFeauturedImage} />
      )}
    </>
  );
}
