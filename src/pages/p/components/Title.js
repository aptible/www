import React from 'react';
import classnames from 'classnames';

import styles from '../VideoLandingPage.module.css';
import logoImage from '../../../images/aptible.svg';

export default ({ title, summary }) => {
  return (
    <div>
      <img className={styles.logo} src={logoImage} alt="Aptible logo" />
      <h1 className={styles.headerText}>{title}</h1>
      <p className={classnames('XL', styles.textCenter, styles.headerSubText)}>{summary}</p>
    </div>
  );
};
