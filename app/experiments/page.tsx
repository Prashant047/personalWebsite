import { MagText } from '@/components/ui/magtext';
import { ExperimentCard } from '@/components/ui/experimentCard';
import { Footer } from '@/components/footer';

export default function Experiments(){
  return (
    <>
      <section>
        <div className='flex items-center gap-2 font-publicsans'>
          <span className='text-7xl text-neutral-700 font-bold'>
            02
          </span>
          <div>
            <h1 className="text-sm font-light tracking-wider">Table of </h1>
            <MagText className="text-4xl" text="EXPERIMENTS"/>
          </div>
        </div>
      </section>
      <section className='my-10'>
        <div className='flex flex-col gap-4'>
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
      </section>
      <Footer/>
    </>
  )
}