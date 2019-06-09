import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Vision.module.css';

export default () => (
  <div className={styles.container} id="vision">
    <Grid>
      <div className={styles.intro}>
        <h1>Our Vision</h1>
        <p className="XL">
          We see a future where it's easy to bring a great idea into the world
          using the internet, while respecting data security and privacy. The
          next generation of businesses will design security and privacy into
          their operating processes. If every business is going to be a
          software business, every business will need to be a security business.
        </p>
        <p className="XL">
          We're working to make information security a core competency of every
          startup. We envision a world in which startups have access to great
          information security, are empowered to focus on their business instead
          of on compliance, can scale faster and more efficiently, and are
          confident that they're creating quality products.
        </p>
      </div>
    </Grid>

    <Grid rows="2">
      <div className={`${styles.bullet} ${styles.bulletLeft} ${styles.bulletTop}`}>
        <h3>Access</h3>
        <p className="L">
          We understand that many companies are just starting on their compliance
          journey and may not fully understand information security. We believe
          that they should have access to compliance experts and best-in-class
          information security whether or not they have a security team.
        </p>
      </div>

      <div className={`${styles.bullet} ${styles.bulletRight} ${styles.bulletTop}`}>
        <h3>Empowerment</h3>
        <p className="L">
          Startups spend a great deal of time and money trying to achieve and
          maintain compliance when they should be focusing on other parts of
          their business. They need a solution that equips them with the tools
          and knowledge so they can achieve and own their compliance without
          burning resources.
        </p>
      </div>

      <div className={`${styles.bullet} ${styles.bulletLeft} ${styles.bulletBottom}`}>
        <h3>Scalability</h3>
        <p className="L">
          As companies scale, so do customer requirements for security. We
          believe that startups should have access to tools that scale with them
          and allow them to quickly and efficiently address thier internal and
          external security and complinace needs.
        </p>
      </div>

      <div className={`${styles.bullet} ${styles.bulletRight} ${styles.bulletBottom}`}>
        <h3>Confidence</h3>
        <p className="L">
          Startups have a lot to prove, and to succeed they need to build trust.
          We understand that having confidence in the stability of their product,
          the robustness of their security program, and the trutworthiness of
          their vendors equates to being able to speak confidently to customers
          and build trust.
        </p>
      </div>
    </Grid>
  </div>
);
