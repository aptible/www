import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Introduction from '../components/resources/Introduction';
import ResourceCards from '../components/resources/ResourceCards';

export default () => {
  return (
    <AptibleLayout>
      <Helmet>
        <title>Aptible | Resources</title>
        <meta name="description" content="Access security management resources to learn best practices for growing, improving and communicating your security management program." />
      </Helmet>

      <Introduction />
      <ResourceCards />
    </AptibleLayout>
  )
};
