import React from 'react';
import Signup from './Signup';

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
        <h1>Signup</h1>
        {this.state.open &&
          <Signup closeFn={this.closeSignup} />
        }
      </React.Fragment>
    );
  }
}

export default SignupPage;
