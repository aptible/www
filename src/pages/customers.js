import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import CustomerCarousel from '../components/customers/CustomerCarousel';
import GreatCompany from '../components/customers/GreatCompany';
import CustomerCards from '../components/customers/CustomerCards';
import CustomerEmpowerment from '../components/customers/CustomerEmpowerment';
import ZeroTo from '../components/footer/ZeroTo';

export default ({ data }) => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible | Customer Case Studies</title>
      <meta
        name="description"
        content="Aptible is the leading security management platform for small companies. Here are posts and videos detailing how customers are using Aptible to propel their businesses forward."
      />
    </Helmet>
    <div style={{ paddingTop: '30px' }}>
      <CustomerCarousel />
    </div>
    <GreatCompany />
    <CustomerCards />
    <CustomerEmpowerment />
    <ZeroTo />
  </AptibleLayout>
);
