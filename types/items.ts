export type Items = {
  basicFunds: number;
  consumption: {
    id: number;
    title: string;
    date: string;
    price: number;
  }[];
};

export type DetailItem = {
  title: string;
  date: string;
  totalPrice: number;
  items: {
    id: number;
    subTitle: string;
    price: number;
  }[];
};
