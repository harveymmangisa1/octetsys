'use client';

import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import './QuillLink';

// Use dynamic import to prevent server-side rendering of the component
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export function RichTextEditor({ value, onChange }: { value: string, onChange: (value: string) => void }) {
  // Render a placeholder or null on the server
  if (typeof window === 'undefined') {
    return null;
  }
  
  return <ReactQuill theme="snow" value={value} onChange={onChange} />;
}
