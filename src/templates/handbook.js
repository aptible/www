import React from 'react';
import { graphql } from 'gatsby';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Page from '../components/handbook/Page';

export default ({ data, pageContext }) => {
  const { pages } = data;
  return (
    <AptibleLayout>
      <Page pageContext={pageContext} pages={pages} />
    </AptibleLayout>
  );
};

export const query = graphql`
  {
    pages: allSitePage(filter: { context: { tag: { eq: "handbook"}}}) {
      edges {
        node {
          path
          context {
            title
            section
          }
        }
      }
    }
  }
`;
