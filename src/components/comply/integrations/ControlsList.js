import React from 'react';
import classNames from 'classnames';
import styles from './ControlsList.module.css';

export default ({ controls, stacked }) => (
  <div className={classNames(styles.controls, stacked && styles.controlsStacked)}>
    {controls.map(control => (
      <div className={styles.control} key={control}>{control}</div>
    ))}
  </div>
);
