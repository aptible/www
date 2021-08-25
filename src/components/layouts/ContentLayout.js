import React from 'react';
import cn from 'classnames';
import AptibleLayout from '../layouts/AptibleLayout';
import { Grid } from '../grid/Grid';
import styles from './ContentLayout.module.css';

export default ({ title, SidebarComponent, children, fullWidth }) => (
  <AptibleLayout>
    <Grid>
      <div className={styles.title}>
        <h1>{title}</h1>
      </div>

      {SidebarComponent && (
        <div className={styles.sidebar}>
          <SidebarComponent layout={fullWidth ? 'fullWidth' : 'halfWidth' } />
        </div>
      )}

      <div className={cn(styles.richContent, fullWidth ? styles.contentFullWidth : styles.contentHalfWidth)}>
        {children}
      </div>
    </Grid>
  </AptibleLayout>
);
