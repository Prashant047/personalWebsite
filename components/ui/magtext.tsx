"use client";
import React from "react";
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

export interface MagTextProps {
  text: string,
  className: string,
  fadeIn?: boolean
};

function MagText({text, className, fadeIn=false}: MagTextProps ){

  const handleMouseMove = (event: React.MouseEvent<HTMLSpanElement>) => {

    // @ts-ignore
    const containerSpan = event.target.parentElement as HTMLSpanElement;
    const boundingRect = containerSpan.getBoundingClientRect();
    let localX = event.clientX - boundingRect.x;

    for(let i=0;i<containerSpan.children.length; i++ ){
      const childBoundingRect = containerSpan.children[i].getBoundingClientRect();
      let childX = childBoundingRect.x - boundingRect.x;

      let diff = Math.abs(localX-childX);
      let weight = Math.max(300, 800*(1-(diff/100)));

      // @ts-ignore
      containerSpan.children[i].style.fontWeight = `${weight}`;
    }

  }

  const characters = text.split('').map((char, index) => {
    if (char === ' ') {
      return <span key={index}>&nbsp;</span>
    }
    return (
      <span key={index}>{char}</span>
    )
  });


  return (
    <motion.span initial={{opacity: fadeIn ? 0: 1}} animate={{opacity:1}} onMouseMove={handleMouseMove} className={cn("inline-flex variable-font cursor-default font-publicsans", className)}>
      { characters }
    </motion.span>
  )
}

export { MagText };