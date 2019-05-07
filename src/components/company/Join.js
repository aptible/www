import React from 'react';
import { Grid, Row } from '../grid/Grid';
import styles from './Join.module.css';
import ArrowButton from '../buttons/ArrowButton';

export default () => (
  <div className={styles.container}>
    <Grid>
      <Row>
        <h5>Join the Team</h5>
        <h1>Help us build the future of<br /> privacy and security on the web.</h1>
        <p className="L">
          Try to incorporate the notion of the "tribe", concepts around
          empowerment and wayfinding, and an energy around the impending
          growth without explicity saying these. Focus content on what's in it
          for the potential employee, and how they'll benefit from being part of
          this team.
        </p>
        <ArrowButton to="/" text="See Job Openings" />
      </Row>
    </Grid>
  </div>
);
