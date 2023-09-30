"use client";
import * as Dialog from '@radix-ui/react-dialog';
import { X, MoveRight, CircleDashed, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/text-area';
import { useState } from 'react';

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

async function sendMail({message, email, name}: {message:string, email:string, name: string}){
  const response = await fetch("/api/sentMail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({message, email, name}),
  });
  return response.json();
}

function ContactForm(){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    if(name.length === 0) {
      setError('No Name provided');
      return;
    }
    if(email.length === 0) {
      setError('No Email provided');
      return;
    }
    if(message.length === 0) {
      setError('Message is Empty');
      return;
    }

    setLoading(true);
    setSuccess(false);
    try{
      const res = await sendMail({name, email, message});
      setSuccess(true);
      setError('');
      console.log(res);
    }
    catch (error) {
      console.log(error);
      setError('Failed to Sent message, please try the direct mail link below');
    }
    setLoading(false);

  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
      {error !== '' && (
        <div className='text-center text-xs text-red-400'>
          <span>{error}</span>
        </div>
      )}
      <fieldset>
        <label htmlFor="name" className='text-neutral-400 text-sm'>
          Name
        </label>
        <Input type='text' name="name" value={name} onChange={(e) => setName(e.target.value)} />
      </fieldset>
      <fieldset>
        <label htmlFor="email" className='text-neutral-400 text-sm'>
          Email
        </label>
        <Input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </fieldset>
      <fieldset>
        <label htmlFor="message" className='text-neutral-400 text-sm'>
          Message
        </label>
        <Textarea name='message' className='h-24' value={message} onChange={(e) => setMessage(e.target.value)} />
      </fieldset>
      <button 
        disabled={loading} 
        className={`${success?'bg-green-500':'bg-neutral-300'} text-neutral-950 flex items-center justify-center gap-2 rounded-md py-2 font-semibold disabled:opacity-80`}
      >
        {loading ? (
          <>
            <CircleDashed className='animate-spin'/>
            <span>Sending Message...</span>
          </>
        ) : success ? (
          <>
            <Check/>
            <span>Sent!</span>
          </>
        ):'Send'}
      </button>
    </form>
  )
}

export { ContactDialog };