import React from 'react';
import cn from 'classnames';
import styles from './Container.module.css';

const Container = ({ children, className }) => (
  <div className={cn(styles.container, className)}>
    {children}
  </div>
);

export default Container;
