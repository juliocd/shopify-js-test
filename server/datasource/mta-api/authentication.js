import { post } from "./query";

export const validateShopifyStore = async (storeId, accessToken, scopes) => {
  const response = await post('/auth/shopify/validate', null, {
    storeId,
    accessToken,
    scopes
  });

  return response.data.token;
};

export const createShopifyAccount = async (data) => {
  return post('/account/create-shopify-account', null, data);
};

export const loginFromShopify = async (data) => {
  return post('/auth/shopify/login', null, data);
};
