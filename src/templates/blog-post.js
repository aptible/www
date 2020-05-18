import React from 'react';
import { graphql } from 'gatsby';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Post from '../components/blog/Post';
import MetaHeader from '../components/shared/MetaHeader';

export default ({ data }) => {
  const { post } = data;
  const description = post.socialDescription || post.title;
  return (
    <AptibleLayout>
      <MetaHeader
        title={post.title}
        description={description}
        image={post.socialImage ? post.socialImage.file.url : ''}
        section="blog"
        slug={post.slug}
      />
      <Post post={post} />
    </AptibleLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      title
      postedAt
      category
      slug
      socialDescription
      socialImage {
        file {
          url
        }
      }
      author {
        name
        slug
        professionalPhoto {
          file {
            url
          }
        }
      }
      secondAuthor {
        name
        slug
        professionalPhoto {
          file {
            url
          }
        }
      }
      body {
        json
      }
    }
  }
`;
