import { MagText } from "@/components/ui/magtext";
import { HomeExpGrid } from './home-exp-grid';
import { Footer } from "@/components/footer";
import { ArrowRight } from 'lucide-react';
import { HomeHeading } from './home-heading';
import Link from "next/link";
import { Suspense } from "react";

import { fetchHomeExperiments } from '@/lib/fetchHomeExperiments';

export const dynamic = 'force-dynamic'

export default async function Home() {
  const experiments = await fetchHomeExperiments();

  return (
    <>
      <HomeHeading/>
      <section className="my-10">
        <MagText text="Experiments" className="text-3xl" fadeIn />
        <Suspense fallback={<div>Loading...</div>}>
          <HomeExpGrid experiments={experiments}/>
        </Suspense> 
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

