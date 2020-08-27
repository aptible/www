import React, { Children, useState, useRef, useLayoutEffect } from 'react';
import cn from 'classnames';
import { useMeasure, useScroll, useWindowSize, useMedia } from 'react-use';
import { Grid, Row } from '../grid/Grid';
import styles from './Carousel.module.css';

const Carousel = ({
  children,
  selectedItem = 1,
  height,
  mobileHeight,
  id,
}) => {
  const scrollRef = useRef(null);
  const carouselRef = useRef(null);
  const [carouselPadding, setCarouselPadding] = useState(0);
  const [activeDot, setActiveDot] = useState(selectedItem);
  const { x: scrollXPosition } = useScroll(scrollRef);
  const { width: windowWidth } = useWindowSize();
  const [gridRef, { width: gridRefWidth }] = useMeasure();
  const [itemRef, { width: itemRefWidth }] = useMeasure();
  const isMobile = useMedia('(max-width: 1119px)');
  const scrollbarWidth = 15;
  const CAROUSEL_HEIGHT = isMobile ? mobileHeight : height;
  const adjustedItemWidth = Math.ceil(itemRefWidth / 1.5);
  const totalItems = Children.count(children);
  const dots = Array.from(Array(totalItems), (_, i) => i + 1);

  const startPositions = Children.map(children, (_, index) => {
    return (adjustedItemWidth * (index + 1)) - adjustedItemWidth;
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
          className={styles.scrollContainer}
          style={{ height: `${CAROUSEL_HEIGHT + scrollbarWidth}px` }}
        >
          <div className={styles.itemsContainer} ref={carouselRef}>
            {Children.map(children, (item, index) => (
              <div key={`${id}-item-${index}`} ref={itemRef} className={styles.item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Grid>
        <Row>
          <div className={styles.dots} ref={gridRef}>
            {dots.map((dot) => (
              <span
                key={`${id}-dot-${dot}`}
                onClick={() => scrollTo(dot)}
                className={cn([
                  styles.dot,
                  activeDot === dot && styles.active,
                ])}
              />
            ))}
          </div>
        </Row>
      </Grid>
    </div>
  );
}

export default Carousel;
