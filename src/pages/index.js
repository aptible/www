import React from "react"
import AptibleLayout from '../components/layouts/AptibleLayout';
import Hero from '../components/home/Hero';
import ProductCarousel from '../components/home/ProductCarousel';
import { findBlockById } from '../lib/blocks';
import { graphql } from 'gatsby';


export default ({ data }) => (
  <AptibleLayout>
    <Hero heroBlock={findBlockById(data.blocks.edges, 'home-hero')} />
    <ProductCarousel />
  </AptibleLayout>
);


export const query = graphql`
  query {
    blocks: allContentfulBlock(filter: { page: { eq: "home" } }) {
      ...blockProperties
    }
  }
`;
