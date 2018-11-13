
import { SUBMIT_LOGIN, LOGGED } from '../const';

export const submitLoginForm = ({ email, password }) => ({
  type: SUBMIT_LOGIN,
  payload: {
    email,
    password,
  },
});
export const userLogged = () => ({
  type: LOGGED,
});