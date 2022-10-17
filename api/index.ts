import axios from 'axios';
import { DetailItem } from '../types/items';

const baseURL = '/api';

export const getList = async () => {
  const { data } = await axios.get(`${baseURL}/list`);
  return data;
};

export const addPrice = async (price: number) => {
  const data = await axios.post(`${baseURL}/basicFunds`, { basicFunds: price });
  return data;
};

export const changePrice = async (price: number) => {
  const data = await axios.patch(`${baseURL}/basicFunds`, { basicFunds: price });
  return data;
};

export const addDetailItem = async (item: DetailItem) => {
  const { data } = await axios.post(`${baseURL}/item`, { item: item });
  return data;
};

export const getDetailItem = async (id: number) => {
  const { data } = await axios.get(`${baseURL}/item/${id}`);
  return data;
};

export const deleteItem = async (id: number) => {
  const deleteAPI = await axios.delete(`${baseURL}/item/delete/?id=${id}`);
  return deleteAPI;
};
