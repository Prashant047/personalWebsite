import { Footer } from '@/components/footer';
import { ExperimentsHeading } from './experiments-heading';
import { ExperimentsList } from './experiments-list';
import { fetchExperiments } from '@/lib/fetchExperiments';
import { Suspense } from 'react';


export default async function Experiments(){

  const experiments = await fetchExperiments();

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