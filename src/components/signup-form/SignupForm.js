import React from 'react';
import cn from 'classnames';
import styles from './SignupForm.module.css';
import buttonStyles from '../buttons/Button.module.css';
import { analytics } from '../../lib/aptible';
import Button from '../buttons/Button';

export const SignupForm = ({
  btnText = 'Sign Up For Free',
  theme = '',
  size = '',
}) => {
  const onSubmit = () => {
    let url = 'https://dashboard.aptible.com/signup';
    const utms = analytics.allUtmVars();

    if (Object.keys(utms).length > 0) {
      const params = [];
      for (let param in utms) {
        params.push(`${param}=${utms[param]}`);
      }

      url += `?${params.join('&')}`;
    }

    window.location = url;
  };

  return (
    <div>
      <Button
        className={cn(buttonStyles.button, styles.button)}
        onClickFn={onSubmit}
        theme={theme}
        size={size}
      >
        {btnText}
      </Button>
    </div>
  );
};
