import { NextApiRequest, NextApiResponse } from 'next';
import defaultData from '../../../data/index.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const itemId = req.query;
  if (req.method === 'GET' && itemId) {
    const detailItem = defaultData.Items[Number(itemId.id)];
    return res.status(200).json(detailItem);
  }
  return res.status(400).json({ success: false });
}
