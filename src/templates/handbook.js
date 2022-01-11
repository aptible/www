import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Page from '../components/handbook/Page';

export default ({ data, pageContext }) => {
  const { pages } = data;
  const currentPage = pages.edges.find(e => e.node.path === `/${pageContext.url}`);

  return (
    <AptibleLayout>
      <Helmet>
        <title>{currentPage.node.context.title} | Aptible Handbook</title>
      </Helmet>
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
