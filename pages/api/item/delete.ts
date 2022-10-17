import { NextApiRequest, NextApiResponse } from 'next';
import defaultData from '../../../data/index.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query;
  const { id } = query;
  if (req.method === 'DELETE' && id) {
    const itemFilter = defaultData.Items.filter((_, index) => index !== Number(id));
    defaultData.Items = itemFilter;
    return res.status(200).json({ success: true, data: defaultData.Items });
  }
  return res.status(400).json({ success: false });
}
