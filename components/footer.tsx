import { Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';
import React from 'react';
import { ContactDialog } from '@/components/contact-dialog';

function Footer(){
  return (
    <footer className="py-5 border-t border-neutral-800">
      <div className=' flex justify-between items-center mb-3'>
        <small className='text-neutral-400 '>
          <a href="/RESUME_.pdf" target='_blank' className='flex items-center gap-1 hover:underline'>
            Resume <ExternalLink size={10}/>
          </a>
        </small>
        <ContactDialog/>
        <small className='text-neutral-400 '>
          Dublin, IE
        </small>
      </div>
      <div className=' flex justify-between items-center'>
        <small className='text-neutral-400 '>
          © 2023 Prashant Kumar
        </small>
        <div className="flex items-center gap-2">
          <a 
            className={
              `flex h-8 w-8 rounded-full items-center justify-center bg-neutral-700/30 text-neutral-400 
              hover:text-neutral-200 hover:bg-[#1DA1F2] transition
            `}
            href="https://twitter.com/Prash_Kumar047"
          >
            {<Twitter size={14}/>}
          </a>
          <a 
            className={
              `flex h-8 w-8 rounded-full items-center justify-center bg-neutral-700/30 text-neutral-400 
              hover:text-neutral-200 hover:bg-[#333333] transition
            `}
            href="https://github.com/Prashant047"
          >
            {<Github size={14}/>}
          </a>
          <a 
            className={
              `flex h-8 w-8 rounded-full items-center justify-center bg-neutral-700/30 text-neutral-400 
              hover:text-neutral-200 hover:bg-[#0077b5] transition
            `}
            href="https://www.linkedin.com/in/prashant-kumar-047/"
          >
            {<Linkedin size={14}/>}
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };