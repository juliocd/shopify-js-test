import Shopify from "@shopify/shopify-api";

export const getCustomers = async (ctx) => {

  const session = await Shopify.Utils.loadCurrentSession(ctx.req, ctx.res);
  const client = new Shopify.Clients.Graphql(session.shop, session.accessToken);

  const data = await client.query({
    data: `{
    customers(first: 10) {
      edges {
        node {
          id
        }
      }
    }
  }`,
  });

  return {
    total: 2,
    data: data
  };
}
