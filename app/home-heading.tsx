"use client";

import { MagText } from "@/components/ui/magtext";
import { motion } from 'framer-motion';

function HomeHeading(){
  return (
    <div className='flex items-center gap-2 font-publicsans'>
      <motion.span 
        initial={{opacity:0, y:10}}
        animate={{opacity:1, y:0}}
        transition={{ease: [0.25, 1, 0.5, 1]}}
        className='text-7xl text-neutral-700 font-bold'>
        01
      </motion.span>
      <div>
        <motion.h1
          className="text-sm font-light tracking-wider"
          initial={{opacity:0, y:10}}
          animate={{opacity:1, y:0}}
          transition={{ease: [0.25, 1, 0.5, 1], delay:0.05}}
        >Hi There,
        </motion.h1>
        <motion.div
          initial={{opacity:0, y:10}}
          animate={{opacity:1, y:0}}
          transition={{ease: [0.25, 1, 0.5, 1], delay:0.1}}
        >
          <MagText className="text-4xl" text="I'M PRASHANT"/>
        </motion.div>
      </div>
    </div>
  );
}

export { HomeHeading };