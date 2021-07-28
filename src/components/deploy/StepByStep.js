import React from 'react';
import styles from './StepByStep.module.css';
import cn from 'classnames';

const Step = ({ id, title, text }) => (
  <div className={styles.step}>
    <p className={cn('L-bold', styles.stepId)}>{id}</p>
    <p className={cn('L-bold', styles.stepTitle)}>{title}</p>
    <p className={cn('L', styles.stepDescription)}>{text}</p>
  </div>
);

export default ({ steps }) => (
  <div className={styles.steps}>
    {steps.map((stepRow, i) => (
      <div key={`step-row-${i}`} className={styles.stepRow}>
        {stepRow.map((step, k) => (
          <Step key={`step-${i}-${k}`} {...step} />
        ))}
      </div>
    ))}
  </div>
);
