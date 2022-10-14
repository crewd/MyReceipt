import axios from 'axios';
import { DetailItem } from '../types/items';

const baseURL = '/api';

export const getList = async () => {
  const { data } = await axios.get(`${baseURL}/list`);
  return data;
};

export const addBasicFunds = async (price: number) => {
  const { data } = await axios.post(`${baseURL}/basicFunds`, { basicFunds: price });
  return data;
};

export const addDetailItem = async (item: DetailItem) => {
  const { data } = await axios.post(`${baseURL}/item`, { item: item });
  return data;
};
