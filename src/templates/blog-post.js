import React from 'react';
import { graphql } from 'gatsby';
import AptibleLayout from '../components/layouts/AptibleLayout';
import { Grid, Row } from '../components/grid/Grid';
import ContentfulRichText from '../components/contentful/ContentfulRichText';

export default ({ data }) => (
  <AptibleLayout>
    <Grid>
      <Row>
        <h1>{data.post.title}</h1>
        <ContentfulRichText json={data.post.body.json} />
        <p>Aptible frees tech startups from the obstacles of security
and compliance. We are leading the way, beyond compliance, empowering shorter sales cycles, faster product development, and greater confidence in quality.</p>
      </Row>
    </Grid>
  </AptibleLayout>
);

export const query = graphql`
  query($slug: String!) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      body {
        json
      }
    }
  }
`;
