
import { cn } from '@/lib/utils';

export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn("w-8 h-8", className)}
      {...props}
    >
      <path fill="#1E3A5F" d="M64 0L192 0L256 64L256 192L192 256L64 256L0 192L0 64Z"/>
      <path fill="#FFFFFF" d="M189.42 46.58L46.58 46.58L46.58 189.42L128 231.84L211.84 189.42L211.84 128L197.7 113.86L197.7 60.72L189.42 46.58ZM60.72 60.72L183.55 60.72L183.55 119.71L128 150.2L60.72 119.71L60.72 60.72Z"/>
      <path fill="#42A5F5" d="M211.84 128L231.84 128L231.84 150.2L211.84 164.34L191.84 164.34L191.84 142.12L211.84 128Z"/>
      <path fill="#FFFFFF" d="M197.7 113.86L191.84 119.71L191.84 142.12L197.7 147.97L211.84 164.34L217.69 158.49L197.7 144.91L197.7 113.86Z"/>
    </svg>
  );
}
