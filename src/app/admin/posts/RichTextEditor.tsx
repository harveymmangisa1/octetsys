'use client';

import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

// Use dynamic import to prevent server-side rendering of the component
const ReactQuill = dynamic(
  async () => {
    // QuillLink modifies the document object, so it must only be imported on the client
    await import('./QuillLink');
    return import('react-quill');
  },
  { ssr: false }
);

export function RichTextEditor({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const modules = useMemo(() => ({
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }), []);

  return <ReactQuill theme="snow" value={value} onChange={onChange} modules={modules} />;
}
