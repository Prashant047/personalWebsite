"use client"

import { AlignLeft, ArrowRight, GitBranch, ScreenShare } from "lucide-react"
import { TagFramerMotion, TagNext, TagReact, TagTailWind } from "./tag"
import { cn } from "@/lib/utils"
import React, { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";

const tagMapping = {
  'react': <TagReact/>,
  'tailwind': <TagTailWind/>,
  'next': <TagNext/>,
  'framermotion': <TagFramerMotion/>,
}
 
export interface ExperimentCardProps {
  title: string,
  description: string,
  live_url: string,
  repository_url: string
  tags: Array<string>,
  className?: string
}
 
 
const ExperimentCard = ({ className, live_url, repository_url, title, description, tags }: ExperimentCardProps) => {

  const [active, setActive] = useState(false);

  return (
      <Card 
        className={cn(`relative group hover:bg-neutral-800/50 border-neutral-800 ${active?'pointer-event-none':'cursor-pointer'} `, className)} 
        onClick={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <CardHeader className="flex items-center gap-2">
          <i>
            <AlignLeft className=" text-blue-700" size={15}/>
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
        {/* @ts-ignore */}
          {tags.map((tag, i) => <React.Fragment key={i}>{tagMapping[tag]}</React.Fragment> )}
        </CardFooter>
        <AnimatePresence>
          {active && (
            <motion.div 
              className="absolute inset-0 bg-neutral-900/70 rounded-md flex items-center justify-center gap-8"
              initial={{backdropFilter: 'blur(0px)', opacity:1}}
              animate={{backdropFilter: 'blur(12px)', opacity:1}}
              exit={{backdropFilter: 'blur(0px)', opacity:0}}
            >
              <BackDropButton 
                icon={<GitBranch size={20}/>}
                href={repository_url}
                side="left"
              >
                repo
              </BackDropButton>
              <BackDropButton 
                icon={<ScreenShare size={20}/>}
                href={live_url}
                side="right"
              >
                live demo
              </BackDropButton>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
  )
}
ExperimentCard.displayName = "ExperimentCard"

function BackDropButton({
  children, icon, href, side
}:{
  children:React.ReactNode, 
  icon:React.ReactNode,
  href:string,
  side: 'left' | 'right'
}) {
  return (
    <motion.div 
      className="flex flex-col items-center group text-neutral-400 hover:text-neutral-200"
      initial={{opacity:0, x:10*(side === 'left'?-1:1)}}
      animate={{opacity:1, x:0}}
      whileHover={{scale:1.1}}
    >
      <a href={href} target="_blank" className="h-12 w-12 flex items-center justify-center bg-neutral-900 rounded-full overflow-hidden">
        {icon}
      </a>
      <small className="text-xs font-light">
        {children}
      </small>
    </motion.div>
  )
}


export { ExperimentCard };