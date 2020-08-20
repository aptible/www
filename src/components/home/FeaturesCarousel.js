import React, { useState, useRef, useLayoutEffect } from 'react';
import cn from 'classnames';
import { Link } from 'gatsby';
import { useMeasure, useScroll, useWindowSize, useMedia } from 'react-use';
import useCases from '../../data/use-cases.json';
import auditsIllustration from '../../images/home/illustrations/audits.png';
import complianceManagementIllustration from '../../images/home/illustrations/compliance-management.png';
import sourceOfTruthIllustration from '../../images/home/illustrations/source-of-truth.png';
import vendorsIllustration from '../../images/home/illustrations/vendors.png';
import trustIllustration from '../../images/home/illustrations/trust.png';
import { Grid, Row } from '../grid/Grid';
import Arrow from '../shared/Arrow';
import Button from '../buttons/Button';
import styles from './FeaturesCarousel.module.css';

const illustrations = {
  auditsIllustration,
  complianceManagementIllustration,
  sourceOfTruthIllustration,
  vendorsIllustration,
  trustIllustration,
};

const ITEMS = useCases.map((useCase) => ({
  id: useCase.slug,
  title: useCase.title,
  image: illustrations[useCase.illustrationKey],
  body: useCase.excerpt,
  url: `/use-cases/${useCase.slug}/`,
}));

const FeaturesCarousel = () => {
  const scrollRef = useRef(null);
  const carouselRef = useRef(null);
  const [carouselPadding, setCarouselPadding] = useState(0);
  const [activeDot, setActiveDot] = useState(1);
  const { x: scrollXPosition } = useScroll(scrollRef);
  const { width: windowWidth } = useWindowSize();
  const [gridRef, { width: gridRefWidth }] = useMeasure();
  const [itemRef, { width: itemRefWidth }] = useMeasure();
  const isMobile = useMedia('(max-width: 1119px)');
  const scrollbarWidth = 15;
  const CAROUSEL_HEIGHT = isMobile ? 550 : 776;

  const startPositions = ITEMS.map((_, index) => {
    return (itemRefWidth * (index + 1)) - itemRefWidth;
  });

  const scrollTo = (itemNumber) => {
    const index = itemNumber - 1;
    scrollRef.current.scrollLeft = startPositions[index];
  }

  const highlightDots = () => {
    const activeDots = startPositions.filter((position) => scrollXPosition >= position);
    setActiveDot(activeDots.length);
  }

  const padCarouselToScreenSize = () => {
    const carouselContainer = carouselRef.current;
    setCarouselPadding((windowWidth - scrollbarWidth - gridRefWidth) / 2);
    carouselContainer.style.paddingLeft = `${carouselPadding}px`;
    carouselContainer.style.paddingRight = `${carouselPadding}px`;

    if (isMobile) {
      carouselContainer.style.paddingLeft = '0';
      carouselContainer.style.paddingRight = '0';
    }
  };

  useLayoutEffect(() => {
    padCarouselToScreenSize();
    highlightDots();
  }, [
    carouselPadding,
    gridRefWidth,
    windowWidth,
    scrollXPosition,
    itemRefWidth,
    activeDot,
    isMobile,
    scrollbarWidth,
  ]);

  return (
    <div>
      <div
        className={styles.container}
        style={{ height: `${CAROUSEL_HEIGHT}px` }}
      >
        <div
          ref={scrollRef}
          className={styles.productSelector}
          style={{ height: `${CAROUSEL_HEIGHT + scrollbarWidth}px` }}
        >
          <div className={styles.carouselContainer} ref={carouselRef}>
            {ITEMS.map(item => {
              const { url, id, title, body, image } = item;
              return (
                <div key={id} ref={itemRef} className={styles.item}>
                  <Link
                    to={url}
                    className={styles.product}
                    style={{
                      height: `${CAROUSEL_HEIGHT}px`,
                    }}
                  >
                    <div
                      className={styles.background}
                      style={{
                        backgroundImage: image ? `url(${image})` : null,
                      }}
                    />
                    <div role="presentation" className={styles.productArrow}><Arrow /></div>
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
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Grid>
        <Row>
          <div className={styles.circles} ref={gridRef}>
            {ITEMS.map((item, index) => {
              const itemNumber = index + 1;
              return (
                <span
                  key={item.id}
                  onClick={() => scrollTo(itemNumber)}
                  className={cn([
                    styles.circle,
                    activeDot === itemNumber && styles.active,
                  ])}
                />
              );
            })}
          </div>
        </Row>
      </Grid>
    </div>
  );
};

export default FeaturesCarousel;
