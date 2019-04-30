import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './CustomerCarousel.module.css';
import ArrowButton from '../buttons/ArrowButton';
import CustomerCarouselThumbnail from './CustomerCarouselThumbnail';
import arrowImage from '../../images/arrow-green.svg';

class CustomerCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid>
        <div className={styles.content}>
          <h5>Our Customers</h5>
          <h1 className={styles.quoteStart}>&ldquo;We needed to go from</h1>
          <h1>zero to <img src={arrowImage} alt="arrow" /></h1>
          <h1>HIPAA-compliant quickly,</h1>
          <h1>and Aptible was the only</h1>
          <h1>way we could do it.&rdquo;</h1>
          <p className="L">
            This would be a paragraph summarizing the project, as well as the
            value that Aptible provided. It would probably be two to three lines
            of text.
          </p>
          <ArrowButton to="/" text="Our Customers" />
        </div>

        <div className={styles.mainImage}>
          <div className={`${styles.tmpImage} ${styles.suedeGray}`}></div>
        </div>

        <div className={styles.thumbnails}>
          <CustomerCarouselThumbnail tmpBgColor="suedeGray" active="true" />
          <CustomerCarouselThumbnail tmpBgColor="ruby" />
          <CustomerCarouselThumbnail tmpBgColor="gulfBlue" />
          <CustomerCarouselThumbnail tmpBgColor="blueMist" />
        </div>
      </Grid>
    )
  }
}

export default CustomerCarousel;
