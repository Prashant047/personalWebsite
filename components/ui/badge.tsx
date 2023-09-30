import { cn } from "@/lib/utils"

export type TagType = 'react' | 'tailwind' | 'next' | 'framermotion';

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {}
 
function Badge({ className, ...props }: BadgeProps) {
  return (
    <span className={
      cn(`inline-flex items-center rounded-md border border-neutral-700 bg-neutral-800 px-2.5 py-1.5 text-xs text-neutral-200 leading-none 
      transition cursor-default `, className)
    }
      {...props}
    />
  )
}


export { Badge };