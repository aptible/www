import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Pricing.module.css';
import Comply from './Comply';
import Deploy from './Deploy';

class Pricing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: null
    };
  }

  expandProduct = (productName) => {
    this.setState({ expanded: productName });
  }

  render() {
    return (
      <div>
        <Grid rows="2">
          <div className={styles.hero}>
            <h1 className="hero">Pricing</h1>
            <p className="XL">Plans that scale to meet your needs.</p>
          </div>

          <Comply
            clickFn={this.expandProduct}
            expanded={this.state.expanded === 'comply'} />

          <Deploy
            clickFn={this.expandProduct}
            expanded={this.state.expanded === 'deploy'} />
        </Grid>
      </div>
    )
  }
}

export default Pricing;
