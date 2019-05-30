import React from "react"
import AptibleLayout from '../components/layouts/AptibleLayout';
import Hero from '../components/home/Hero';
import ProductCarousel from '../components/home/ProductCarousel';
import Logos from '../components/home/Logos';
import Customers from '../components/home/Customers';
import UseCases from '../components/home/UseCases';
import ZeroTo from '../components/footer/ZeroTo';
import { findBlockById } from '../lib/blocks';
import { graphql } from 'gatsby';


export default ({ data }) => (
  <AptibleLayout>
    <Hero heroBlock={findBlockById(data.blocks.edges, 'home-hero')} />
    <ProductCarousel />
    <Logos />
    <Customers />
    <UseCases />
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
