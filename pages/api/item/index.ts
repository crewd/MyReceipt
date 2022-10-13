import { NextApiRequest, NextApiResponse } from 'next';
import data from '../../../data/index.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST' && req.body.item) {
    data.Items.push(req.body.item);
    const items = data.Items.filter((item) => item.id > 0);
    return res.status(200).json({ items });
  }
}
