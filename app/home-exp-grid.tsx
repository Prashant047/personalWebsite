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
      staggerChildren: 0.08
    }
  }
};

const expVariant: Variants = {
  hidden:{opacity:0, y:5},
  visible:{opacity:1, y: 0}
};

function HomeExpGrid({experiments}: {experiments: ExperimentDataType[]}) {
  return (
    <motion.div variants={cardSectionVariant} initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5 mb-1">
      {experiments.map(({
        id,
        title,
        description,
        live_url,
        repository_url,
        tags
      }) => (
        <motion.article key={id} variants={expVariant}>
          <ExperimentCard
            live_url={live_url}
            repository_url={repository_url}
            title={title}
            description={description}
            tags={tags.split(',')}
          />
        </motion.article>
      ))}
    </motion.div>
  );
}

export { HomeExpGrid };