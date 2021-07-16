import React from 'react';
import AptibleLayout from '../layouts/AptibleLayout';
import { Grid } from '../grid/Grid';
import styles from './ComplianceLayout.module.css';

export default ({ SidebarComponent, regulation, title, children }) => {
  return (
    <AptibleLayout>
      <div className={styles.container}>
        <Grid>
          <div className={styles.title}>
            <h5>{regulation.hero.subtitle}</h5>
            <h1>{title}</h1>
          </div>

          {SidebarComponent && (
            <div className={styles.sidebar}>
              <SidebarComponent regulation={regulation} />
            </div>
          )}

          <div className={styles.content} data-swiftype-index="true">
            {children}
          </div>
        </Grid>
      </div>
    </AptibleLayout>
  );
};
