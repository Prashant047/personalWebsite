import { AlignLeft, ArrowRight } from "lucide-react"
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
 
export interface ExperimentCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  title: string,
  description: string,
  href: string
  tags: Array<TagType>
}
 
const ExperimentCard = React.forwardRef<
  HTMLAnchorElement,
  ExperimentCardProps
>(({ className, href, title, description, tags ,...props }, ref) => (
    <a href={href} ref={ref} className={cn(className)} {...props} >
      <Card className="group hover:bg-neutral-800/50 border-neutral-800">
        <CardHeader className="flex items-center gap-2">
          <i>
            <AlignLeft className="text-neutral-400 text-blue-700" size={15}/>
          </i>
          <CardTitle>
            {title}
          </CardTitle>
          <i>
            <ArrowRight className="text-neutral-400 group-hover:translate-x-3 group-hover:text-neutral-300 transition" size={15}/>
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
    </a>
))
ExperimentCard.displayName = "ExperimentCard"

export { ExperimentCard };