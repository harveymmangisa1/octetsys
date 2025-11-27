'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { PlusIcon, UploadCloudIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function ImageUpload({
  onUpload,
  currentImage,
  pathPrefix = 'posts'
}: {
  onUpload: (url: string) => void;
  currentImage?: string | null;
  pathPrefix?: string;
}) {
  const [uploading, setUploading] = useState(false);
  const supabase = createClient();
  const { toast } = useToast();

  async function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validation constants
    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
    const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      toast({
        title: 'File too large',
        description: 'Please select an image smaller than 5MB',
        variant: 'destructive',
      });
      event.target.value = ''; // Reset input
      return;
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      toast({
        title: 'Invalid file type',
        description: 'Please select a JPEG, PNG, WebP, or GIF image',
        variant: 'destructive',
      });
      event.target.value = ''; // Reset input
      return;
    }

    try {
      setUploading(true);
      const { data, error } = await supabase.storage
        .from('images')
        .upload(`${pathPrefix}/${Date.now()}-${file.name}`, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) {
        throw error;
      }

      const { data: publicUrlData } = supabase.storage
        .from('images')
        .getPublicUrl(data.path);

      onUpload(publicUrlData.publicUrl);

      toast({
        title: 'Image uploaded',
        description: 'Your image has been uploaded successfully',
      });
    } catch (error: any) {
      toast({
        title: 'Error uploading image',
        description: error.message || 'Failed to upload image. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
      event.target.value = ''; // Reset input
    }
  }

  if (currentImage) {
    return (
      <div className="mt-4">
        <img
          src={currentImage}
          alt="Featured"
          className="w-full h-32 object-cover rounded-md border"
        />
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="w-full mt-2"
          onClick={() => onUpload('')}
        >
          Remove Image
        </Button>
      </div>
    );
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
