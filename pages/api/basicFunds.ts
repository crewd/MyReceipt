import { NextApiRequest, NextApiResponse } from 'next';
import defaultData from '../../data/index.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST' && req.body.basicFunds) {
    defaultData.basicFunds = req.body.basicFunds;
    return res.status(200).json({ success: true, data: defaultData });
  }
}
