import React from 'react';
import { Link } from 'gatsby';
import styles from './Button.module.css';

export default ({ to, onClickFn, theme, size, children, href }) => {
  const buttonStyle = `${styles.button} ${theme ? styles[theme] : ''} ${size ? styles[size] : ''}`;
  if (href) {
    return <a href={href} className={buttonStyle}>{children}</a>
  }

  if (to) {
    return <Link to={to} className={buttonStyle}>{children}</Link>
  }
  
  if (onClickFn) {
    return <div onClick={onClickFn} className={buttonStyle} role="button" tabIndex={0}>{children}</div>
  }
};
