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
        <meta name="description" content="Aptible is the leading security management platform for small companies. Here are posts and videos detailing how customers are using Aptible to propel their businesses forward." />
      </Helmet>

      <Introduction />
      <ResourceCards />
    </AptibleLayout>
  )
};
