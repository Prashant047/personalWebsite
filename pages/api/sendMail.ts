import type { NextApiRequest, NextApiResponse } from 'next';
import { CourierClient } from "@trycourier/courier";


async function sendMail({message, email, name}:{ message: string, email:string, name:string}) {
  const courier = CourierClient({authorizationToken: process.env.COURIER_TOKEN});

  const { requestId } = await courier.send({
    message: {
      content: {
        title: "Contact From Website: sender {{name}} ",
        body: `
        Name: {{name}},
        Email : {{email}}
        Message : {{message}}
        `
      },
      data: {
        message, email, name
      },
      to: {
        email: "prash.kumar047@gmail.com"
      }
    }
  });
  
  return requestId;
}
 
type ResponseData = {
  message: string,
  error?: string
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    try{
      const requestID = await sendMail({name, email, message});
    }
    catch (error) {
      console.log(error);
      res.status(500).json({error: 'Internal Error', message:'Failed to send mail'});
      return;
    }
  }


  res.status(200).json({ message: 'Email Sent!' });
}