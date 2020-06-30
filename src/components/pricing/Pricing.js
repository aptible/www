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

  componentDidMount = () => {
    if (typeof(window) === 'undefined') {
      return;
    }

    if (window.location.hash) {
      const products = {
        '#comply': 'comply',
        '#deploy': 'deploy'
      };

      if (window.location.hash in products) {
        this.setState({ expanded: products[window.location.hash] });
      }
    }
  }

  expandProduct = (productName) => {
    window.history.pushState({}, '', `#${productName}`);
    this.setState({ expanded: productName });
  }

  closeExpandedProduct = () => {
    window.history.pushState({}, '', `/pricing-plans/`);
    this.setState({ expanded: null });
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
            closeFn={this.closeExpandedProduct}
            expanded={this.state.expanded === 'comply'}
          />

          <Deploy
            clickFn={this.expandProduct}
            closeFn={this.closeExpandedProduct}
            expanded={this.state.expanded === 'deploy'}
          />
        </Grid>
      </div>
    )
  }
}

export default Pricing;
