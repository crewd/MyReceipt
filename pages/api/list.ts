import { NextApiRequest, NextApiResponse } from 'next';
import defaultData from '../../data/index.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const items = defaultData.Items.filter((item) => item.title.length > 0);
    const itemList = items.map((item) => {
      return {
        title: item.title,
        date: item.date,
        totalPrice: item.totalPrice,
      };
    });

    const dataFilter = {
      basicFunds: defaultData.basicFunds,
      items: itemList,
    };
    return res.status(200).json(dataFilter);
  }
}
