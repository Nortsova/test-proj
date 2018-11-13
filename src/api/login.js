
import request from './request';
import { mainUrl } from '../const';

export const login = data => request(`${mainUrl}/user/login`, {
  method: 'POST',
  data,
});
