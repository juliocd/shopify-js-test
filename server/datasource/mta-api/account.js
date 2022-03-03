import { get } from "./query";

export const getAccount = async (token) => {
  return get('/account/me', token);
}
