import React from 'react';
import { graphql } from 'gatsby';
import AptibleLayout from '../components/layouts/AptibleLayout';
import { Grid, Row } from '../components/grid/Grid';

export default ({ data }) => (
  <AptibleLayout>
    <Grid>
      <Row>
        <h1>{data.page.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.page.html}}></div>
      </Row>
    </Grid>
  </AptibleLayout>
);

export const query = graphql`
  query($slug: String!) {
    page: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
