import { Footer } from '@/components/footer';
import { ExperimentsHeading } from './experiments-heading';
import { ExperimentsList } from './experiments-list';
import { Suspense } from 'react';

import { allExp } from '@/experimentsData';


export const dynamic = 'force-dynamic'

export default async function Experiments(){

  const experiments = allExp;

  return (
    <>
      <section>
        <ExperimentsHeading/>
      </section>
      <section className='my-10'>
        <Suspense fallback={<div>Loading Experiments...</div>}>
          <ExperimentsList experiments={experiments}/>
        </Suspense>
      </section>
      <Footer/>
    </>
  )
}