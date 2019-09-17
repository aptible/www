import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { findBlockById } from '../lib/blocks';
import AptibleLayout from '../components/layouts/AptibleLayout';
import HomeHero from '../components/security-management/HomeHero';
import ChapterHero from '../components/security-management/ChapterHero';
import Chapter from '../components/security-management/Chapter';
import ChapterCards from '../components/security-management/ChapterCards';
import ZeroTo from '../components/footer/ZeroTo';

const pageTitles = {
  1: 'Introduction',
  2: 'What Is Security Management',
  3: 'Security Management Fundamentals'
};

export default ({ data, pageContext }) => {
  const chapter = pageContext.chapter;
  let Hero = chapter.id === 1 ? HomeHero : ChapterHero;

  return (
    <AptibleLayout>
      <Helmet>
        <title>Aptible | {pageTitles[chapter.id]}</title>
        <meta name="description" content="We put this guide together to help your company lower the risk of failing audits, exposing private data, paying big fines, and losing customers. Read through this guide for a comprehensive view of what to consider as you build a security management system for your organization." />
      </Helmet>
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
