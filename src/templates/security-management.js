import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { findBlockById } from '../lib/blocks';
import AptibleLayout from '../components/layouts/AptibleLayout';
import HomeHero from '../components/security-management/HomeHero';
import ChapterHero from '../components/security-management/ChapterHero';
import Chapter from '../components/security-management/Chapter';
import ZeroTo from '../components/footer/ZeroTo';

export default ({ data, pageContext }) => {
  const chapterEdge = data.blocks.edges.find(e => e.node.slug === pageContext.slug);
  const chapter = chapterEdge.node;
  let Hero = chapter.contentfulid === 'security-management-chapter-1' ? HomeHero : ChapterHero;

  return (
    <AptibleLayout>
      <Helmet>
        <title>Aptible | {chapter.pageTitle}</title>
        <meta name="description" content="We put this guide together to help your company lower the risk of failing audits, exposing private data, paying big fines, and losing customers. Read through this guide for a comprehensive view of what to consider as you build a security management system for your organization." />
      </Helmet>
      <Hero chapter={chapter} />
      <Chapter
        chapter={chapter}
        contentBlock={findBlockById(data.blocks.edges, chapter.contentfulid)}
        edges={data.blocks.edges} />
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
