import MagText from "@/components/ui/magtext";
import { ExperimentCard } from '@/components/ui/experimentCard';
import { ArrowRight } from 'lucide-react';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section>
        <h3 className="text-lg text-neutral-300">Hi There,</h3>
        <h1 className="text-3xl md:text-5xl">
          I'm&nbsp;<MagText text="Prashant Kumar"/>
        </h1>
        <p className="mt-5 text-neutral-300 md:text-md text-neutral-400">
          I'm a Software Engineer building full-stack web applications with React, Node.js, 
          TypeScript, and PostgreSQL. I like to hang out in Discord communities to help 
          other developers, you will probably find me in Reactiflux or the Next.js Discord
        </p>
      </section>
      <section className="my-10">
        {/* <h1 className="text-3xl">Experiments</h1> */}
        <MagText text="Experiments" className="text-3xl"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5 mb-1">
          <ExperimentCard
            href="#"
            title="Example Title Here"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt veniam, accusantium explicabo consequatur "
            tags={["react", "tailwind"]}
          />
          <ExperimentCard
            href="#"
            title="Example Title Here"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt veniam, accusantium explicabo consequatur "
            tags={["react"]}
          />
          <ExperimentCard
            href="#"
            title="Example Title Here"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt veniam, accusantium explicabo consequatur "
            tags={["react", "tailwind", "next"]}
          />
          <ExperimentCard
            href="#"
            title="Example Title Here"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt veniam, accusantium explicabo consequatur "
            tags={["tailwind"]}
          />
        </div>
        <div className="flex justify-end">
          <Link 
            className="group inline-flex items-center leading-none gap-1 text-xs text-neutral-500 hover:text-neutral-300 hover:underline" 
            href="/experiments"
          >
            more experiments <i><ArrowRight className="group-hover:translate-x-1 transition" size={10}/></i>
          </Link>
        </div>
      </section>
    </>
  );
}
