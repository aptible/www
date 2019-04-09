import React from 'react';
import styles from './ProductCarousel.module.css';
import { Grid, Row } from '../grid/Grid';

export default () => (
  <Grid>
    <Row>
      <div style={{ position: 'relative', height: '300px', marginBottom: '75px' }}>
        <div className={styles.carouselContainer}>
          <div className={styles.product}>
            <h3>Aptible Comply&trade;</h3>
          </div>
          <div className={styles.product}>
            <h3>Aptible Deploy&trade;</h3>
          </div>
        </div>
      </div>
    </Row>
  </Grid>
);
