import React from 'react';
import { Grid } from '../grid/Grid';
import { Link } from 'gatsby';
import styles from './Nav.module.css';
import SignupButton from '../signup/SignupButton';

export default ({ items, ctaText }) => (
  <div className={styles.container}>
    <Grid>
      <div className={`${styles.navItems} ${ctaText ? '' : styles.noCta}`}>
        {items.map((item, idx) => {
          return (
            <Link key={idx} to="/" className={idx === 0 ? styles.active : ''}>
              <h6 className="small">{item.title}</h6>
              <div className={styles.circle} />
            </Link>
          );
        })}
      </div>

      {ctaText && (
        <div className={styles.cta}>
          <SignupButton text={ctaText} />
        </div>
      )}
    </Grid>
  </div>
);
