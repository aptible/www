import React from 'react';
import SidebarNav from '../shared/SidebarNav';
import SidebarNavItem from '../shared/SidebarNavItem';

const parsePages = (pages) => {
  const policies = [];

  pages.edges.forEach((page) => {
    if (page.node.context.isPolicy) {
      policies.push(page.node)
    }
  });

  return policies;
};

export default ({ pages, currentPath }) => {
  const policies = parsePages(pages);

  return (
    <SidebarNav title="Open Source Policies">
      {policies.map(page => (
        <SidebarNavItem
          key={page.path}
          to={page.path}
          text={page.context.title}
        />
      ))}

      <SidebarNavItem
        key="controls"
        to="/policy-content/controls/"
        text="Controls"
      />

    </SidebarNav>
  );
};
