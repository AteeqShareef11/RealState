import { callAPi } from './http-common';

const getDashData = () => callAPi.get('insta/getDashData');

const dashboardServices = {
  getDashData,
};

export default dashboardServices;
