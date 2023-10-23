import React  from "react";
import Image from 'next/image';
import { NavLinks } from '@/components/ui/navlink';

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
      <figure className=" group ml-auto relative h-8 w-8 bg-red-700 rounded-full">
        <div className="absolute inset-0 rounded-full bg-blue-700 group-hover:animate-ping"/>
        <Image src="/images/avatar.png" alt="" width={100} height={100} className="rounded-full relative z-10" />
      </figure>
    </nav>
  );
}




export { MainNav };