import React from 'react';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';
import styles from '../VideoLandingPage.module.css';

export default () => {
  return (
    <div>
      <Helmet>
        <script
          src="https://fast.wistia.com/embed/medias/faliwbcnei.jsonp"
          async
        />
        <script src="https://fast.wistia.com/assets/external/E-v1.js" async />
      </Helmet>
      <div className={styles.videoGroup}>
        <div className={classnames('L', styles.videoText)}>
          Watch the video below to see how Aptible can save your engineers
          time on HITRUST-compliance.
        </div>
        <div
          className={`${styles.video} wistia_embed wistia_async_faliwbcnei`}
          style={{
            position: 'relative',
          }}
        >
          <div
            className="wistia_swatch"
            style={{
              height: '100%',
              left: 0,
              opacity: 0,
              overflow: 'hidden',
              position: 'absolute',
              top: 0,
              width: '100%',
            }}
          >
            <img
              src="https://fast.wistia.com/embed/medias/faliwbcnei/swatch"
              style={{
                filter: 'blur(5px)',
                height: '100%',
                objectFit: 'contain',
                width: '100%',
              }}
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
