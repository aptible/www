import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './CustomerEmpowerment.module.css';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.intro}>
        <h1>Customer Empowerment</h1>
        <p className="XL">
          Our customers' stories give life to our mission of building trust by
          empowering teams. In that endeavor, we have a few signposts that guide
          our decision-making, and help make us trusted advisors for our clients.
        </p>
      </div>
    </Grid>

    <Grid rows="2">
      <div className={`${styles.bullet} ${styles.bulletLeft} ${styles.bulletTop}`}>
        <h3>Customer empowerment happens on every level</h3>
        <p className="L">
          We think of customer success in terms of empowerment and growth through
          self-improvement, which makes it easy to have a deep passion for that
          success and be deeply invested in it. We want to see our customers grow
          into mature teams that excel at protecting data.
        </p>
      </div>

      <div className={`${styles.bullet} ${styles.bulletRight} ${styles.bulletTop}`}>
        <h3>We give away knowledge over swag</h3>
        <p className="L">
          We help our customers by solving hard problems in multiple domains.
          Our customers look to us as guides, and we weave our deep legal and
          technical experience into our software and services. Our products teach
          you how to get better as you use them: to do this well, we often choose
          to sacrifice flexibility first.
        </p>
      </div>

      <div className={`${styles.bullet} ${styles.bulletLeft} ${styles.bulletBottom}`}>
        <h3>We'll share our knowledge even if you're not a customer</h3>
        <p className="L">
          Our customers value leverage: doing more with less time and money, and
          fewer people. Our products give them leverage by making complex processes
          simple and safe. With Gridiron, our customers can launch an enterprise-grade
          compliance program without a CISO or security department. With Enclave,
          our customers get the benefits of a secure, highly-available, fault-tolerant
          infrastructure without having to recruit, run, and retain a DevOps team. 
        </p>
      </div>

      <div className={`${styles.bullet} ${styles.bulletRight} ${styles.bulletBottom}`}>
        <h3>The customer is not always right</h3>
        <p className="L">
          Sometimes we tell customers things they don't want to hear, to help
          them improve. We think about empowerment across the entire team, not
          just product: In our marketing, we're more likely to give away knowledge
          than swag. In sales, we always try to answer substantive questions and
          provide a roadmap for prospects, even if they don't buy.
        </p>
      </div>
    </Grid>
  </div>
);
