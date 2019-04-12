import React from 'react';
import { graphql } from 'gatsby';
import AptibleLayout from '../../components/layouts/AptibleLayout';
import { Grid, Row } from '../../components/grid/Grid';

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

  return (
    <AptibleLayout>
      <Grid>
        <Row>
          <h1>GDPR {part.id} {part.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.regulation.html }} />
        </Row>
      </Grid>
    </AptibleLayout>
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
