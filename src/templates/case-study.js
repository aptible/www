import React from 'react';
import { graphql } from 'gatsby';
import { findBlockById } from '../lib/blocks';
import ContentLayout from '../components/layouts/ContentLayout';
import ContentfulBlock from '../components/contentful/ContentfulBlock';
import CaseStudiesNav from '../components/customers/CaseStudiesNav';

export default ({ data, pageContext }) => {
  const caseStudy = pageContext.caseStudy;

  return (
    <ContentLayout title={caseStudy.title} SidebarComponent={CaseStudiesNav}>
      <ContentfulBlock block={findBlockById(data.blocks.edges, `case-study-${caseStudy.customer}`)} />
    </ContentLayout>
  );
};

export const query = graphql`
  query {
    blocks: allContentfulContentBlock(filter: { page: { eq: "case-studies" } }) {
      ...blockProperties
    }
  }
`;
