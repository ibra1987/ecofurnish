"use client";

import dynamic from "next/dynamic";
import { forwardRef } from "react";
import ReactQuill, { ReactQuillProps } from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    // Forward the ref with the correct type
    return forwardRef<ReactQuill, ReactQuillProps>((props, ref) => (
      <RQ ref={ref} {...props} />
    ));
  },
  {
    ssr: false,
  }
) as typeof ReactQuill;

export { RichTextEditor };
