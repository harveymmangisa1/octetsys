
'use client';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useFlyerDispatch, useFlyerState } from '@/lib/hooks/useFlyerState';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { UploadCloud, X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

export function UploadSection() {
  const dispatch = useFlyerDispatch();
  const { image } = useFlyerState();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const preview = URL.createObjectURL(file);
      dispatch({ type: 'SET_UPLOADING', payload: true });
      // Simulate upload time
      setTimeout(() => {
        dispatch({ type: 'SET_IMAGE', payload: { file, preview } });
      }, 1000);
    }
  }, [dispatch]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/jpeg': [], 'image/png': [] },
    maxSize: 10 * 1024 * 1024, // 10MB
    multiple: false,
  });

  if (image.preview && image.file) {
    return (
        <Card className="shadow-md border-slate-200">
             <CardHeader>
                <CardTitle>Your Photo</CardTitle>
                <CardDescription>This photo will be featured on your flyer.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="relative group aspect-video rounded-lg overflow-hidden">
                    <Image src={image.preview} alt="Uploaded preview" layout="fill" objectFit="cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <Button variant="destructive" onClick={() => dispatch({ type: 'CLEAR_IMAGE'})}>
                            <X className="mr-2 h-4 w-4"/> Remove
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
  }

  return (
    <Card className="shadow-md border-slate-200">
        <CardHeader>
            <CardTitle>Upload Your Photo</CardTitle>
            <CardDescription>Choose a photo to personalize your flyer.</CardDescription>
        </CardHeader>
        <CardContent>
            <div
                {...getRootProps()}
                className={`p-10 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors ${
                isDragActive ? 'border-slate-800 bg-slate-100' : 'border-slate-300 bg-slate-50'
                }`}
            >
                <input {...getInputProps()} />
                <div className="flex flex-col items-center gap-4 text-slate-600">
                    <UploadCloud className="w-12 h-12" />
                    {isDragActive ? (
                        <p className="font-semibold text-lg">Drop the photo here ...</p>
                    ) : (
                        <div>
                            <p className="font-semibold text-lg">Drag & drop a photo, or click to browse</p>
                            <p className="text-sm text-slate-500 mt-1">PNG or JPG, up to 10MB</p>
                        </div>
                    )}
                </div>
            </div>
        </CardContent>
    </Card>
  );
}
