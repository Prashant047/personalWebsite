"use client";
import * as Dialog from '@radix-ui/react-dialog';
import { X, MoveRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/text-area';

function ContactDialog(){
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className='text-xs text-neutral-400'>
          contact me
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay 
          className='fixed inset-0 bg-neutral-900/90'
        />
        <Dialog.Content className='fixed top-0 max-w-lg mx-2 w-full bg-neutral-950 p-6 md:p-10 border border-neutral-800 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' >
          <div className='flex items-baseline justify-between mb-8'>
            <h2 className='text-2xl'>
              Get In Touch
            </h2>
            <Dialog.Close asChild>
              <button className='text-neutral-500 hover:text-neutral-300 transition'>
                <X size={20}/>
              </button>
            </Dialog.Close>
          </div>
          <ContactForm/>
          <div className='text-center text-sm text-neutral-500 my-3'>
            <span>Or</span>
          </div>
          <div className='group flex items-center justify-center gap-2 text-blue-400'>
            <small className='leading-none'>
              mail to <a href="mailto:prash.kumar047@gmail.com"><u>prash.kumar047@gmail.com</u></a>
            </small>
            <span className='group-hover:translate-x-2 transition'>
              <MoveRight size={15}/>
            </span>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function ContactForm(){
  return (
    <form action="" className='flex flex-col gap-2'>
      <fieldset>
        <label htmlFor="name" className='text-neutral-400 text-sm'>
          Name
        </label>
        <Input type='text' id='name'/>
      </fieldset>
      <fieldset>
        <label htmlFor="email" className='text-neutral-400 text-sm'>
          Email
        </label>
        <Input type='email' id='email'/>
      </fieldset>
      <fieldset>
        <label htmlFor="message" className='text-neutral-400 text-sm'>
          Message
        </label>
        <Textarea id='message' className='h-24'/>
      </fieldset>
      <button className='bg-neutral-300 text-neutral-950 rounded-md py-2 font-semibold'>
        Send
      </button>
    </form>
  )
}

export { ContactDialog };