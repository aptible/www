import React from 'react';
import Portal from '../shared/Portal';
import styles from './Signup.module.css';
import { Grid } from '../grid/Grid';
import GridLinesForSection from '../grid/GridLinesBackground';
import logoImage from '../../images/aptible.svg';
import Email from './Email';
import ProductSelection from './ProductSelection';
import Confirmation from './Confirmation';
import { submitMarketoForm, COMPLY_SIGNUP_FORM, DEPLOY_SIGNUP_FORM, GENERIC_SIGNUP_FORM } from '../../lib/marketo';

function Signup(props) {
  return (
    <Portal>
      <InnerSignup {...props} />
    </Portal>
  );
}

class InnerSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      marketingConsent: null,
      product: this.props.product ? this.props.product : null,
      scheduledCall: null,
      currentView: Email
    };
  }

  setEmail = (email, marketingConsent) => {
    this.setState({ email, marketingConsent });
    this.sendToMarketo(email, marketingConsent, () => {
      if (this.state.product) {
        if (this.state.product === 'deploy') {
          this.redirectToDeploy(email);
        } else {
          if (this.state.scheduledCall === null) {
            this.openChiliPiper();
          }
        }
      } else {
        this.setState({ currentView: ProductSelection });
      }
    });
  }

  setProduct = (productName) => {
    this.setState({ product: productName });
    if (productName === 'deploy') {
      this.redirectToDeploy(this.state.email);
    } else {
      this.openChiliPiper();
    }
  }

  setCall = (scheduledCall) => {
    const popupWindow = document.querySelector('.chilipiper-popup');
    popupWindow.parentNode.removeChild(popupWindow);

    const sampleCall = {};
    this.setState({ scheduledCall: sampleCall, currentView: Confirmation });
  }

  marketoFormId = () => {
    if (this.state.product === 'comply') {
      return COMPLY_SIGNUP_FORM;
    } else if (this.state.product === 'deploy') {
      return DEPLOY_SIGNUP_FORM;
    } else {
      return GENERIC_SIGNUP_FORM;
    }
  }

  sendToMarketo = (email, marketingConsent, callback) => {
    const payload = {
      Email: email,
      Contact_Consent__c: marketingConsent,
      LeadSource: 'Website Signup'
    };

    submitMarketoForm(this.marketoFormId(), payload, callback);
  }

  openChiliPiper = () => {
    if (!window.ChiliPiper) {
      return;
    }

    window.ChiliPiper.submit('aptible', 'gridiron-signup', {
      handleSubmit: false,
      debug: true,
      onSuccess: this.setCall,
      closeOnOutside: true,
      lead: {
        Email: this.state.email
      }
    });
  }

  redirectToDeploy = (email) => {
    if (typeof(window) === 'undefined') {
      return;
    }

    window.location = `https://dashboard.aptible.com/signup?email=${email}`;
  }

  render() {
    const CurrentView = this.state.currentView;

    return (
      <div className={styles.container}>
        <Grid rows="2">
          <div className={styles.logo}>
            <img src={logoImage} alt="Aptible logo" />
          </div>

          <div className={styles.close} onClick={this.props.closeFn}>
            Back to Aptible.com
          </div>

          <div className={styles.content}>
            <CurrentView
              signupState={this.state} 
              setEmail={this.setEmail}
              setProduct={this.setProduct} />
          </div>
        </Grid>

        <GridLinesForSection />
      </div>
    );
  }
}

export default Signup;
