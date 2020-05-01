import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Vision.module.css';

export default () => (
  <div className={styles.container} id="vision">
    <Grid>
      <div className={styles.taggbox}>
        <h1>Aptible Library</h1>
        <iframe title="Aptible Taggbox" src="https://taggbox.com/w/33788" style={{ height: '600px', width: '100%', border: '0' }}></iframe>
      </div>
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
  </div>
);
