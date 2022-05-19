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
          We're making it possible to use
          &nbsp;<br className="desktopOnly" /> 
          any cloud infrastructure securely.
        </h1>
      </div>

      <div className={styles.bgImage}>
        <img src={companyImage} alt="road" />
      </div>

      <div className={styles.zoomChat}>
        <ZoomChat webcamPhotos={webcamPhotos} />
      </div>
    </Grid>
  </div>
);
