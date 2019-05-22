import React from 'react';
import styles from './Pricing.module.css';
import PricingArrow from './PricingArrow';
import detailsIcons from '../../images/pricing/details.svg';
import detailsArrow from '../../images/arrows/header-resources.svg';

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

  render() {
    return (
      <div
        className={`${styles.product} ${styles.comply} ${this.props.expanded ? styles.expanded : ''}`}
        onClick={() => this.props.clickFn('comply')}
        onMouseEnter={() => this.setHover(true)}
        onMouseLeave={() => this.setHover(false)}>

        <div className={styles.title}>
          <h4>Aptible Comply</h4>
          <p className="L">
            Design, operate, and audit your information security management
            program.
          </p>
        </div>

        {!this.props.expanded && 
          <React.Fragment>
            <div className={styles.button}>
              <PricingArrow hover={this.state.hover} />
            </div>

            <div className={styles.details}>
              <p className={`L ${styles.startsAt}`}>Packages start at</p>
              <h1>$13.5k</h1>
              <p>Per Year</p>
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

export default Comply;
