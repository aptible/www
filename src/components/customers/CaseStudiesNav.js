import React from 'react';
import SidebarNav from '../shared/SidebarNav';
import SidebarNavItem from '../shared/SidebarNavItem';
import caseStudies from '../../data/case-studies.json';

export default ({ layout }) => (
  <SidebarNav title="Case Studies" layout={layout}>
    {caseStudies.map((caseStudy, idx) => (
      <SidebarNavItem
        key={idx}
        to={`/customers/${caseStudy.customer}/`}
        text={caseStudy.title}
      />
    ))}
  </SidebarNav>
);
