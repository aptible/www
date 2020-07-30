import React from 'react';
import Signup from './Signup';
import styles from './SignupPage.module.css';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentDidMount = () => {
    if (typeof (window) === 'undefined') {
      return;
    }

    this.setState({ open: true });
  }

  closeSignup = () => {
    window.location = '/';
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles.container}>
          <h1 className={styles.heading}>Signup</h1>
        </div>
        {this.state.open &&
          <Signup closeFn={this.closeSignup} product={this.props.product} />
        }
      </React.Fragment>
    );
  }
}

export default SignupPage;
