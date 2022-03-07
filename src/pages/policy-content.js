import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Introduction from '../components/policy-content/Introduction';

export default ({ data }) => {
  const { pages } = data;

  return (
    <AptibleLayout>
      <Helmet>
        <title>Aptible | Policies and Controls</title>
        <meta
          name="description"
          content="Free and open source ISMS policies and controls"
        />
      </Helmet>
      <Introduction pages={pages} />
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
