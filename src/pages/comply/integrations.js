import React from 'react';
import { graphql } from 'gatsby';
import MetaHeader from '../../components/shared/MetaHeader';
import AptibleLayout from '../../components/layouts/AptibleLayout';
import Hero from '../../components/comply/integrations/Hero';
import Integrations from '../../components/comply/integrations/Integrations';
import Roadmap from '../../components/comply/integrations/Roadmap';

export default ({ data }) => {
  const page = data.page.edges[0].node;
  const { title, heading, metaTitle, metaDescription, integrations } = page;
  return (
    <AptibleLayout>
      <MetaHeader
        title={metaTitle}
        titlePrefix="Aptible Comply"
        description={metaDescription}
        section="comply"
        slug="integrations"
      />
      <Hero title={title} heading={heading} />
      <Integrations integrations={integrations} />
      <Roadmap />
    </AptibleLayout>
  );
};

export const query = graphql`
  query {
    page: allContentfulComplyIntegrationsIndex(limit: 1) {
      edges {
        node {
          id
          title
          heading
          metaTitle
          metaDescription
          integrations {
            id
            name
            slug
            shortDescription
            assets
            controls
            logo {
              file {
                url
                details {
                  image {
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
