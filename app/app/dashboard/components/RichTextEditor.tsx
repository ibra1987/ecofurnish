"use client"

import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

export const RichTextEditor= dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');
    // eslint-disable-next-line react/display-name
    return ({ ...props }) => <RQ {...props}  />;
  },
  {
    ssr: false,
  }
) as typeof ReactQuill;