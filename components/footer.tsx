import { Github, Twitter, Linkedin } from 'lucide-react';
import React from 'react';

function Footer(){
  return (
    <footer className="py-5 flex justify-between items-center border-t border-neutral-800">
      <small className='text-neutral-400 '>
      © 2023 Prashant Kumar
      </small>
      <div className="flex items-center gap-2">
        <FooterIcon
          icon={<Twitter size={14}/>}
          href="https://twitter.com/Prash_Kumar047"
        />
        <FooterIcon
          icon={<Github size={14}/>}
          href="https://github.com/Prashant047"
        />
        <FooterIcon
          icon={<Linkedin size={14}/>}
          href="https://www.linkedin.com/in/prashant-kumar-047/"
        />
      </div>
    </footer>
  );
}

function FooterIcon({icon, href}:{icon:React.ReactNode, href:string}){
  return (
    <a 
      className='flex h-8 w-8 rounded-full items-center justify-center bg-neutral-700/30 text-neutral-400 hover:bg-neutral-700/50 text-neutral-200 transition'
      href={href}
    >
      {icon}
    </a>
  )
}

export { Footer };