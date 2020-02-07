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
        <title>{currentPage.displayTitle || currentPage.title} | Aptible Owner’s Manual</title>
        <meta name="description" content="Our goal with the Aptible Owner’s Manual is to help you, as a current or prospective member of the Aptible Team, get a clear sense of what this team is — what we mean by “us.”" />
      </Helmet>
      <Page currentPage={currentPage} allPages={pageContext.allPages} />
    </AptibleLayout>
  );
};
