'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { PlusIcon, UploadCloudIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

export function ImageUpload({ onUpload }: { onUpload: (url: string) => void }) {
  const [uploading, setUploading] = useState(false);
  const supabase = createClient();

  async function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      const { data, error } = await supabase.storage
        .from('images')
        .upload(`posts/${Date.now()}-${file.name}`, file);

      if (error) {
        throw error;
      }

      const { data: publicUrlData } = supabase.storage
        .from('images')
        .getPublicUrl(data.path);

      onUpload(publicUrlData.publicUrl);
    } catch (error: any) {
      toast({
        title: 'Error uploading image',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <label
        htmlFor="image-upload"
        className="cursor-pointer bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md p-2 inline-flex items-center"
      >
        {uploading ? (
          <><UploadCloudIcon className="mr-2 h-4 w-4 animate-pulse" /> Uploading...</>
        ) : (
          <><PlusIcon className="mr-2 h-4 w-4" /> Upload Image</>
        )}
      </label>
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageUpload}
        disabled={uploading}
      />
    </div>
  );
}
