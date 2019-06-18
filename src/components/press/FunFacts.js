import React from 'react';
import styles from './FunFacts.module.css';
import { Grid } from '../grid/Grid';

const FunFact = ({ style, className, label, children }) => (
  <div style={style} className={styles.funFact}>
    <h6 className="small">{label}</h6>
    <h3>{children}</h3>
  </div>
);

export default () => (
  <div className={styles.container}>
    <Grid rows="2">
      <h5 className={styles.sectionHeading}>Fun Facts</h5>
      <FunFact
        style={{ gridColumn: 1 }}
        label='Customers'>
        300+
      </FunFact>
      <FunFact
        style={{ gridColumn: 2 }}
        label='Employees'>
        30+
      </FunFact>
      <FunFact
        style={{ gridColumn: 3 }}
        label='Founded'>
        2013
      </FunFact>
      <FunFact
        style={{ gridColumn: '4 / span 2' }}
        label='Location'>
        Fully-distributed
      </FunFact>
    </Grid>
  </div>
);
