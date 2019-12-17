import React from 'react';
import Button from '../buttons/Button';
import SidebarNav from '../shared/SidebarNav';
import SidebarNavItem from '../shared/SidebarNavItem';
import styles from './Subnav.module.css';

const SECTIONS = ['Our Business', 'Our Culture', 'Our Teams'];

const Section = ({ section, allPages }) => {
  const sectionRootPages = allPages.filter(e => e.node.contentfulparent === null && e.node.section === section);
  if (sectionRootPages.length < 1) {
    return null;
  }

  return (
    <div>
      <div className={styles.section}>
        <h6 className="small">{section}</h6>
      </div>
      
      {sectionRootPages.map((page) => (
        <PageNavItem key={page.node.slug} page={page.node} allPages={allPages} depth={0} />
      ))}
    </div>
  )
};

const PageNavItem = ({ page, allPages, depth }) => {
  // TODO: probably best to handle the spacing in CSS
  const depthPadding = '\u00A0\u00A0\u00A0\u00A0'.repeat(depth);
  const children = allPages.filter(e => e.node.contentfulparent && e.node.contentfulparent.slug === page.slug);

  return (
    <>
      <SidebarNavItem to={pagePath(page)} text={`${depthPadding}${page.displayTitle || page.title}`} />

      {children.map((child) => (
        <PageNavItem key={child.node} page={child.node} allPages={allPages} depth={depth + 1} />
      ))}
    </>
  )
}

const pagePath = (page) => {
  let path = '/owners-manual';
  if (page.slug) {
    path += `/${page.slug}`;
  }

  return path;
}

export default ({ allPages }) => {
  const rootWithoutSection = allPages.filter(e => e.node.contentfulparent === null && e.node.section === null);

  return (
    <SidebarNav title="Owners Manual">
      {rootWithoutSection.map((e) => (
        <SidebarNavItem key={e.node.slug} to={pagePath(e.node)} text={e.node.title} />
      ))}

      {SECTIONS.map((section) => (
        <Section key={section} section={section} allPages={allPages} />
      ))}

      <div className={styles.cta}>
        <Button to="/careers">Aptible Careers</Button>
      </div>
    </SidebarNav>
  )
};
