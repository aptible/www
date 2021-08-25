import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { findBlockById } from '../lib/blocks';
import ContentLayout from '../components/layouts/ContentLayout';
import ContentfulBlock from '../components/contentful/ContentfulBlock';
import CaseStudiesNav from '../components/customers/CaseStudiesNav';

export default ({ data, pageContext }) => {
  const caseStudy = pageContext.caseStudy;

  return (
    <ContentLayout title={caseStudy.title} SidebarComponent={CaseStudiesNav} fullWidth={true}>
      <Helmet>
        <title>Aptible | {caseStudy.title} Case Study</title>
        <meta
          name="description"
          content="Aptible is the leading security management platform for small companies. Here are posts and videos detailing how customers are using Aptible to propel their businesses forward."
        />
      </Helmet>
      <ContentfulBlock
        block={findBlockById(
          data.blocks.edges,
          `case-study-${caseStudy.customer}`,
        )}
      />
    </ContentLayout>
  );
};

export const query = graphql`
  query {
    blocks: allContentfulContentBlock(
      filter: { page: { eq: "case-studies" } }
    ) {
      ...blockProperties
    }
  }
`;
