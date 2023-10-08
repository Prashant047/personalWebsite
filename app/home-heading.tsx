"use client";

import { MagText } from "@/components/ui/magtext";
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";

function HomeHeading(){
  return (
  <section>
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
    <motion.p initial={{opacity:0}} animate={{opacity:1}} className="mt-5 text-neutral-300 md:text-md text-neutral-400 border-y border-neutral-800 py-6">
      I'm a <span className="gradient-text-2">Software Engineer</span> building  <span className="gradient-text-1">full-stack web applications</span> with <Badge>React</Badge> <Badge>Node.js</Badge> <Badge>TypeScript</Badge> <Badge>PostgresSQL</Badge> <Badge>Next.js</Badge>. I like designing and building 
      user interfaces as well as experimenting with new technologies.
    </motion.p>
  </section>
  );
}

export { HomeHeading };