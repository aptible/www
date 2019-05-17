import React from 'react';
import { Link } from 'gatsby';
import styles from './Button.module.css';

export default ({ to, onClickFn, theme, children }) => {
  const buttonStyle = `${styles.button} ${theme ? styles[theme] : ''}`;

  if (to) {
    return (
      <Link to={to} className={buttonStyle}>
        {children}
      </Link>
    )
  } else if (onClickFn) {
    return (
      <div onClick={onClickFn} className={buttonStyle}>
        {children}
      </div>
    )
  }
};
