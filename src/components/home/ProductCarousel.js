import React from 'react';
import { Link } from 'gatsby';
import styles from './ProductCarousel.module.css';
import { Grid, Row } from '../grid/Grid';

export default () => (
  <Grid>
    <Row>
      <div className={styles.productSelector}>
        <div className={styles.carouselContainer}>
          <Link to="/comply/" className={`${styles.product} ${styles.comply}`}>
            <h5>Aptible Comply&trade;</h5>
            <h2>
              Design, operate, and audit your security management program.
            </h2>
          </Link>
          <Link to="/deploy/" className={`${styles.product} ${styles.deploy}`}>
            <h5>Aptible Deploy&trade;</h5>
            <h2>Deploy audit-ready apps<br/> and databases.</h2>
          </Link>
        </div>
      </div>
    </Row>
  </Grid>
);
