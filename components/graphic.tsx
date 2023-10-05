"use client";
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

class Grid {
  width = 0;
  height = 0;
  numRow = 0;
  numCol = 0;
  cw = 0;
  ch = 0;

  constructor(width:number, height:number, numRow:number, numCol:number) {
    this.width = width;
    this.height = height;
    this.numRow = numRow;
    this.numCol = numCol;
    this.cw = this.width/this.numCol;
    this.ch = this.height/this.numRow;
  }
  
  getCoord(xPos:number, yPos:number): {xCoord: number, yCoord: number}{
    return {
      xCoord: xPos*this.cw + this.cw/2,
      yCoord: yPos*this.ch + this.ch/2,
    }
  }  
  getPos(i:number){
    return {
      xPos: i%this.numCol,
      yPos: Math.floor(i/this.numCol)
    }
  }
  getGrid(): Array<{xCoord:number, yCoord:number}> {
    return [...Array(this.numCol*this.numRow)].map((_,i) => {
      let position = this.getPos(i)
      return this.getCoord(position.xPos, position.yPos);
    })
  }
}

const grid = new Grid(100, 500, 30, 6);
console.log(grid.getGrid());

const degToRadian = (deg:number) => (Math.PI/180)*deg;

const getLineCoord = (length:number, angle:number, px:number, py:number) => ({
  x1: px - (length/2)*Math.cos(degToRadian(angle)),
  y1: py + (length/2)*Math.sin(degToRadian(angle)),
  x2: px + (length/2)*Math.cos(degToRadian(angle)),
  y2: py - (length/2)*Math.sin(degToRadian(angle)),
});

function GraphicRight() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current === null) {
      return;
    }

    const svg = svgRef.current;
    // console.log(svg);

  },[svgRef]);
  

  return (
    <div className="fixed top-10 right-10 h-screen">
      <svg 
        viewBox='0 0 100 500'
        ref={svgRef}
        style={{
          width: '100px',
          height: '500px',
        }}
        // className='border border-neutral-800'
      >
        {grid.getGrid().map(({xCoord, yCoord}, i) => {
          const lineCoord = getLineCoord(15, 45, xCoord, yCoord);
          return (
            <line {...lineCoord} stroke="red" key={i} />
          )
        })}
        {/* <line x1="0" y1="80" x2="100" y2="20" stroke="red" /> */}
      </svg>
    </div>
  );
}

export { GraphicRight };