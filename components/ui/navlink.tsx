"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLinks({
  children,
  href,
}:{
  children: React.ReactNode,
  href: string,
}){
  const pathName = usePathname();
  const active = pathName === href;

  return (
      <Link 
        href={href} 
        className="flex items-center justify-center px-2 py-1 relative text-neutral-500 data-[active=true]:text-neutral-300 transition hover:text-neutral-400"
        data-active={active}
      >
        {active && (
          <motion.div
            layoutId="box"
            className="absolute inset-0 border rounded-md"
          />
        )}
        {children}
      </Link>
  )
}

export { NavLinks };