import React from 'react';
import styles from './Pricing.module.css';
import PricingArrow from './PricingArrow';
import CheckmarkUnorderedList from '../shared/CheckmarkUnorderedList';
import PricingBlock from './PricingBlock';
import DeployCalculator from './DeployCalculator';
import SignupButton from '../signup/SignupButton';
import detailsIcons from '../../images/pricing/details.svg';
import detailsArrow from '../../images/arrows/header-resources.svg';

const closeIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 1L1.32993 18.9924M18.6841 19L1 1.02118" stroke="white" strokeOpacity="0.7" strokeWidth="2" />
  </svg>
);

class Deploy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  setHover = (hover) => {
    this.setState({ hover: hover });
  }

  close = (e) => {
    e.stopPropagation();
    this.props.closeFn();
  }

  render() {
    return (
      <div
        className={`${styles.product} ${styles.deploy} ${this.props.expanded ? styles.expanded : ''}`}
        onClick={() => this.props.clickFn('deploy')}
        onMouseEnter={() => this.setHover(true)}
        onMouseLeave={() => this.setHover(false)}>
        
        <div className={styles.closeIcon} onClick={this.close}>
          {closeIcon}
        </div>

        <div className={styles.title}>
          <h4>Aptible Deploy</h4>
        </div>

        {!this.props.expanded &&
          <React.Fragment>
            <p className="L">
              Deploy audit-ready apps and databases using a developer workflow
              you’ll love.
            </p>
            <div className={styles.button}>
              <PricingArrow text={<React.Fragment>Get<br />Started</React.Fragment>} hover={this.state.hover} />
            </div>

            <PricingBlock
              title="No upfront cost. No commitment"
              smallAmount="Pay as you go"
            />

            <div className={styles.seeDetails}>
              <img src={detailsIcons} className={styles.seeDetailsIcon} alt="Pricing details" />
              See Pricing Details
              <img src={detailsArrow} className={styles.seeDetailsArrow} alt="Pricing arrow" />
            </div>
        </React.Fragment>
      }

      {this.props.expanded &&
        <div>
          <p className={`L ${styles.description}`}>
            Deploy audit-ready apps and databases using a developer workflow
            you’ll love. PHI-ready <a href="/documentation/deploy/reference/stacks/shared-dedicated.html">Dedicated Stacks</a>{' '}
            are available when you need them.
          </p>

          <div className={styles.deployLearnMore}>
            <SignupButton text="Start with Deploy" product="deploy" />
          </div>

          <div className={styles.deployAccountContainer}>
            <CheckmarkUnorderedList>
              <li>Shared stack included</li>
              <li>No commitment</li>
              <li>First $500 worth of Resources is complimentary</li>
              <li>Pay for additional resources as you need them</li>
              <li><a href="/documentation/deploy/reference/stacks/shared-dedicated.html">Dedicated stack</a> available for regulated data</li>
              <li>No upfront costs</li>
              <li>No contract required</li>
            </CheckmarkUnorderedList>
          </div>

          <DeployCalculator />
        </div>
      }

      </div>
    )
  }
}

export default Deploy;
