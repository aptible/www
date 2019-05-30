import React from 'react';
import { graphql } from 'gatsby';
import { findBlockById } from '../lib/blocks';
import AptibleLayout from '../components/layouts/AptibleLayout';
import HomeHero from '../components/security-management/HomeHero';
import ChapterHero from '../components/security-management/ChapterHero';
import Chapter from '../components/security-management/Chapter';
import ChapterCards from '../components/security-management/ChapterCards';
import ZeroTo from '../components/footer/ZeroTo';

export default ({ data, pageContext }) => {
  const chapter = pageContext.chapter;
  let Hero = chapter.id === 1 ? HomeHero : ChapterHero;

  return (
    <AptibleLayout>
      <Hero chapter={chapter} />
      <Chapter
        chapter={chapter}
        contentBlock={findBlockById(data.blocks.edges, `security-management-chapter-${chapter.id}`)} />

      {chapter.id === 1 &&
        <ChapterCards />
      }

      <ZeroTo />
    </AptibleLayout>
  );
};

export const query = graphql`
  query {
    blocks: allContentfulContentBlock(filter: { page: { eq: "security-management" } }) {
      ...blockProperties
    }
  }
`;
