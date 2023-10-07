"use client";
import { useRef, useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { useLocalMouse } from '@/lib/hooks';

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

let grid = new Grid(1319, 766, 15, 15);

const delay = (ms:number) => new Promise((resolve) => {
  setTimeout(() => {
    resolve('');
  },ms);
});

const degToRadian = (deg:number) => (Math.PI/180)*deg;

const getLineCoord = (length:number, angle:number, px:number, py:number) => ({
  x1: px - (length/2)*Math.cos(degToRadian(angle)),
  y1: py + (length/2)*Math.sin(degToRadian(angle)),
  x2: px + (length/2)*Math.cos(degToRadian(angle)),
  y2: py - (length/2)*Math.sin(degToRadian(angle)),
});

function BackgroundGraphic() {
  const containerRef = useRef(null);
  const [mouseX, mouseY] = useLocalMouse(containerRef);
  const [angle, setAngle] = useState(45);
  
  useEffect(() => {
    if ( containerRef.current === null) {
      return ;
    }

    const container = containerRef.current as HTMLElement;
    const handler = () => {
      const height = container.getBoundingClientRect().height;
      const width = container.getBoundingClientRect().width;
      container.setAttribute('viewBox', `0 0 ${width} ${height}`)
      grid = new Grid(width, height , 15, 15);
    }

    window.addEventListener('resize', handler);

    return () => window.removeEventListener('resize', handler);
  },[]);
  

  return (
    <div className="fixed inset-0 pointer-none">
      <svg 
        viewBox='0 0 1319 766'
        onClick={() => setAngle( prev => prev + 60)}
        ref={containerRef}
        style={{
          opacity: 0.2
        }}
        className='w-full mx-auto h-screen'
      >
        {grid.getGrid().map(({xCoord, yCoord}, i) => (
          <Line
            centerX={xCoord}
            centerY={yCoord}
            mouseX={mouseX}
            mouseY={mouseY}
            angle={angle}
            length={10}
            key={i}
          />
        ))}
      </svg>
    </div>
  );
}

interface LineProps {
  centerX: number,
  centerY: number,
  angle: number,
  length: number,
  mouseX: number,
  mouseY: number
  index?: number,
}

function Line({
  centerX, 
  centerY, 
  angle, 
  length, 
  mouseX,
  mouseY
}: LineProps){
  const motionAngle = useSpring(0);

  const x1 = useTransform(motionAngle, latest => getLineCoord(length, latest, centerX, centerY).x1);
  const y1 = useTransform(motionAngle, latest => getLineCoord(length, latest, centerX, centerY).y1);
  const x2 = useTransform(motionAngle, latest => getLineCoord(length, latest, centerX, centerY).x2);
  const y2 = useTransform(motionAngle, latest => getLineCoord(length, latest, centerX, centerY).y2);

  useEffect(() => {
    async function stuff(){
      let yDiff = mouseY-centerY;
      let xDiff = mouseX-centerX;
      let angleToMouse = (Math.atan2(yDiff, xDiff)*180)/Math.PI;

      motionAngle.set(angleToMouse);
    }
    stuff();
  },[mouseX, mouseY]);

  useEffect(() => {
    async function stuff(){
      let dist = Math.sqrt(Math.pow((mouseX-centerX),2) + Math.pow((mouseY-centerY),2));

      await delay(dist*1);
      motionAngle.set(angle);
    }
    stuff();
  },[angle]);

  return (
    <motion.line 
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="#333"
      strokeWidth={2}
    />
  )
}

export { BackgroundGraphic };