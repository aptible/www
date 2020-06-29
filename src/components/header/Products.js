import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './Products.module.css';
import complyBg from '../../images/illustrations/comply.png';
import deployBg from '../../images/illustrations/deploy.png';

const backgroundImages = {
  comply: complyBg,
  deploy: deployBg
};


function ComplyHover() {
  return (
    <div className={styles.hoverDescription}>
      <h5>
        Compliance monitoring and automation<br />through integrations for SOC
        2, ISO 27001, HIPAA, GDPR and more.
      </h5>
    </div>
  )
}

function DeployHover() {
  return (
    <div className={styles.hoverDescription}>
      <h5>Deploy audit-ready apps<br />and databases.</h5>
    </div>
  );
}

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSectionName: null
    };
  }

  setHover = (sectionName) => {
    this.setState({ openSectionName: sectionName });
  }

  renderHoverContent = () => {
    const content = {
      comply: <ComplyHover />,
      deploy: <DeployHover />
    }

    if (this.state.openSectionName in content) {
      return content[this.state.openSectionName];
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <Grid>
          <div className={styles.links}>
            <Link
              to="/comply/"
              onMouseEnter={() => this.setHover('comply')}
              onMouseLeave={() => this.setHover(null)}
            >
              <h3>Comply</h3>
            </Link>

            <Link
              to="/deploy/"
              onMouseEnter={() => this.setHover('deploy')}
              onMouseLeave={() => this.setHover(null)}
            >
              <h3>Deploy</h3>
            </Link>

            <Link to="/pricing-plans/">
              <h3>Pricing</h3>
            </Link>
          </div>

          <div className={styles.hoverContent}>
            {this.renderHoverContent()}
          </div>
        </Grid>

        {this.state.openSectionName && (
          <div className={styles.hoverImage}>
            <img src={backgroundImages[this.state.openSectionName]} alt="logo" />
          </div>
        )}
      </div>
    );
  }
}

export default Products;
