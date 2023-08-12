import axios from 'axios';

// const API_URL = 'http://desktop-t8fb5gv:4365/api/';
const API_URL = 'https://spotless-erin-zipper.cyclic.app/api';
export const IMG_URL = 'https://spotless-erin-zipper.cyclic.app/';

export const callAPi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export const callAPiMultiPart = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-type': 'multipart/form-data',
  },
});

callAPiMultiPart.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('realStateToken');
    if (token && token !== undefined) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

callAPi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('realStateToken');
    if (token && token !== undefined) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const token = localStorage.getItem('realStateToken');

// eslint-disable-next-line consistent-return
const getHeaders = () => {
  if (token !== undefined) {
    return {
      'Content-type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('realStateToken')}`,
    };
  }
};
export const callPrivateAPi = axios.create({
  baseURL: API_URL,
  headers: getHeaders(),
});
