import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Pricing from '../components/pricing/Pricing';

export default ({ data }) => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible | Pricing plans that work for your business</title>
      <meta name="description" content="Aptible is the leading security management platform for small companies. Here is how Aptible helps companies drive growth through security." />
    </Helmet>
    <Pricing />
  </AptibleLayout>
);
