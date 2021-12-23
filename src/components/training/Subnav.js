import React from 'react';
import SidebarNav from '../shared/SidebarNav';
import SidebarNavItem from '../shared/SidebarNavItem';

export default ({ modules, course }) => {
  const courseTitle = course.replace('-', ' ');

  return (
    <SidebarNav title={courseTitle}>
      {modules.map(m => (
        <SidebarNavItem
          key={m.key}
          to={`/training/${course}/${m.key}/`}
          text={m.name}
        />
      ))}
    </SidebarNav>
  );
};
