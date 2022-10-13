import axios from 'axios';

const baseURL = '/api';

export const getList = async () => {
  const { data } = await axios.get(`${baseURL}/list`);
  return data;
};

export const changeBasicFunds = async () => {
  const { data } = await axios.post('/api/basicFunds', { basicFunds: 600 });
  return data;
};
