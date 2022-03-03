import { get, post, put, del } from "./query";

export const getList = async (token, id) => {
  return get("/shopify/lists/" + id, token);
};

export const listLists = async (token) => {
  return get("shopify/lists", token);
};

export const createList = async (token, data) => {
  return post("shopify/lists", token, data);
};

export const updateList = async (token, id, data) => {
  return put("/shopify/lists/" + id, token, data);
};

export const deleteList = async (token, id) => {
  return del("/shopify/lists/" + id, token);
};
