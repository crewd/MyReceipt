import { NextApiRequest, NextApiResponse } from 'next';
import data from '../../data/index.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST' && req.body.basicFunds) {
    data.basicFunds = req.body.basicFunds;
    const basicFunds = data.basicFunds;
    return res.status(200).json({ basicFunds });
  }
}
