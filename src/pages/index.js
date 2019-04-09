import React from "react"
import AptibleLayout from '../components/layouts/AptibleLayout';
import { Grid, Row } from '../components/grid/Grid';
import Hero from '../components/home/Hero';
import ProductCarousel from '../components/home/ProductCarousel';
import { findBlockById } from '../lib/blocks';
import { Link, graphql } from 'gatsby';


export default ({ data }) => (
  <AptibleLayout>
    <Hero heroBlock={findBlockById(data.blocks.edges, 'home-hero')} />
    <ProductCarousel />

    <Grid>
      <Row>
        <h3>Blog Posts</h3>
        {data.blogPosts.edges.map(({ node }, idx) => (
          <Link key={idx} to={`/blog/${node.slug}/`}>
            {node.title}
          </Link>
        ))}
      </Row>
    </Grid>
  </AptibleLayout>
);


export const query = graphql`
  query {
    blocks: allContentfulBlock(filter: { page: { eq: "home" } }) {
      ...blockProperties
    }
    blogPosts: allContentfulBlogPost {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`;
