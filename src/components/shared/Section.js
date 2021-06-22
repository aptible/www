import React from 'react';
import { Grid } from '../grid/Grid';
import Paragraph from './Paragraph';
import styles from './Section.module.css';

const Section = ({ title, body, children }) => (
  <div className={styles.container}>
    {title && (
      <Grid>
        <div className={styles.content}>
          <h2>{title}</h2>

          {body && (
            <div className={styles.paragraph}>
              <Paragraph>{body}</Paragraph>
            </div>
          )}
        </div>
      </Grid>
    )}

    <div className={styles.module}>{children}</div>
  </div>
);

export default Section;
