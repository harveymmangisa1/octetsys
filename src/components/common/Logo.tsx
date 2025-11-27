import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <Image 
        src="/logo.png" 
        alt="Octet Systems Logo" 
        fill 
        className="object-contain" 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
