import React from 'react';
import Button from '../buttons/Button';
import Signup from '../signup/Signup';

class SignupButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  openForm() {
    this.setState({ open: true });
  }

  closeForm() {
    this.setState({ open: false });
  }

  render() {
    return (
      <>
        <Button
          onClickFn={() => this.openForm()}
          theme={this.props.theme}
          size={this.props.size}
        >
          {this.props.text}
        </Button>

        {this.state.open && <Signup product="deploy" closeFn={() => this.closeForm()} />}
      </>
    );
  }
}

export default SignupButton;
