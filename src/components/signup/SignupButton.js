import React from 'react';
import Button from '../buttons/Button';
import Signup from './Signup';

class SignupButton extends React.Component {
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
        <Button
          onClickFn={this.openSignup}
          theme={this.props.theme}
          size={this.props.size}
        >
          {this.props.text}
        </Button>

        {this.state.open && (
          <Signup closeFn={this.closeSignup} product={this.props.product} />
        )}
      </React.Fragment>
    );
  }
}

export default SignupButton;
