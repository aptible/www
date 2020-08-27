import React from 'react';
import cn from 'classnames';
import { Link } from 'gatsby';
import Button from '../buttons/Button';
import Arrow from '../shared/Arrow';
import Carousel from './Carousel';
import styles from './ProductCarousel.module.css';

const ITEMS = [
  {
    id: 'comply',
    url: '/comply/',
    name: 'Aptible Comply',
    title: 'Compliance Management',
    body:
      'The end-to-end compliance management platform that uses intelligent automations to simplify compliance work.',
  },
  {
    id: 'deploy',
    url: '/deploy/',
    name: 'Aptible Deploy',
    title: 'Container Security',
    body:
      'The container orchestration platform that automates the data security controls required for software in regulated industries.',
  },
];

const ProductCarousel = () => {
  return (
    <Carousel
      id="ProductCarousel"
      height={450}
      mobileHeight={380}
    >
      {ITEMS.map(product => {
        const { url, id, name, title, body } = product;
        return (
          <Link
            key={id}
            className={cn(styles.product, styles[id])}
            to={url}
          >
            <div role="presentation" className={styles.productArrow}><Arrow /></div>
            <h5>{name}</h5>
            <h2>{title}</h2>
            <p>{body}</p>

            <div className={styles.button}>
              <Button>
                Explore {name} <span className={styles.arrow}>&rarr;</span>
              </Button>
            </div>
          </Link>
        );
      })}
    </Carousel>
  );
}

export default ProductCarousel;
