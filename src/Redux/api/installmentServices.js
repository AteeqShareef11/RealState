import { callAPi, callAPiMultiPart } from './http-common';

const createInstallment = (data, id) => callAPiMultiPart.post(`insta/createInsatallment/${id}`, data);
const getBuyerInstallment = (id) => callAPi.get(`insta/getBuyerInstallment/${id}`);
const getInstallmentbyMonth = () => callAPi.get('insta/getInstallmentbyMonth');
const getInstallmentDetail = () => callAPi.get('insta/getInstallmentDetail');

const installmentServices = {
  createInstallment,
  getBuyerInstallment,
  getInstallmentbyMonth,
  getInstallmentDetail,
};

export default installmentServices;
