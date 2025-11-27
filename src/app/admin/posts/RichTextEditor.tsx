'use client';

import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import './QuillLink';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export function RichTextEditor({ value, onChange }: { value: string, onChange: (value: string) => void }) {
  return <ReactQuill theme="snow" value={value} onChange={onChange} />;
}
