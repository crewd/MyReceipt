import { NextApiRequest, NextApiResponse } from 'next';
import defaultData from '../../../data/index.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query;
  const { id } = query;
  if (req.method === 'DELETE' && id) {
    defaultData.Items.splice((Number(id), 0));
    return res.status(200).json({ success: true });
  }
  return res.status(400).json({ success: false });
}
