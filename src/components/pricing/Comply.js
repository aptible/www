import React from 'react';
import styles from './Pricing.module.css';
import PricingArrow from './PricingArrow';
import ComplyPricingForm from './ComplyPricingForm';
import CheckmarkUnorderedList from '../shared/CheckmarkUnorderedList';
import PricingBlock from './PricingBlock';
import detailsIcons from '../../images/pricing/details.svg';
import detailsArrow from '../../images/arrows/header-resources.svg';

const closeIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 1L1.32993 18.9924M18.6841 19L1 1.02118" stroke="white" strokeOpacity="0.7" strokeWidth="2" />
  </svg>
);

class Comply extends React.Component {
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
        className={`${styles.product} ${styles.comply} ${this.props.expanded ? styles.expanded : ''}`}
        onClick={() => this.props.clickFn('comply')}
        onMouseEnter={() => this.setHover(true)}
        onMouseLeave={() => this.setHover(false)}>

        <div className={styles.closeIcon} onClick={this.close}>
          {closeIcon}
        </div>

        <div className={styles.title}>
          <h4>Aptible Comply</h4>
          <p className="L">
            Turn security and compliance into repeatable processes that
            accelerate your growth.
          </p>
        </div>

        {!this.props.expanded && 
          <React.Fragment>
            <div className={styles.button}>
              <PricingArrow text="Request Pricing" hover={this.state.hover} />
            </div>

            <PricingBlock title="Pricing" smallAmount="Contact us" />

            <div className={styles.seeDetails}>
              <img src={detailsIcons} className={styles.seeDetailsIcon} alt="Pricing details" />
              See Pricing Details
              <img src={detailsArrow} className={styles.seeDetailsArrow} alt="Pricing arrow" />
            </div>
          </React.Fragment>
        }

        {this.props.expanded && 
          <div className={styles.complyFormContainer}>
            <h2>The #1 Security Management Platform</h2>

            <div className={styles.complySidebar}>
              <CheckmarkUnorderedList>
                <li>Shorten your sales sycle</li>
                <li>Gain a competitive advantage</li>
                <li>Simplify vendor security assessments</li>
                <li>Pass your next compliance audit, guaranteed</li>
                <li>Delegate Security Management tasks</li>
                <li>Build a best-in-class security program</li>
              </CheckmarkUnorderedList>
            </div>
            <div className={styles.complyForm}>
              <ComplyPricingForm />
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Comply;
