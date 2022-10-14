import { NextApiRequest, NextApiResponse } from 'next';
import data from '../../../data/index.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST' && req.body.item) {
    data.Items.push(req.body.item);
    console.log(data);
    return res.status(200).json(data);
  }
  return res.status(400).json({ success: false });
}
