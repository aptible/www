import React from 'react';
import { Grid } from '../grid/Grid';
import CheckmarkUnorderedList from '../shared/CheckmarkUnorderedList';
import styles from './ProductSelection.module.css';

const bigArrow = (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M40 20.0011L20.4649 -8.53907e-07L14.6043 -1.11008e-06L32.1859 18.001L6.84255e-06 18.001L6.66769e-06 22.0012L32.1859 22.0012L14.6043 40L20.4649 40L40 20.0011Z"
      fill="#FDB515"
    />
  </svg>
);

export default ({ setProduct }) => (
  <div className={styles.container}>
    <h3>What product are you interested in?</h3>

    <Grid>
      <div
        className={`${styles.product} ${styles.comply}`}
        onClick={() => setProduct('comply')}
      >
        <div className={styles.bigArrow}>{bigArrow}</div>

        <div className={styles.title}>
          <h5>Aptible Comply</h5>
          <p className="L">
            Compliance monitoring and automation through integrations for SOC 2,
            ISO 27001, HIPAA, GDPR and more.
          </p>
        </div>

        <div className={styles.bullets}>
          <CheckmarkUnorderedList>
            <li>Streamline Vendor Security Assessments</li>
            <li>Operate safely in a regulated industry</li>
            <li>Operationalize data protection</li>
            <li>Pass information security audits</li>
          </CheckmarkUnorderedList>
        </div>
      </div>

      <div
        className={`${styles.product} ${styles.deploy}`}
        onClick={() => setProduct('deploy')}
      >
        <div className={styles.bigArrow}>{bigArrow}</div>

        <div className={styles.title}>
          <h5>Aptible Deploy</h5>
          <p className="L">
            Deploy audit-ready apps and databases using a developer workflow
            you'll love.
          </p>
        </div>

        <div className={styles.bullets}>
          <CheckmarkUnorderedList>
            <li>Deploy audit-ready infrastructure</li>
            <li>Automate rigourous technical controls</li>
            <li>Accelerate developer operations</li>
          </CheckmarkUnorderedList>
        </div>
      </div>
    </Grid>
  </div>
);
