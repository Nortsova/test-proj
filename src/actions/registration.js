
import { SUBMIT_REGISTRATION } from '../const';

export const submitRegistrationForm = ({ email, password }) => ({
  type: SUBMIT_REGISTRATION,
  payload: {
    email,
    password,
  },
});
export const userLogged = () => ({
  type: LOGGED,
});