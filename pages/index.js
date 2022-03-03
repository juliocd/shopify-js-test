import React, { useState } from 'react';
import { Page, Layout, EmptyState} from "@shopify/polaris";
import { ResourcePicker, TitleBar, useAppBridge } from '@shopify/app-bridge-react';
import { authenticatedFetch } from "@shopify/app-bridge-utils";

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

export const Index = () => {
  const app = useAppBridge();
  const [open, setOpen] = useState(false);

  const handleSelection = (resources) => {
    setOpen(true);
  };

  const testFauna = async () => {
    const authFetch = authenticatedFetch(app);

    const res = await authFetch("/api/init_fauna");
    const json = await res.json();
    console.log(json);

    const res1 = await authFetch("/shopify/campaigns");
    const json1 = await res1.json();
    console.log(json1);

    const res2 = await authFetch("/mta/subscribers");
    const json2 = await res2.json();
    console.log(json2);

    const res3 = await authFetch("/shopify/customers");
    const json3 = await res3.json();
    console.log(json3);
  };


  return (
    <Page>
      <TitleBar
        primaryAction={{
          content: 'Select customers',
          onAction: () => setOpen(true),
        }}
        secondaryActions={[
          {
            content: 'Test Fauna',
            onAction: testFauna
          }
        ]}
       title={'Test title'}/>
      <ResourcePicker
        resourceType="Product"
        showVariants={false}
        open={open}
        onSelection={(resources) => handleSelection(resources)}
        onCancel={() => setOpen(false)}
      />
      <Layout>
        <EmptyState
          heading="Discount your products temporarily"
          action={{
            content: 'Select products',
            onAction: () => setOpen(true),
          }}
          image={img}
        >
          <p>Select products to change their price temporarily.</p>
        </EmptyState>
      </Layout>
    </Page>
  );
}

export default Index;
