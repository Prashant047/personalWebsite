"use client";
import { ExperimentCard } from '@/components/ui/experimentCard';
import { Footer } from '@/components/footer';
import { ExperimentsHeading } from './experiments-heading';
import { motion, Variants } from 'framer-motion';

const cardSectionVariant: Variants  = {
  hidden:{
    opacity:1,
  },
  visible:{
    opacity:1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const expVariant = {
  hidden:{opacity:0, x:-10},
  visible:{opacity:1, x: 0}
};

export default function Experiments(){
  return (
    <>
      <section>
        <ExperimentsHeading/>
      </section>
      <section className='my-10'>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={cardSectionVariant}
          className='flex flex-col gap-4'
        >
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
      </section>
      <Footer/>
    </>
  )
}