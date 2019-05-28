import React from 'react';
import { Link } from 'gatsby';
import styles from './Pricing.module.css';
import PricingArrow from './PricingArrow';
import CheckmarkUnorderedList from '../shared/CheckmarkUnorderedList';
import PricingBlock from './PricingBlock';
import detailsIcons from '../../images/pricing/details.svg';
import detailsArrow from '../../images/arrows/header-resources.svg';

const bigArrow = (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 20.0011L20.4649 -8.53907e-07L14.6043 -1.11008e-06L32.1859 18.001L6.84255e-06 18.001L6.66769e-06 22.0012L32.1859 22.0012L14.6043 40L20.4649 40L40 20.0011Z" fill="#FDB515" />
  </svg>
);

class Deploy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      withHids: false,
      encryptedDisk: 1,
      endpoints: 4,
      vpnConnections: 0
    };
  }

  setHover = (hover) => {
    this.setState({ hover: hover });
  }

  render() {
    return (
      <div
        className={`${styles.product} ${styles.deploy} ${this.props.expanded ? styles.expanded : ''}`}
        onClick={() => this.props.clickFn('deploy')}
        onMouseEnter={() => this.setHover(true)}
        onMouseLeave={() => this.setHover(false)}>

        <div className={styles.title}>
          <h4>Aptible Deploy</h4>
          <p className="L">
            Deploy audit-ready apps and databases using a developer workflow
            you'll love.
          </p>
        </div>

        {!this.props.expanded &&
          <React.Fragment>
            <div className={styles.button}>
              <PricingArrow hover={this.state.hover} />
            </div>

            <PricingBlock title="Development stack start at" amount="$0" timePeriod="Per Month" />
            <PricingBlock title="Production stack start at" amount="$999" timePeriod="Per Month" />

            <div className={styles.seeDetails}>
              <img src={detailsIcons} className={styles.seeDetailsIcon} alt="Pricing details" />
              See Pricing Details
              <img src={detailsArrow} className={styles.seeDetailsArrow} alt="Pricing arrow" />
            </div>
        </React.Fragment>
      }

      {this.props.expanded &&
        <div>
          <div className={styles.deployLearnMore}>
            <Link to="/deploy/">
              <div className={styles.learnMoreArrow}>
                {bigArrow}
              </div>
              <h3>
                Deploy your first app now. Pricing scales as you provision more
                resources.
              </h3>
              <p className="L">Learn More About Deploy</p>
            </Link>
          </div>

          <div className={styles.deployAccountContainer}>
            <div className={styles.deployAccountType}>
              <PricingBlock title="Development Account" amount="$0" timePeriod="Per Month" />
              <h6 className="small">Base Platform</h6>
              <CheckmarkUnorderedList>
                <li>Shared stack</li>
                <li>No commitment</li>
                <li>First $500 worth of resources are complimentary</li>
              </CheckmarkUnorderedList>
            </div>

            <div className={styles.deployAccountType}>
              <PricingBlock title="Production Account" amount="$999" timePeriod="Per Month" />
              <h6 className="small">Base Platform</h6>
              <CheckmarkUnorderedList>
                <li><strong>$1299/mo</strong> with no annual commitment</li>
                <li><strong>6 GB</strong> App/DB Container RAM</li>
                <li><strong>1 TB</strong> encrypted Database Disk, including automatic backups</li>
                <li><strong>4</strong> TLS endpoints</li>
                <li>Pay-as-you-use for additional Resources (beyond the complimentary $500)</li>
              </CheckmarkUnorderedList>
            </div>
          </div>
        </div>
      }

      </div>
    )
  }
}

export default Deploy;
