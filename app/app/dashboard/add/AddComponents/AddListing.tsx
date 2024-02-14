"use client";

import FormInput from "@/app/components/Reusables/FormInput";
import { RichTextEditor } from "../../dashboardComponents/RichTextEditor";
import { useRef, useState } from "react";
import Button from "@/app/components/Reusables/Button";
import { LISTINGS_CATEGORIES } from "@/constants/ListingCatgories";
import { AddListingAction } from "@/actions/app/listings/AddListing";
import userState from "@/state/users";
import { addListingHandler } from "../handlers";
import { LISTING_CONDITIONS } from "@/constants/ListingCondition";

export default function AddListing() {
  const [richTextEditorFocus, setRichTextEditorFocus] = useState(false);
  const userId = userState.state().id;

  return (
    <form onClick={(e) => e.stopPropagation()} className="flex-1 bg-white">
      <h2 className="text-4xl font-bold w-full text-center my-5">
        Add a new listing
      </h2>
      <FormInput
        type="text"
        name="title"
        placeholder="Add a descriptive title"
        onChange={() => {}}
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
        onChange={() => {}}
        containerClass="w-full  bg-white   p-2 "
        cssClass="outline-none  p-2 w-full border rounded  focus:border-black focus:border-2 "
        label={{
          text: "Set the price:",
          cssClass: " block font-bold p-2 ",
          htmlFor: "price",
        }}
      />
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
          defaultValue={""}
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
        <label className=" block font-bold p-2">Item subactegpry:</label>
        <select
          name="subcategory"
          defaultValue={""}
          className="outline-none  p-2 w-full border rounded  focus:border-black focus:border-2"
        >
          <option className="text-gray-400" disabled={true} value={""}>
            choose a sub category
          </option>
          {LISTINGS_CATEGORIES["Accent Furniture"].map(
            (subcategory: string) => (
              <option key={subcategory}>{subcategory}</option>
            )
          )}
        </select>
      </div>
      <FormInput
        type="file"
        allowMultiple={true}
        name="images"
        placeholder=""
        onChange={() => {}}
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
          formAction={(formData) => addListingHandler(formData, userId)}
        />
        <Button
          text="Save for later"
          cssClass=" bg-gray-600 outline-none flex justify-center text-white  block font-bold p-2 rounded w-1/2 md:1/3 lg:w-1/4"
          type="button"
        />
      </div>
    </form>
  );
}
