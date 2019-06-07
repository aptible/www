import React from 'react';
import Portal from '../shared/Portal';
import styles from './Signup.module.css';
import { Grid } from '../grid/Grid';
import GridLinesForSection from '../grid/GridLinesBackground';
import logoImage from '../../images/aptible.svg';
import Email from './Email';
import ProductSelection from './ProductSelection';
import Confirmation from './Confirmation';

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
    this.sendToMarketo(email);

    if (this.state.product) {
      this.openChiliPiper();
    } else {
      this.setState({ currentView: ProductSelection });
    }
  }

  setProduct = (productName) => {
    this.setState({ product: productName });
    this.openChiliPiper();
  }

  setCall = (scheduledCall) => {
    const sampleCall = {};
    this.setState({ scheduledCall: sampleCall, currentView: Confirmation });
  }

  sendToMarketo = (email) => {
    window.MktoForms2.loadForm('//app-ab35.marketo.com', '620-GAP-535', 1067);
    window.MktoForms2.whenReady((marketoForm) => {
      marketoForm.addHiddenFields({
        Email: email,
        LeadSource: 'Website Signup'
      });

      marketoForm.onSuccess(() => {
        return false;
      });

      marketoForm.submit();
    });
  }

  openChiliPiper = () => {
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
