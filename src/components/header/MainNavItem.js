import React from 'react';
import { Link } from 'gatsby';
import styles from './MainNavItem.module.css';

function NavLink({ gridColumn, title, to }) {
  if (to.indexOf('http') !== -1) {
    return (
      <a href={to} style={{ gridColumn: gridColumn }} className={styles.mainNavItem}>{title}</a>
    )
  } else {
    return (
      <Link to={to} style={{ gridColumn: gridColumn }} className={styles.mainNavItem}>{title}</Link>
    )
  }
}

function DropDown({ gridColumn, title, onClickFn, sectionName, openSectionName }) {
  return (
    <div
    onClick={() => onClickFn(sectionName)}
    style={{ gridColumn: gridColumn }}
    className={`${styles.mainNavItem} ${sectionName === openSectionName ? styles.open : ''}`}>
      {title} <span className={`${styles.arrow} ${sectionName === openSectionName ? styles.up : styles.down}`}></span>
    </div>
  )
}

export default ({ gridColumn, title, to, onClickFn, sectionName, openSectionName }) => {
  if (to) {
    return (
      <NavLink gridColumn={gridColumn} title={title} to={to} />
    )
  } else if (onClickFn) {
    return (
      <DropDown
        gridColumn={gridColumn}
        title={title}
        onClickFn={onClickFn}
        sectionName={sectionName}
        openSectionName={openSectionName} />
    )
  }
}
