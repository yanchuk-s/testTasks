import axios from 'axios';

const getProducts = () => {
  return axios.get('http://54.39.188.42/');
};

export default {
  getProducts
};