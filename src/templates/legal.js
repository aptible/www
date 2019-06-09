import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import ContentLayout from '../components/layouts/ContentLayout';
import LegalSubnav from '../components/legal/Subnav';

export default ({ data }) => (
  <ContentLayout title={data.page.frontmatter.title} SidebarComponent={LegalSubnav}>
    <Helmet>
      <title>Aptible | {data.page.frontmatter.title}</title>
      <meta name="description" content={data.page.frontmatter.title} />
    </Helmet>
    <div dangerouslySetInnerHTML={{ __html: data.page.html}}></div>
  </ContentLayout>
);

export const query = graphql`
  query($slug: String!) {
    page: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
      }
    }
  }
`;
