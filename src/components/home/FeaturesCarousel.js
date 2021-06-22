import React from 'react';
import { Link } from 'gatsby';
import useCases from '../../data/use-cases.json';
import auditsIllustration from '../../images/home/illustrations/audits.png';
import complianceManagementIllustration from '../../images/home/illustrations/compliance-management.png';
import sourceOfTruthIllustration from '../../images/home/illustrations/source-of-truth.png';
import vendorsIllustration from '../../images/home/illustrations/vendors.png';
import trustIllustration from '../../images/home/illustrations/trust.png';
import Arrow from '../shared/Arrow';
import Button from '../buttons/Button';
import Carousel from './Carousel';
import styles from './FeaturesCarousel.module.css';

const illustrations = {
  auditsIllustration,
  complianceManagementIllustration,
  sourceOfTruthIllustration,
  vendorsIllustration,
  trustIllustration,
};

const ITEMS = useCases.map((useCase, i) => ({
  number: i + 1,
  id: useCase.slug,
  title: useCase.title,
  image: illustrations[useCase.illustrationKey],
  body: useCase.excerpt,
  url: `/use-cases/${useCase.slug}/`,
}));

const FeaturesCarousel = () => {
  return (
    <Carousel height={776} mobileHeight={550}>
      {ITEMS.map(item => {
        const { url, id, title, body, image } = item;
        return (
          <Link key={id} to={url} className={styles.useCase}>
            <div
              className={styles.background}
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
            <div role="presentation" className={styles.bigArrow}>
              <Arrow />
            </div>
            <div className={styles.content}>
              <h3>{title}</h3>
              <p>{body}</p>

              <div className={styles.button}>
                <Button>
                  Learn More <span className={styles.arrow}>&rarr;</span>
                </Button>
              </div>
            </div>
          </Link>
        );
      })}
    </Carousel>
  );
};

export default FeaturesCarousel;
