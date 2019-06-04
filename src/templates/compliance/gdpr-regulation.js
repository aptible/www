import React from 'react';
import { graphql } from 'gatsby';
import ComplianceLayout from '../../components/layouts/ComplianceLayout';
import GdprSubnav from '../../components/compliance/GdprSubnav';

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
  const part = getRegulation(data.gdpr, pageContext.slug);
  const title = `${part.id} ${part.title}`;

  return (
    <ComplianceLayout
      regulation={data.gdpr}
      title={title}
      SidebarComponent={GdprSubnav}>
      <div dangerouslySetInnerHTML={{ __html: data.regulation.html }}></div>
    </ComplianceLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    regulation: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }

    gdpr: dataYaml(name: { eq: "GDPR" }) {
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
