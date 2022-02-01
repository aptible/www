import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Page from '../components/policy-content/Page';
import { titleize } from '../components/training/helpers';

export default ({ pageContext, data }) => {
  const { pages } = data;

  return (
    <AptibleLayout>
      <Helmet>
        <title>{"Open Source " + titleize(pageContext.title)}</title>
        <meta
          name="description"
          content={"An open source " + titleize(pageContext.title) + " for you to customize and make your own."}
        />
      </Helmet>
      <Page pageContext={pageContext} pages={pages} />
    </AptibleLayout>
  );
};

export const query = graphql`
  {
    pages: allSitePage(filter: { context: { tag: { eq: "policy-content"}}}) {
      edges {
        node {
          path
          context {
            title
            isPolicy
          }
        }
      }
    }
  }
`;
