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
      
      // Debug: Check if we can list buckets
      console.log('Checking buckets...');
      const { data: buckets, error: bucketError } = await supabase.storage.listBuckets();
      
      if (bucketError) {
        console.error('Bucket list error:', bucketError);
        throw new Error(`Storage access error: ${bucketError.message}`);
      }
      
      console.log('Available buckets:', buckets);
      const imagesBucket = buckets?.find(b => b.name === 'images');
      
      if (!imagesBucket) {
        console.error('Images bucket not found in:', buckets);
        throw new Error('Storage bucket "images" not found. Available buckets: ' + buckets?.map(b => b.name).join(', '));
      }
      
      console.log('Images bucket found:', imagesBucket);
      
      // Create unique filename
      const fileName = `${pathPrefix}/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
      console.log('Uploading to:', fileName);
      
      const { data, error } = await supabase.storage
        .from('images')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) {
        console.error('Storage upload error:', error);
        
        // Provide helpful error messages
        if (error.message?.includes('bucket') || error.message?.includes('not found')) {
          throw new Error('Storage bucket not configured. Please check Supabase Storage settings or run database migrations.');
        }
        
        if (error.message?.includes('permission') || error.message?.includes('unauthorized')) {
          throw new Error('Permission denied. Please check your account permissions.');
        }
        
        throw error;
      }

      console.log('Upload successful:', data);
      
      const { data: publicUrlData } = supabase.storage
        .from('images')
        .getPublicUrl(data.path);

      console.log('Public URL:', publicUrlData.publicUrl);
      onUpload(publicUrlData.publicUrl);

      toast({
        title: 'Image uploaded',
        description: 'Your image has been uploaded successfully',
      });
    } catch (error: any) {
      console.error('Upload error:', error);
      let errorMessage = error.message || 'Failed to upload image. Please try again.';
      
      if (error.message?.includes('bucket not found') || error.message?.includes('Bucket not found') || error.message?.includes('not configured')) {
        errorMessage = 'Storage bucket not configured. Please run database migrations to set up storage.';
      }
      
      toast({
        title: 'Error uploading image',
        description: errorMessage,
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