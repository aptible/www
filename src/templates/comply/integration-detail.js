import React from 'react';
import MetaHeader from '../../components/shared/MetaHeader';
import AptibleLayout from '../../components/layouts/AptibleLayout';
import Detail from '../../components/comply/integrations/Detail';
import Roadmap from '../../components/comply/integrations/Roadmap';

const getCurrentPage = (activePath, allPages) => {
  const pageEdge = allPages.find(e => e.node.slug === activePath);
  return pageEdge.node;
};

export default ({ pageContext }) => {
  const { activePath, allPages, defaultMeta } = pageContext;
  const currentPage = getCurrentPage(activePath, allPages);

  return (
    <AptibleLayout>
      <MetaHeader
        title={currentPage.metaTitle || defaultMeta.metaTitle}
        titlePrefix="Aptible Comply"
        description={currentPage.metaDescription || defaultMeta.metaDescription}
        section="comply/integrations"
        slug={currentPage.slug || ''}
      />
      <Detail post={currentPage} />
      <Roadmap />
    </AptibleLayout>
  );
};
