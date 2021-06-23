import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Introduction from '../components/resources/Introduction';
import ResourceCards from '../components/resources/ResourceCards';
import resources from '../data/resources.json';

export default ({ data }) => {
  const webinars = data.posts.edges.map(webinar => {
    const { node } = webinar;
    return {
      title: node.title,
      url: `/webinars/${node.slug}/`,
      description: node.description ? node.description.description : '',
      tags: ['Webinar', node.webinarType ? 'On Demand' : 'Upcoming'],
    };
  });

  return (
    <AptibleLayout>
      <Helmet>
        <title>Aptible | Resource Library</title>
        <meta
          name="description"
          content="Resources to help security teams maintain compliance and improve security management programs. Learn more."
        />
      </Helmet>
      <Introduction />
      <ResourceCards resources={[...resources, ...webinars]} categorySlug="" />
    </AptibleLayout>
  );
};

export const query = graphql`
  query {
    posts: allContentfulWebinar {
      edges {
        node {
          slug
          title
          description {
            description
          }
          webinarType
        }
      }
    }
  }
`;
