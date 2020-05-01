import React from 'react';
import styles from './Checkbox.module.css';
import checkmarkIcon from '../../images/pricing/checkmark.svg';

export default ({ checked, label = '' }) => (
  <div className={styles.container}>
    <div className={styles.checkbox}>
      {checked &&
        <img src={checkmarkIcon} alt="checkmark" />
      }
    </div>
    <p>{label}</p> 
  </div>

);
