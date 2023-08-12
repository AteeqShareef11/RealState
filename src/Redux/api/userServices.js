import { callAPi } from './http-common';

const loginUser = (data) => callAPi.post('/admin/login', data);

const userServices = {
  loginUser,
};

export default userServices;
