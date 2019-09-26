import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Hero from '../components/home/Hero';
import ProductCarousel from '../components/home/ProductCarousel';
import Logos from '../components/home/Logos';
import Customers from '../components/home/Customers';
import UseCases from '../components/home/UseCases';
import ZeroTo from '../components/footer/ZeroTo';
import VendorManagementPopUp from '../components/trust-center/VendorManagementPopUp';
import { findBlockById } from '../lib/blocks';
import { graphql } from 'gatsby';


export default ({ data }) => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible | Security Management Platform</title>
      <meta name="description" content="Aptible is the leading security management platform for small companies. Grow by meeting security requirements for SOC 2, ISO 27001, HIPAA, GDPR, and more." />
    </Helmet>
    <Hero heroBlock={findBlockById(data.blocks.edges, 'home-hero')} />
    <ProductCarousel />
    <Logos />
    <Customers />
    <UseCases />
    <ProductCarousel startPosition="right" />
    <ZeroTo />
    <VendorManagementPopUp />
  </AptibleLayout>
);



export const query = graphql`
  query {
    blocks: allContentfulContentBlock(filter: { page: { eq: "home" } }) {
      ...blockProperties
    }
  }
`;
