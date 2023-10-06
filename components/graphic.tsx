"use client";
import { useRef, useEffect, useState } from 'react';
import { motion, motionValue, animate, useAnimate, useSpring, useMotionValue, useTransform, useTime } from 'framer-motion';

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

function GraphicRight() {

  const [angle, setAngle] = useState(45);
  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setAngle(prev => prev + 1);
  //   },100)
  //   return () => clearInterval(id);
  // })
  
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("line", { transform: 'rotate(45)'}, {duration: 0.5})
  });

  return (
    <div className="fixed top-10 right-10 h-screen">
      <svg 
        onClick={() => setAngle(prev => prev + 30)}
        ref={scope}
        viewBox='0 0 100 500'
        style={{
          width: '100px',
          height: '500px',
        }}
        // className='border border-neutral-800'
      >
        {grid.getGrid().map(({xCoord, yCoord}, i) => (
          <Line
            centerX={xCoord}
            centerY={yCoord}
            angle={angle}
            length={15}
            key={i}
            index={i}
          />
        ))}
        {/* <line x1="0" y1="80" x2="100" y2="20" stroke="red" /> */}
      </svg>
    </div>
  );
}

interface LineProps {
  centerX: number,
  centerY: number,
  angle: number,
  length: number,
  index: number
}

function Line({centerX, centerY, angle, length, index}: LineProps){
  // const motionAngle = useSpring(0);
  const time = useTime()
  const motionAngle = useTransform(time, [0, 7000], [0, 360 + index*5], {clamp: false});
  

  const x1 = useTransform(motionAngle, latest => getLineCoord(length, latest, centerX, centerY).x1);
  const y1 = useTransform(motionAngle, latest => getLineCoord(length, latest, centerX, centerY).y1);
  const x2 = useTransform(motionAngle, latest => getLineCoord(length, latest, centerX, centerY).x2);
  const y2 = useTransform(motionAngle, latest => getLineCoord(length, latest, centerX, centerY).y2);
  // const color = useTransform(motionAngle, [0, 360 + index*5], ["#f00", "#00f"], {clamp: false});


  // useEffect(() => {
  //   async function stuff(){
  //     await delay(index*10);
  //     motionAngle.set(angle);
  //   }
  //   stuff();
  // },[angle]);

  // const lineCoord = getLineCoord(length, angle, centerX, centerY);
  return (
    <motion.line 
      // {...lineCoord} 
      // transform={`rotate(${0})`}  
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      
      // style={{
      //   transformBox: 'fill-box',
      //   transformOrigin: 'center',
      // }}
      stroke="#333"
      strokeWidth={2}
    />
  )
}

export { GraphicRight };