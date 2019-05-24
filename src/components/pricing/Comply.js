import React from 'react';
import styles from './Pricing.module.css';
import PricingArrow from './PricingArrow';
import TextInput from '../forms/TextInput';
import Button from '../buttons/Button';
import CheckmarkUnorderedList from '../shared/CheckmarkUnorderedList';
import PricingBlock from './PricingBlock';
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

            <PricingBlock title="Packages start at" amount="$13.5k" timePeriod="Per Year" />

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
              <TextInput labelText="First Name" required="true" />
              <TextInput labelText="Last Name" required="true" />
              <TextInput labelText="Work Email" required="true" />
              <TextInput labelText="Phone Number" />
              <TextInput labelText="Company Name" />

              <div className={styles.complyCta}>
                <Button to="/">Request Pricing Info</Button>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Comply;
