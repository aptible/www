import React from 'react';
import styles from './ToolTip.module.css';
import questionMarkIcon from '../../images/pricing/questionmark.svg';

export default ({ text }) => (
  <div className={styles.container}>
    <img src={questionMarkIcon} alt="Question mark" />
    <div className={styles.text}>{text}</div>
  </div>
);
