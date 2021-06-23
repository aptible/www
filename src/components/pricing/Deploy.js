import React from 'react';
import styles from './Pricing.module.css';
import PricingArrow from './PricingArrow';
import CheckmarkUnorderedList from '../shared/CheckmarkUnorderedList';
import PricingBlock from './PricingBlock';
import DeployCalculator from './DeployCalculator';
import SignupButton from '../signup/SignupButton';
import detailsIcons from '../../images/pricing/details.svg';
import detailsArrow from '../../images/arrows/header-resources.svg';

class Deploy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  setHover = hover => {
    this.setState({ hover: hover });
  };

  render() {
    return (
      <div className={`${styles.product} ${styles.deploy} ${styles.expanded}`}>
        <p className={`L ${styles.description}`}>
          Deploy audit-ready apps and databases using a developer workflow
          you’ll love. PHI-ready{' '}
          <a href="https://deploy-docs.aptible.com/docs/shared-dedicated">
            Dedicated Stacks
          </a>{' '}
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
            <li>
              <a href="https://deploy-docs.aptible.com/docs/shared-dedicated">
                Dedicated stack
              </a>{' '}
              available for regulated data
            </li>
            <li>No upfront costs</li>
            <li>No contract required</li>
          </CheckmarkUnorderedList>
        </div>

        <DeployCalculator />
      </div>
    );
  }
}

export default Deploy;
