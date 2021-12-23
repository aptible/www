import React from 'react';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Page from '../components/training/Page';

export default ({ pageContext }) => {
  return (
    <AptibleLayout>
      <Page pageContext={pageContext} />
    </AptibleLayout>
  );
};
