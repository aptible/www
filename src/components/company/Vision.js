import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Vision.module.css';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.intro}>
        <h1>Our Vision</h1>
        <p className="XL">
          We challenge ourselves to create a tribe of startups that have access
          to great information security; are empowered to focus on their business,
          not on compliance; are able to scale their businesses faster and more
          efficiently and are confident that they are creating quality products.
        </p>
      </div>
    </Grid>

    <Grid rows="2">
      <div className={`${styles.bullet} ${styles.bulletLeft} ${styles.bulletTop}`}>
        <h3>Access</h3>
        <p className="L">
          We think of customer success in terms of empowerment and growth through
          self-improvement, which makes it easy to have a deep passion for that
          success and be deeply invested in it. We want to see our customers grow
          into mature teams that excel at protecting data.
        </p>
      </div>

      <div className={`${styles.bullet} ${styles.bulletRight} ${styles.bulletTop}`}>
        <h3>Empowerment</h3>
        <p className="L">
          We think of customer success in terms of empowerment and growth through
          self-improvement, which makes it easy to have a deep passion for that
          success and be deeply invested in it. We want to see our customers grow
          into mature teams that excel at protecting data.
        </p>
      </div>

      <div className={`${styles.bullet} ${styles.bulletLeft} ${styles.bulletBottom}`}>
        <h3>Scalability</h3>
        <p className="L">
          We think of customer success in terms of empowerment and growth through
          self-improvement, which makes it easy to have a deep passion for that
          success and be deeply invested in it. We want to see our customers grow
          into mature teams that excel at protecting data.
        </p>
      </div>

      <div className={`${styles.bullet} ${styles.bulletRight} ${styles.bulletBottom}`}>
        <h3>Confidence</h3>
        <p className="L">
          We think of customer success in terms of empowerment and growth through
          self-improvement, which makes it easy to have a deep passion for that
          success and be deeply invested in it. We want to see our customers grow
          into mature teams that excel at protecting data.
        </p>
      </div>
    </Grid>
  </div>
);
