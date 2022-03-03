import { get, post, put, del } from "./query";

export const getSegment = async (token, id) => {
  return get("/shopify/segments/" + id, token);
};

export const listSegments = async (token) => {
  return get("/shopify/segments", token);
};

export const createSegment = async (token, data) => {
  return post("/shopify/segments", token, data);
};

export const updateSegment = async (token, id, data) => {
  return put("/shopify/segments/" + id, token, data);
};

export const deleteSegment = async (token, id) => {
  return del("/shopify/segments/" + id, token);
};
