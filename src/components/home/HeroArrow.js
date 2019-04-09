import React from 'react';
import styles from './HeroArrow.module.css';

export default () => (
  <div className={styles.arrow}>
    <svg width="427px" height="364px" viewBox="0 0 427 364" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Group" transform="translate(0.410156, 5.769263)">
          <path className={styles.arrowStroke} d="M-2.84217094e-14,0 L261.589844,0.00222185648 C293.173177,1.98659686 319.49349,13.6662844 340.550781,35.0412844 C361.608073,56.4162844 373.034505,82.1747479 374.830078,112.316675 L374.830078,346.023706 L327.412598,299.740991" id="Arrow-Left" stroke="#33C69F" strokeWidth="10"></path>
          <path className={styles.arrowStroke} d="M2.84217094e-14,0 L261.589844,0.00222185648 C293.173177,1.98659686 319.49349,13.6662844 340.550781,35.0412844 C361.608073,56.4162844 373.034505,82.1747479 374.830078,112.316675 L374.830078,346.023706 L422.446777,299.730737" id="Arrow-Right" stroke="#33C69F" strokeWidth="10" strokeLinejoin="bevel"></path>
          <rect id="Rectangle" fill="#0A1B2B" transform="translate(380.005182, 352.850297) rotate(-44.000000) translate(-380.005182, -352.850297) " x="376.005182" y="349.350297" width="8" height="7"></rect>
          <rect id="Rectangle" fill="#0A1B2B" x="323.589844" y="295.230737" width="8" height="17"></rect>
          <rect id="Rectangle" fill="#0A1B2B" x="418.589844" y="295.230737" width="8" height="17"></rect>
        </g>
      </g>
    </svg>
  </div>
);
