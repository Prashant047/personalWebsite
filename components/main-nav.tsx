import React  from "react";
import Image from 'next/image';
import { NavLinks } from '@/components/ui/navlink';
import { ContactDialog } from '@/components/contact-dialog';

function MainNav(){
  return (
    <nav className="pt-6 md:pt-10 mb-12 flex items-center gap-3  ">
      <NavLinks 
        href="/"
      >
        <small className="text-[0.6rem] text-neutral-300">01.</small>home
      </NavLinks>
      <NavLinks 
        href="/experiments"
      >
        <small className="text-[0.6rem] text-neutral-300">02.</small>experiments
      </NavLinks>
      <ContactDialog/>
      <figure className="ml-auto h-8 w-8 bg-red-700 rounded-full overflow-hidden">
        <Image src="/images/avatar.png" alt="" width={100} height={100} />
      </figure>
    </nav>
  );
}




export { MainNav };