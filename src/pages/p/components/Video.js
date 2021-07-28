import React from 'react';
import { Helmet } from 'react-helmet';
import styles from '../VideoLandingPage.module.css';
export default () => {
  return (
    <div className={styles.video}>
      <Helmet>
        <script
          src="https://fast.wistia.com/embed/medias/faliwbcnei.jsonp"
          async
        />
        <script src="https://fast.wistia.com/assets/external/E-v1.js" async />
      </Helmet>

      {/* The below snippet is the unaltered Wistia responsive embed code */}
      <div
        className="wistia_responsive_padding"
        style={{ padding: '56.25% 0 0 0', position: 'relative' }}
      >
        <div
          className="wistia_responsive_wrapper"
          style={{
            height: '100%',
            left: 0,
            position: 'absolute',
            top: 0,
            width: '100%',
          }}
        >
          <div
            className="wistia_embed wistia_async_faliwbcnei videoFoam=true"
            style={{ height: '100%', position: 'relative', width: '100%' }}
          >
            <div
              className="wistia_swatch"
              style={{
                height: '100%',
                left: 0,
                opacity: 1,
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
    </div>
  );
};
