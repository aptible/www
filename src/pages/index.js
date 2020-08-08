import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Index from '../components/blog/Index';
import { graphql } from 'gatsby';

export default ({ data }) => {
  return (
    <AptibleLayout>
      <Helmet>
        <title>Aptible | Product Weekly</title>
        <meta
          name="description"
          content="Aptible is the leading trust management platform for B2B SaaS teams that offers compliance monitoring and workflow automation, audit ready hosting, and fast and easy audit prep."
        />
      </Helmet>
      <Index posts={data.posts.edges} />
    </AptibleLayout>
  );
};

// query($skip: Int!, $limit: Int!) {
//   posts: allContentfulProductUpdate(
//     sort: { fields: [createdAt], order: DESC }
//     limit: $limit
//     skip: $skip
//   ) {

export const query = graphql`
  query {
    posts: allContentfulProductUpdate(
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          title
          date
          createdAt
          author {
            name
            photo {
              file {
                url
              }
            }
          }
          status
          statusColor
          body {
            json
          }
          materials {
            title
            subtitle
            icon
            url
          }
        }
      }
    }
  }
`;
