import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Page from '../components/training/Page';
import training from '../data/training.json';
import { titleize } from '../components/training/helpers';

export default ({ pageContext }) => {
  const module = training[pageContext.course].modules.find(m => m.key === pageContext.slug);

  return (
    <AptibleLayout>
      <Helmet>
        <title>{module.name} | {titleize(pageContext.course)}</title>
        <meta
          name="description"
          content="Product updates for Aptible Comply and Deploy."
        />
      </Helmet>
      <Page pageContext={pageContext} />
    </AptibleLayout>
  );
};
