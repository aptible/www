import React from 'react';
import SidebarNav from '../shared/SidebarNav';
import SidebarNavItem from '../shared/SidebarNavItem';

export default () => (
  <SidebarNav title="Chapters">
    <SidebarNavItem to="/security-management/" text="01: Introduction" />
    <SidebarNavItem to="/security-management/getting-started/" text="02: Getting Started" />
    <SidebarNavItem to="/security-management/design/" text="03: Designing The System" />
    <SidebarNavItem to="/security-management/training-culture/" text="04: Security Training &amp; Culture" />
    <SidebarNavItem to="/security-management/examples/" text="05: Examples" />
  </SidebarNav>
);
