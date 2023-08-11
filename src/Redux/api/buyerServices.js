import { callAPi, callAPiMultiPart } from './http-common';

const createPlotOwner = (data) => callAPiMultiPart.post('/plot/create/Onwer', data);
const getCustomers = () => callAPi.get('/plot/getCustomers');
const searchBuyer = (data) => callAPi.get(`plot/searchBuyer?${data}`);
const getCustomersById = (id) => callAPi.get(`plot/getCustomerbyId/${id}`);

const buyerServices = {
  createPlotOwner,
  getCustomers,
  searchBuyer,
  getCustomersById,
};

export default buyerServices;
