import React from 'react';
import { Link } from 'gatsby';
import Portal from '../shared/Portal';
import styles from './Signup.module.css';
import { Grid } from '../grid/Grid';
import logoImage from '../../images/aptible.svg';
import Email from './Email';
import ProductSelection from './ProductSelection';
import Confirmation from './Confirmation';
import Unqualified from './Unqualified';
import { submitMarketoForm, COMPLY_SIGNUP_FORM, DEPLOY_SIGNUP_FORM, GENERIC_SIGNUP_FORM } from '../../lib/marketo';
import { analytics } from '../../lib/aptible';

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

  componentDidMount = () => {
    this.funnelEvent('open');
  }

  funnelEvent = (name) => {
    const funnelType = this.props.product ? this.props.product : 'generic';
    analytics.event(`signup:${funnelType}:${name}`);
  }

  setEmail = (email, marketingConsent, personaAnaswer) => {
    this.setState({ email, marketingConsent });
    this.sendToMarketo(email, marketingConsent, personaAnaswer, () => {
      this.funnelEvent('email_collected');

      // Linkedin pixel
      (new Image()).src = 'https://px.ads.linkedin.com/collect/?pid=42067&conversionId=2213244&fmt=gif';

      // Adroll
      if (this.state.product && this.state.product === 'deploy') {
        // Deploy pixel
        try {
          window.__adroll.record_user({"adroll_segments": "57de1b27"});
        } catch(err) {}
      } else {
        // Comply pixel
        try {
          window.__adroll.record_user({"adroll_segments": "b5d1620a"});
        } catch(err) {}
      }

      if (this.state.product) {
        if (this.state.product === 'deploy') {
          this.redirectToDeploy(email);
        } else {
          if (this.state.scheduledCall === null) {
            this.qualifyComplySignup();
          }
        }
      } else {
        this.setState({ currentView: ProductSelection });
      }
    });
  }

  setProduct = (productName) => {
    this.setState({ product: productName });
    this.funnelEvent('product_selected');
    if (productName === 'deploy') {
      this.redirectToDeploy(this.state.email);
    } else {
      this.qualifyComplySignup();
    }
  }

  isQualified = () => {
    return this.state.email.match(/(test|gmail|yahoo|hotmail|aol)/) === null
  }

  qualifyComplySignup = () => {
    if (this.isQualified()) {
      this.funnelEvent('chili_piper_opened');
      this.openChiliPiper();
    } else {
      this.funnelEvent('unqualified');
      this.setState({ currentView: Unqualified });
    }
  }

  setCall = (scheduledCall) => {
    const popupWindow = document.querySelector('.chilipiper-popup');
    popupWindow.parentNode.removeChild(popupWindow);

    this.funnelEvent('chili_piper_scheduled');

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

  marketoLeadSource = () => {
    if (this.state.product === 'comply') {
      return 'Comply Signup';
    } else if (this.state.product === 'deploy') {
      return 'Deploy Signup';
    } else {
      return 'Website Signup';
    }
  }

  sendToMarketo = (email, marketingConsent, personaAnaswer, callback) => {
    const payload = {
      Email: email,
      Contact_Consent__c: marketingConsent,
      LeadSource: this.marketoLeadSource()
    };

    if (personaAnaswer) {
      payload['Persona_identification__c'] = personaAnaswer;
    }

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

          {this.props.closeFn && (
            <div className={styles.close}>
              <div className={styles.closeButton} onClick={this.props.closeFn}>
                Back to Aptible.com
              </div>
            </div>
          )}

          {this.props.to && (
            <div className={styles.close}>
              <Link className={styles.closeButton} to={this.props.to}>
                Back to Aptible.com
              </Link>
            </div>
          )}

          <div className={styles.content}>
            <CurrentView
              signupState={this.state} 
              setEmail={this.setEmail}
              setProduct={this.setProduct} />
          </div>
        </Grid>
      </div>
    );
  }
}

export default Signup;
