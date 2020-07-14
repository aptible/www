import React from 'react';
import ArrowButton from '../buttons/ArrowButton';
import Signup from './Signup';

class SignupArrowButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  openSignup = () => {
    this.setState({ open: true });
  };

  closeSignup = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <React.Fragment>
        <ArrowButton
          onClickFn={this.openSignup}
          text={this.props.text}
        />

        {this.state.open && (
          <Signup closeFn={this.closeSignup} product={this.props.product} />
        )}
      </React.Fragment>
    );
  }
}

export default SignupArrowButton;
