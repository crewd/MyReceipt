import { NextApiRequest, NextApiResponse } from 'next';
import defaultData from '../../../data/index.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST' && req.body.item) {
    defaultData.Items.push(req.body.item);
    return res.status(200).json(defaultData);
  }
  return res.status(400).json({ success: false });
}
