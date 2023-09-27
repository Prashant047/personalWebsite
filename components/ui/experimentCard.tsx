import { AlignLeft, ArrowRight, Github } from "lucide-react"
import { TagFramerMotion, TagNext, TagReact, TagTailWind } from "./tag"
import { cn } from "@/lib/utils"
import * as React from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { TagType } from "./tag";

const tagMapping = {
  'react': <TagReact/>,
  'tailwind': <TagTailWind/>,
  'next': <TagNext/>,
  'framermotion': <TagFramerMotion/>,
}
 
export interface ExperimentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string,
  description: string,
  href: string
  tags: Array<TagType>
}
 
const ExperimentCard = React.forwardRef<
  HTMLDivElement,
  ExperimentCardProps
>(({ className, href, title, description, tags ,...props }, ref) => (
    <Card ref={ref} className={cn("group hover:bg-neutral-800/50 border-neutral-800", className)} {...props} >
      <CardHeader className="flex items-center gap-2">
        <i>
          <AlignLeft className="text-neutral-400 text-blue-700" size={15}/>
        </i>
        <a href={href} className="hover:underline">
          <CardTitle>
            {title}
          </CardTitle>
        </a>
        <i>
          <ArrowRight className="text-neutral-400 group-hover:translate-x-3 group-hover:text-neutral-300 transition" size={15}/>
        </i>
        <i className="ml-auto h-6 w-6 text-neutral-400 rounded-full bg-neutral-800/50 hover:bg-neutral-800 hover:text-neutral-200 flex items-center justify-center">
          <a href="https://github.com/Prashant047">
            <Github className="transition" size={13}/>
          </a>
        </i>
      </CardHeader>
      <CardContent className="pt-2">
        <p className="text-neutral-500 group-hover:text-neutral-400 transition">
          {description}
        </p>
      </CardContent>
      <CardFooter className="flex items-center gap-2">
        {tags.map((tag:TagType) => tagMapping[tag] )}
      </CardFooter>
    </Card>
))
ExperimentCard.displayName = "ExperimentCard"

export { ExperimentCard };