import React from 'react';
import styles from './Hero.module.css';
import { Grid } from '../grid/Grid';
import SignupButton from '../signup/SignupButton';
import badges from '../../images/comply/badges.svg';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.heading}>
        <h5>Aptible Comply</h5>
        <h1 className="hero">
          Close deals faster and automate compliance work
        </h1>
      </div>

      <div className={styles.content}>
        <p className="XL">
          Aptible Comply is a customer trust system that helps B2B SaaS teams
          shorten sales cycles and eliminate the manual work of compliance.
        </p>

        <div className={styles.cta}>
          <SignupButton text="Get a demo" product="comply" />
        </div>
      </div>

      <div className={styles.badges}>
        <p>Automated compliance for ISO 27001, SOC 2, GDPR, HIPAA, and more.</p>
        <img src={badges} alt="" />
      </div>

      <div className={styles.arrows}>
        <div className={styles.without}>
          <p>Your sales cycle without Comply</p>
          <svg
            width="455"
            height="7"
            viewBox="0 0 455 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M444.134 0.395996L446.19 2.99996L8.0414 3L10.0966 0.396067L0.134361 3.38552H0.134278L0.134319 3.38553L0.134277 3.38555H0.134361L10.0966 6.375L8.22209 4L446.009 3.99996L444.134 6.37493L454.097 3.38547L444.134 0.395996Z" />
          </svg>
        </div>

        <div className={styles.with}>
          <p>Your sales cycle with Comply</p>
          <svg
            width="97"
            height="7"
            viewBox="0 0 97 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M87 0.395996L89.0553 3.00001L7.90859 3L9.96378 0.396067L0.00154827 3.38552H0.00147342L0.00151084 3.38553L0.00146484 3.38555H0.00155685L9.96379 6.375L8.08928 4L88.8745 4.00001L87 6.37493L96.9623 3.38547L96.9622 3.38545L87 0.395996Z" />
          </svg>
        </div>
      </div>
    </Grid>
  </div>
);
