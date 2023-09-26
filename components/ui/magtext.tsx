"use client";
import React from "react";

export default function MagText({
  text
}: {
  text: string
}){

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
    <span onMouseMove={handleMouseMove} className="inline-flex variable-font cursor-default">
      { characters }
    </span>
  )
}