import { cn } from "@/lib/utils"

export type TagType = 'react' | 'tailwind' | 'next' | 'framermotion';

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {}
 
function Tag({ className, ...props }: BadgeProps) {
  return (
    <div className={
      cn(`inline-flex items-center rounded-full border px-2.5 py-1.5 text-[0.6rem] font-semibold leading-none 
      transition cursor-default `, className)
    } {...props} />
  )
}

function TagReact(){
  return <Tag className="text-[#149eca] border-[#149eca] hover:bg-[#149eca] hover:text-neutral-900">react</Tag>;
}

function TagNext(){
  return <Tag className="text-[#449d5d] border-[#449d5d] hover:bg-[#449d5d] hover:text-neutral-900">next</Tag>;
}

function TagTailWind(){
  return <Tag className="text-[#38bdf8] border-[#38bdf8] hover:bg-[#38bdf8] hover:text-neutral-900">tailwind</Tag>;
}

function TagFramerMotion(){
  return <Tag className="text-[#38bdf8] border-[#38bdf8] hover:bg-[#38bdf8] hover:text-neutral-900">framermotion</Tag>;
}

export { Tag, TagReact, TagTailWind, TagNext, TagFramerMotion }