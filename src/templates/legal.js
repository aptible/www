import React from 'react';
import { graphql } from 'gatsby';
import ContentLayout from '../components/layouts/ContentLayout';

export default ({ data }) => (
  <ContentLayout title={data.page.frontmatter.title}>
    <div dangerouslySetInnerHTML={{ __html: data.page.html}}></div>
  </ContentLayout>
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
