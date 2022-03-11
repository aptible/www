import React from 'react';
import { Helmet } from 'react-helmet';
import ContentLayout from '../components/layouts/ContentLayout';
import Resource from '../components/resources/Resource';

export default ({ data }) => (
  <ContentLayout title={data.resource.title}>
    <Helmet>
      <title>Aptible | {data.resource.title}</title>
      <meta name="description" content={data.resource.title} />
      <meta property="og:title" content={data.resource.title} />
      <meta
        property="og:description"
        content={`Aptible: ${data.resource.title}`}
      />
    </Helmet>

    <Resource resource={data.resource} />
  </ContentLayout>
);
