import React from 'react';
import { Link } from 'gatsby';
import styles from './MainNavItem.module.css';

function NavLink({ title, to }) {
  if (to.indexOf('http') !== -1) {
    return (
      <a
        href={to}
        className={styles.mainNavItem}
      >
        {title}
      </a>
    );
  } else {
    return (
      <Link
        to={to}
        className={styles.mainNavItem}
        activeClassName={styles.active}
        partiallyActive={true}
      >
        {title}
      </Link>
    );
  }
}

function DropDown({
  title,
  onClickFn,
  sectionName,
  openSectionName,
}) {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const isActive = url.toLowerCase().indexOf(sectionName.toLowerCase()) > -1;
  const style = isActive ? { color: "white" } : {}
  return (
    <div
      onClick={() => onClickFn(sectionName)}
      style={null}
      className={`${styles.mainNavItem} ${
        sectionName === openSectionName ? styles.open : ''
      }`}
    >
      {title}{' '}
      <span
        className={`${styles.arrow} ${
          sectionName === openSectionName ? styles.up : styles.down
        }`}
      />
    </div>
  );
}

export default ({
  title,
  to,
  onClickFn,
  sectionName,
  openSectionName,
}) => {
  if (to) {
    return <NavLink title={title} to={to} />;
  } else if (onClickFn) {
    return (
      <DropDown
        title={title}
        onClickFn={onClickFn}
        sectionName={sectionName}
        openSectionName={openSectionName}
      />
    );
  }
};
