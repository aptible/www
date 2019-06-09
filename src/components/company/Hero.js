import React from 'react';
import { Grid } from '../grid/Grid';
import ZoomChat from './ZoomChat';
import styles from './Hero.module.css';
import companyImage from '../../images/company/road.jpg';
import WistiaVideo from '../shared/WistiaVideo';

export default ({ webcamPhotos }) => (
  <div className={styles.container}>
    <Grid rows="2">
      <div className={styles.headline}>
        <h1 className="hero">
          We're building<br />
          trust on the internet.
        </h1>
      </div>

      <div className={styles.bgImage}>
        <img src={companyImage} alt="road" />
      </div>

      <div className={styles.zoomChat}>
        <ZoomChat webcamPhotos={webcamPhotos} />
      </div>

      <div className={styles.whoWeAre}>
        <h1>Who We Are</h1>
        <WistiaVideo videoId="vjzole82z0" />
      </div>
    </Grid>
  </div>
);
