import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {
  Card,
  ResourceList,
  Stack,
  TextStyle,
  Thumbnail
} from "@shopify/polaris";
import store from 'store-js';
import { Redirect } from '@shopify/app-bridge/actions';
import { Context } from '@shopify/app-bridge-react';

// GraphQL query to retrieve products by IDs.
// The price field belongs to the variants object because
// variations of a product can have different prices.
const GET_PRODUCTS_BY_ID = gql`
  query getProducts($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        title
        handle
        descriptionHtml
        id
        images(first: 1) {
          edges {
            node {
              id
              altText
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              price
              id
            }
          }
        }
      }
    }
  }`;

const ResourceListWithProducts = async () => {
  return <Query query={GET_PRODUCTS_BY_ID} variables={{ids: store.get('ids')}}>
  {({ data, loading, error}) => {
      if(loading) return <div>Loading...</div>;
      if(error) return <div>{error.message}</div>;

      return <Card>
        <ResourceList
          showHeader
          resourceName={{ singular: 'Product', plural: 'Products'}}
          items={data.nodes}
          renderItem={item => {
              const media = (
                <Thumbnail source={item.images.edges[0] ? item.images.edges[0].node.id : ''} alt={item.images.edges[0] ? item.images.edges[0].node.altText : ''} />
              )
            }
          }
        />
      </Card>
    }
  }
  </Query>
}

export default ResourceListWithProducts;
