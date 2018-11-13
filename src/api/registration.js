
import request from './request';
import { mainUrl } from '../const';


export const registration = data => request(`${mainUrl}/user/login`, {
  method: 'POST',
  data,
});
