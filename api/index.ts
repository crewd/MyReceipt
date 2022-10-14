import axios from 'axios';

const baseURL = '/api';

export const getList = async () => {
  const { data } = await axios.get(`${baseURL}/list`);
  return data;
};

export const addBasicFunds = async (price: number) => {
  const { data } = await axios.post(`${baseURL}/basicFunds`, { basicFunds: price });
  return data;
};

export const addDetailItem = async (item) => {
  const { data } = await axios.post(`${baseURL}/item`, { item });
  return data;
};
