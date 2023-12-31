"use client";
import { ExperimentCard } from "@/components/ui/experimentCard";
import { Variants, motion } from "framer-motion";
import { ExperimentDataType } from '@/lib/experimentType';

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

function ExperimentsList({experiments}: {experiments: ExperimentDataType[]}){
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={cardSectionVariant}
      className='grid grid-cols-1 sm:grid-cols-2 gap-6'
    >
      {experiments.map(({
        id,
        title,
        description,
        live_url,
        repository_url,
        tags,
        thumbnail_url
      }) => (
        <motion.article key={id} variants={expVariant} className="self-stretch">
          <ExperimentCard
            live_url={live_url}
            repository_url={repository_url}
            thumbnail_url={thumbnail_url}
            title={title}
            description={description}
            tags={tags.split(',')}
          />
        </motion.article>
      ))}
    </motion.div>
  );
}

export { ExperimentsList };