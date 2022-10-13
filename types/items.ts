type Item = {
  id: number;
  subTitle: string;
  price: number;
};

export type DetailItem = {
  id: number;
  title: string;
  date: string;
  totalPrice: number;
  items: Item[];
};

export type ItemList = {
  basicFunds: number;
  items: {
    id: number;
    title: string;
    date: string;
    totalPrice: number;
  }[];
};
