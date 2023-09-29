"use client";
import * as Dialog from '@radix-ui/react-dialog';
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
          className='absolute inset-0 bg-neutral-900/90'
        />
        <Dialog.Content className='absolute inset-0 px-2'>
          <div className='max-w-lg mx-auto mt-[200px] p-8 py-12 bg-neutral-950 rounded-lg'>
            <h2 className='text-2xl'>
              Get In Touch
            </h2>
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
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export { ContactDialog };