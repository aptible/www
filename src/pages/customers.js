import React from 'react';
import AptibleLayout from '../components/layouts/AptibleLayout';
import CustomerCarousel from '../components/customers/CustomerCarousel';
import GreatCompany from '../components/customers/GreatCompany';
import CustomerCards from '../components/customers/CustomerCards';
import CustomerEmpowerment from '../components/customers/CustomerEmpowerment';
import ZeroTo from '../components/footer/ZeroTo';


export default ({ data }) => (
  <AptibleLayout>
    <div style={{ paddingTop: '30px' }}>
      <CustomerCarousel />
    </div>
    <GreatCompany />
    <CustomerCards />
    <CustomerEmpowerment />
    <ZeroTo />
  </AptibleLayout>
);
