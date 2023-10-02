import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabaseClient';

type ResponseData = {
  data: any,
  error?: string
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  
  let { data: experiments, error } = await supabase
    .from('experiments')
    .select('*')
    .order('created_at',{ascending: false});

  if( error ){
    console.log(error);
    return res.status(500).json({error:'Internal Server Error', data: []});
  }

  res.status(200).json({ data: experiments});
}