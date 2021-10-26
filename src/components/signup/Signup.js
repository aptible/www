import React from 'react';
import Portal from '../shared/Portal';
import styles from './Signup.module.css';
import { Grid } from '../grid/Grid';
import logoImage from '../../images/aptible.svg';
import SignupForm from '../signup-form';

function Signup(props) {
  return (
    <Portal>
      <InnerSignup {...props} />
    </Portal>
  );
}

class InnerSignup extends React.Component {
  render() {
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

          <div className={styles.content}>
            <h2>
              Sign up for Aptible. Get started <span>for free</span> and 
              securely deploy your app in minutes.
            </h2>
            <SignupForm
              id="Modal Signup Form"
              inputPlaceholder="Enter your email"
            />
          </div>
        </Grid>
      </div>
    );
  }
}

export default Signup;
