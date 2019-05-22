import React from 'react';
import styles from './Pricing.module.css';
import PricingArrow from './PricingArrow';
import detailsIcons from '../../images/pricing/details.svg';
import detailsArrow from '../../images/arrows/header-resources.svg';

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

            <div className={styles.details}>
              <p className={`L ${styles.startsAt}`}>Development stack start at</p>
              <h1>$0</h1>
              <p>Per Month</p>

              <p className={`L ${styles.startsAt}`}>Production stack start at</p>
              <h1>$999</h1>
              <p>Per Month</p>
            </div>

            <div className={styles.seeDetails}>
              <img src={detailsIcons} className={styles.seeDetailsIcon} alt="Pricing details" />
              See Pricing Details
              <img src={detailsArrow} className={styles.seeDetailsArrow} alt="Pricing arrow" />
            </div>
        </React.Fragment>
      }

      </div>
    )
  }
}

export default Deploy;
