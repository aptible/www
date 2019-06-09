import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import ComplianceLayout from '../../components/layouts/ComplianceLayout';
import HipaaSubnav from '../../components/compliance/HipaaSubnav';

export default ({ data }) => {
  return (
    <ComplianceLayout
      regulation={data.hipaa}
      title={data.page.frontmatter.displayTitle}
      SidebarComponent={HipaaSubnav}>
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

    hipaa: dataYaml(name: { eq: "HIPAA" }) {
      extra_content_title_append
      search_key
      slugs {
        site
        regulations
      }
      hero {
        title
        subtitle
      }
      nav {
        regulations_title
        extra {
          title
          url
        }
      }
      regulation {
        title
        subparts {
          id
          title
          subparts {
            id
            title
            url
          }
        }
      }
    }
  }
`;
