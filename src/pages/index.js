import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Hero from '../components/home/Hero';
import ProductCarousel from '../components/home/ProductCarousel';
import Logos from '../components/home/Logos';
import Customers from '../components/home/Customers';
import ZeroTo from '../components/footer/ZeroTo';
import { findBlockById } from '../lib/blocks';
import { graphql } from 'gatsby';

export default ({ data }) => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible | Security Management Platform</title>
      <meta
        name="description"
        content="Aptible is the leading trust management platform for B2B SaaS teams that offers compliance monitoring and workflow automation, audit ready hosting, and fast and easy audit prep."
      />
    </Helmet>
    <Hero heroBlock={findBlockById(data.blocks.edges, 'home-hero')} />
    <ProductCarousel />
    <Logos />
    <Customers />
    <ProductCarousel startPosition="right" />
    <ZeroTo />
  </AptibleLayout>
);

export const query = graphql`
  query {
    blocks: allContentfulContentBlock(filter: { page: { eq: "home" } }) {
      ...blockProperties
    }
  }
`;
