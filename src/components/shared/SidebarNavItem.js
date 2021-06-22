import React from 'react';
import { Link } from 'gatsby';
import styles from './SidebarNavItem.module.css';

export default ({ text, to, active }) => (
  <li className={`${styles.item} ${active ? styles.active : ''}`}>
    <Link to={to}>{text}</Link>
  </li>
);
