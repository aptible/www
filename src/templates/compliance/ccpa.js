import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import ComplianceLayout from '../../components/layouts/ComplianceLayout';

export default ({ data }) => {
  return (
    <ComplianceLayout
      regulation={{
        hero: {
          subtitle: "CCPA Compliance Guide",
        },
      }}
      title={data.page.frontmatter.displayTitle}
    >
      <Helmet>
        <title>{data.page.frontmatter.title}</title>
        <meta name="description" content={data.page.frontmatter.displayTitle} />
      </Helmet>
      <div dangerouslySetInnerHTML={{ __html: data.page.html }}></div>
    </ComplianceLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    page: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        displayTitle
        slug
      }
    }
  }
`;
