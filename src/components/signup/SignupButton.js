import React from 'react';
import Button from '../buttons/Button';
import Signup from './Signup';

class SignupButton extends React.Component {
  render() {
    return (
      <Button
        href="https://dashboard.aptible.com/signup"
        theme={this.props.theme}
        size={this.props.size}
      >
        {this.props.text}
      </Button>
    );
  }
}

export default SignupButton;
