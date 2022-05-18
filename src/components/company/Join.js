import React from 'react';
import { Grid, Row } from '../grid/Grid';
import styles from './Join.module.css';
import ArrowButton from '../buttons/ArrowButton';

export default () => (
  <div className={styles.container} id="careers">
    <Grid>
      <Row>
        <h5>Join the Team</h5>
        <h2>
          Want to help build out the platform that makes it possible to use any cloud infrastructure securely?
          <br />
          Join us.
        </h2>
        <ArrowButton to="/careers/" text="See Careers at Aptible" />
      </Row>
    </Grid>
  </div>
);
