import React from 'react';
import SidebarNav from '../shared/SidebarNav';
import SidebarNavItem from '../shared/SidebarNavItem';

export default () => (
  <SidebarNav title="Legal">
    <SidebarNavItem to="/legal/terms-of-service/" text="Terms of Service" />
    <SidebarNavItem to="/legal/service-level-agreement/" text="Service Level Agreement" />
    <SidebarNavItem to="/legal/hipaa-breach-indemnification-agreement/" text="HIPAA Breach Idemnification Agreement" />

    <SidebarNavItem to="/legal/trademark/" text="Trademark Policy" />
    <SidebarNavItem to="/legal/acceptable-use/" text="Acceptable Use Policy" />
    <SidebarNavItem to="/legal/support/" text="Support Policy" />
    <SidebarNavItem to="/legal/privacy/" text="Privacy Policy" />
    <SidebarNavItem to="/legal/responsible-disclosure/" text="Responsible Disclosure Policy" />
    <SidebarNavItem to="/legal/subvendor-directory/" text="Subvendor Directory" />
    <SidebarNavItem to="/legal/billing/" text="Billing Policy" />
    <SidebarNavItem to="/legal/security/" text="Security Policy" />
  </SidebarNav>
);
