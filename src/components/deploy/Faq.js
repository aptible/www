import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Faq.module.css';
import hipaaBadge from '../../images/home/badges/hipaa-24x24.svg';
import hitrustBadge from '../../images/home/badges/hitrust-24x24.svg';
import soc2Badge from '../../images/home/badges/soc-24x24.svg';
import isoBadge from '../../images/home/badges/iso-24x24.svg';
import dashboardIlly from '../../images/home/illustrations/deploy-container-metrics-dashboard.svg';
import deployConsoleIlly from '../../images/home/illustrations/deploy-console.svg';
import mobileHero from '../../images/home/illustrations/mobile-hero-dashboard.svg';
import LeadForm from '../../components/lead-form';


const Question = ({ title, question }) => {
  return (
    <div className={styles.question}>
      <h6 className="">{title}</h6>
      {question}
    </div>
  );
};

export default ({ title="Frequently Asked Questions", questions }) => (
  <div>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.questions}>
      {questions.map((q, idx) => (
        <Question {...q} key={idx} />
      ))}
    </div>
  </div>
);
