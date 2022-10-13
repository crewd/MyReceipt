import { NextApiRequest, NextApiResponse } from 'next';
import data from '../../data/index.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const items = data.Items.filter((item) => item.id > 0);
    const itemList = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        date: item.date,
        totalPrice: item.totalPrice,
      };
    });

    const dataFilter = {
      basicFunds: data.basicFunds,
      items: itemList,
    };
    return res.status(200).json(dataFilter);
  }
}
