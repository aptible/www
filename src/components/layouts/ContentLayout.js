import React from 'react';
import AptibleLayout from '../layouts/AptibleLayout';
import { Grid } from '../grid/Grid';
import styles from './ContentLayout.module.css';

export default ({ title, SidebarComponent, children }) => (
  <AptibleLayout>
    <Grid>
      <div className={styles.title}>
        <h1>{title}</h1>
      </div>

      {SidebarComponent &&
        <div className={styles.sidebar}>
          <SidebarComponent />
        </div>
      }

      <div className={styles.content}>
        {children}
      </div>
    </Grid>
  </AptibleLayout>
);
