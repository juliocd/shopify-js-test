import { del } from "./query";

export const deleteShopifyStore = async (token, storeId) => {
  return del('/shopify/store/' + storeId, token);
};
