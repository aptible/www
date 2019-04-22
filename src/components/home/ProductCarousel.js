import React from 'react';
import { Link } from 'gatsby';
import styles from './ProductCarousel.module.css';
import { Grid, Row } from '../grid/Grid';
import Arrow from '../shared/Arrow';

const ALL_PRODUCTS = {
  comply: {
    url: '/comply/',
    name: 'Aptible Comply&trade;',
    description: 'Design, operate, and audit your security management program.'
  },
  deploy: {
    url: '/deploy/',
    name: 'Aptible Deploy&trade;',
    description: 'Deploy audit-ready apps<br/> and databases.'
  }
}

export default ({ products }) => (
  <Grid>
    <Row>
      <div className={styles.productSelector}>
        <div className={styles.carouselContainer}>
          {products.split(',').map((product) =>
            <Link to={ALL_PRODUCTS[product].url} className={`${styles.product} ${styles[product]}`}>
              <div className={styles.productArrow}><Arrow /></div>
              <h5 dangerouslySetInnerHTML={{ __html: ALL_PRODUCTS[product].name }}></h5>
              <h2 dangerouslySetInnerHTML={{ __html: ALL_PRODUCTS[product].description }}></h2>
            </Link>
          )}
        </div>
      </div>
    </Row>
  </Grid>
);
