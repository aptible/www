import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Pricing.module.css';
import Deploy from './Deploy';

class Pricing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <div className={styles.hero}>
          <h1 className="XL">Pricing for Aptible Deploy</h1>
          <p className="XL">Plans that scale to meet your needs</p>
        </div>

        <Deploy />
      </Grid>
    );
  }
}

export default Pricing;
