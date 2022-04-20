import React from 'react';
import SignupForm from '../signup-form';

const SignupButton = ({
  text = 'Sign Up For Free',
  theme = '',
  size = '',
}) => {
  return (
    <SignupForm btnText={text} theme={theme} size={size} />
  );
};

export default SignupButton
