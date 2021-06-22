import React from 'react';
import styles from './HeroArrow.module.css';

export default () => (
  <div className={styles.arrow}>
    <svg
      width="208px"
      height="95px"
      viewBox="0 0 208 95"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Arrow" transform="translate(0.000000, -0.638672)">
          <path
            className={styles.arrowStroke}
            id="Bottom"
            stroke="#33C69F"
            strokeWidth="8"
            transform="translate(98.830566, 70.069336) scale(1, -1) translate(-98.830566, -70.069336) "
            d="M0 92.1386719 197.661133 92.1386719 157.87207 48"
          />
          <path
            className={styles.arrowStroke}
            id="Top"
            stroke="#33C69F"
            strokeWidth="8"
            d="M0 48.1386719 197.661133 48.1386719 157.87207 4"
          />
          <g id="Masks" transform="translate(153.000000, 0.638672)">
            <rect
              id="Rectangle"
              fill="#0A1B2B"
              x="0"
              y="0"
              width="13"
              height="6"
            />
            <rect
              id="Rectangle"
              fill="#0A1B2B"
              x="0"
              y="89"
              width="13"
              height="6"
            />
            <polygon
              id="Path"
              fill="#0A1B28"
              points="42.0074463 38.6011353 50.5665283 48.0714722 54.5449219 43.0553589"
            />
            <polygon
              id="Path-2"
              fill="#0A1B28"
              points="43.1704102 55.0050049 50.4371948 46.9233398 54.5449219 51.7026978"
            />
          </g>
        </g>
      </g>
    </svg>
  </div>
);
