import {getCustomers} from "../../datasource/shopify-api/customers";

const getCustomersHandler = async (ctx) => {
  let customers;

  try {
    customers = await getCustomers(ctx);
  } catch (err) {
    ctx.body = {
      success: false,
      error: 'Unable to retrieve customers'
    };
    console.log('err', err)

    return;
  }

  ctx.body = {
    success: true,
    data: customers
  };
};

export default getCustomersHandler;
