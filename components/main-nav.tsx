"use client";

import React, { useState } from "react";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

function MainNav(){
  const [active, setActive] = useState('home');
  return (
    <nav className="mt-10 md:mt-16 mb-12 flex items-center gap-3  ">
      <NavLinks 
        href="/"
        active={active === 'home'}
        setActive={() => setActive('home')}
      >
        home
      </NavLinks>
      <NavLinks 
        href="/experiments"
        active={active === 'experiments'}
        setActive={() => setActive('experiments')}
      >
        experiments
      </NavLinks>
      <figure className="ml-auto h-8 w-8 bg-red-700 rounded-full overflow-hidden">
        <Image src="/images/avatar.png" alt="" width={100} height={100} />
      </figure>
    </nav>
  );
}

function NavLinks({
  children,
  href,
  active,
  setActive,
}:{
  children: React.ReactNode,
  href: string,
  active: boolean,
  setActive: () => void
}){
  return (
    <div
      className="flex items-center justify-center px-2 py-1 relative"
    >
      <Link 
        href={href} 
        className="text-neutral-500 data-[active=true]:text-neutral-300 transition hover:text-neutral-400"
        data-active={active}
        onClick={setActive}
      >
        {active && (
          <motion.div
            layoutId="box"
            className="absolute inset-0 border rounded-md"
          />
        )}
        {children}
      </Link>
    </div>
  )
}

export { MainNav };