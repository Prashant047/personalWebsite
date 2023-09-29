"use client";

import { MagText } from "@/components/ui/magtext";
import { ExperimentCard } from '@/components/ui/experimentCard';
import { Footer } from "@/components/footer";
import { ArrowRight } from 'lucide-react';
import { HomeHeading } from './home-heading';
import { motion, Variants } from 'framer-motion';
import Link from "next/link";

const cardSectionVariant: Variants  = {
  hidden:{
    opacity:1,
  },
  visible:{
    opacity:1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const expVariant: Variants = {
  hidden:{opacity:0, y:5},
  visible:{opacity:1, y: 0}
};

export default function Home() {
  return (
    <>
      <section>
        <HomeHeading/>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} className="mt-5 text-neutral-300 md:text-md text-neutral-400 border-y border-neutral-800 py-6">
          I'm a Software Engineer building full-stack web applications with React, Node.js, 
          TypeScript, and PostgreSQL. I like to hang out in Discord communities to help 
          other developers, you will probably find me in Reactiflux or the Next.js Discord
        </motion.p>
      </section>
      <section className="my-10">
        {/* <h1 className="text-3xl">Experiments</h1> */}
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
          <MagText text="Experiments" className="text-3xl"/>
        </motion.div>
        <motion.div variants={cardSectionVariant} initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5 mb-1">
          <motion.article variants={expVariant}>
            <ExperimentCard
              href="#"
              title="Example Title Here"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt veniam, accusantium explicabo consequatur "
              tags={["react", "tailwind"]}
            />
          </motion.article>
          <motion.article variants={expVariant}>
            <ExperimentCard
              href="#"
              title="Example Title Here"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt veniam, accusantium explicabo consequatur "
              tags={["react", "tailwind"]}
            />
          </motion.article>
          <motion.article variants={expVariant}>
            <ExperimentCard
              href="#"
              title="Example Title Here"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt veniam, accusantium explicabo consequatur "
              tags={["react", "tailwind"]}
            />
          </motion.article>
          <motion.article variants={expVariant}>
            <ExperimentCard
              href="#"
              title="Example Title Here"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt veniam, accusantium explicabo consequatur "
              tags={["react", "tailwind"]}
            />
          </motion.article>
        </motion.div>
        <div className="flex justify-end">
          <Link 
            className="group inline-flex items-center leading-none gap-1 text-xs text-neutral-500 hover:text-neutral-300 hover:underline" 
            href="/experiments"
          >
            more experiments <i><ArrowRight className="group-hover:translate-x-1 transition" size={10}/></i>
          </Link>
        </div>
      </section>
      <Footer/>
    </>
  );
}

// TODO: Make the border of experiment card blue when in active state
