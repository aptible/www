import React from 'react';
import SidebarNav from '../shared/SidebarNav';
import SidebarNavItem from '../shared/SidebarNavItem';
import styles from '../shared/SidebarNavItem.module.css';

const parsePages = (pages) => {
  const handbook = {
    root: [],
    sections: {}
  };

  pages.edges.forEach((page) => {
    if (page.node.context.section === null) {
      addPageToSection(page, handbook.root);
    } else {
      if (!handbook.sections[page.node.context.section]) {
        handbook.sections[page.node.context.section] = [];
      }
      addPageToSection(page, handbook.sections[page.node.context.section]);
    }

  });

  return handbook;
};

const addPageToSection = (page, section) => {
  if (page.node.context.title === 'Overview') {
    // Overview pages always go at the start of a section
    section.unshift(page.node);
  } else {
    section.push(page.node);
  }
};

const NavItemForPage = ({ page }) => {
  return (
    <SidebarNavItem
      key={page.path}
      to={page.path}
      text={page.context.title}
    />
  )
}

export default ({ pages, currentPath }) => {
  const handbook = parsePages(pages);

  return (
    <SidebarNav title="Aptible Handbook">
      {handbook.root.map(p => (
        <NavItemForPage page={p} />
      ))}

      {Object.keys(handbook.sections).map(section => (
        <>
          <li className={styles.sectionTitle}>{section.replace(/-/g, ' ')}</li>
          {handbook.sections[section].map(p => (
            <NavItemForPage page={p} />
          ))}
        </>
      ))}

    </SidebarNav>
  );
};
