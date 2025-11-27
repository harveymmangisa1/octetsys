import { PostForm } from '../PostForm.client';

export const runtime = 'edge';
export const dynamic = "force-dynamic";

export default function NewPostPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">New Post</h1>
      <PostForm />
    </div>
  );
}
