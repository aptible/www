import React from 'react';
import { graphql } from 'gatsby';
import ContentfulRichText from './ContentfulRichText';


export default ({ block }) => {
  return <ContentfulRichText json={block.node.content.json} />;
}


export const queryBlocksForPage = graphql`
  fragment blockProperties on ContentfulContentBlockConnection {
    edges {
      node {
        contentfulid
        slug
        pageTitle
        content {
          json
        }
      }
    }
  }
`;
