import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Introduction from '../components/resources/Introduction';
import ResourceCards from '../components/resources/ResourceCards';

export default () => {
  return (
    <AptibleLayout>
      <Helmet>
        <title>Aptible | Security Management Resources</title>
        <meta name="description" content="Resources to help security teams maintain compliance and improve security management programs. Learn more." />
      </Helmet>

      <Introduction />
      <ResourceCards />
    </AptibleLayout>
  )
};
