import React from 'react';
import AptibleLayout from '../components/layouts/AptibleLayout';
import MetaHeader from '../components/shared/MetaHeader';

const getCurrentPage = (activePath, allPages) => {
  const pageEdge = allPages.find(e => e.node.slug === activePath);
  return pageEdge.node;
}

export default ({ pageContext }) => {
  const currentPage = getCurrentPage(pageContext.activePath, pageContext.allPages);
  const description = currentPage.socialDescription || 'Our goal with the Aptible Owner’s Manual is to help you, as a current or prospective member of the Aptible Team, get a clear sense of what this team is — what we mean by “us.”';

  console.log("currentPage", currentPage);
  console.log("allPages", pageContext.allPages);

  return (
    <AptibleLayout>
      {/* <MetaHeader
        title={currentPage.displayTitle || currentPage.title}
        titlePrefix="Aptible Owner’s Manual"
        description={description}
        image={currentPage.socialImage ? `https:${currentPage.socialImage.file.url}` : ''}
        section="owners-manual"
        slug={currentPage.slug || ''}
      /> */}
      Page
    </AptibleLayout>
  );
};