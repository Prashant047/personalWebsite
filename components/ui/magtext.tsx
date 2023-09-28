"use client";
import React from "react";
import { cn } from "@/lib/utils";

export interface MagTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text:string
};

function MagText({text, className, ...props}: MagTextProps ){

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
    <span onMouseMove={handleMouseMove} className={cn("inline-flex variable-font cursor-default font-publicsans", className)} {...props}>
      { characters }
    </span>
  )
}

export { MagText };