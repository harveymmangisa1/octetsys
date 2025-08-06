import { cn } from '@/lib/utils';

export function IncognitoIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-4 w-4", className)}
      {...props}
    >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="16" x2="12" y2="22" />
        <line x1="12" y1="2" x2="12" y2="8" />
        <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
        <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
        <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
        <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
    </svg>
  );
}
