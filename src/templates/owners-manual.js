import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Page from '../components/owners-manual/Page';

const getCurrentPage = (activePath, allPages) => {
  const pageEdge = allPages.find(e => e.node.slug === activePath);
  return pageEdge.node;
}

export default ({ pageContext }) => {
  const currentPage = getCurrentPage(pageContext.activePath, pageContext.allPages);

  return (
    <AptibleLayout>
      <Helmet>
        <title>{currentPage.title} | Aptible Owners Manual</title>
        <meta name="description" content="Meta description here." />
      </Helmet>
      <Page currentPage={currentPage} allPages={pageContext.allPages} />
    </AptibleLayout>
  );
};
