'use client';

import { RichTextEditor as Editor } from './RichTextEditor';

export function RichTextEditor(props: { value: string; onChange: (value: string) => void; placeholder?: string; }) {
  return <Editor {...props} />;
}
