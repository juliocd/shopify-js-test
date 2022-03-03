import { get } from "./query";

export const getSubscribers = async (token, id) => {
  return get('/subscribers', token);
};
