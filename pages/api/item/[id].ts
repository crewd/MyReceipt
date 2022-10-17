import { NextApiRequest, NextApiResponse } from 'next';
import defaultData from '../../../data/index.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (req.method === 'GET' && id) {
    const detailItem = defaultData.Items[Number(id)];
    return res.status(200).json(detailItem);
  }
  return res.status(400).json({ success: false });
}
