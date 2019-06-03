import React from 'react';
import { graphql } from 'gatsby';
import ComplianceLayout from '../../components/layouts/ComplianceLayout';
import HipaaSubnav from '../../components/compliance/HipaaSubnav';

function getRegulation(data, slug) {
  for (let section of data.regulation) {
    for (let part of section.subparts) {
      for (let subpart of part.subparts) {
        if (subpart.url === slug) {
          return subpart;
        }
      }
    }
  }
}

export default ({ data, pageContext }) => {
  const part = getRegulation(data.hipaa, pageContext.slug);
  const title = `${part.id} ${part.title}`;

  return (
    <ComplianceLayout
      regulation={data.hipaa}
      title={title}
      SidebarComponent={HipaaSubnav}>
      <div dangerouslySetInnerHTML={{ __html: data.regulation.html }}></div>
    </ComplianceLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    regulation: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
