import React from 'react';
import { Grid, Row } from '../grid/Grid';
import styles from './Join.module.css';
import ArrowButton from '../buttons/ArrowButton';

export default () => (
  <div className={styles.container}>
    <Grid>
      <Row>
        <h5>Join the Team</h5>
        <h2>
          We’re solving a fundamental problem for the future of the economy.
          We’re going to need some help.
        </h2>
        <p className="L">
          You’ll be joining a team dedicated to making a difference, and that
          dedication has become the cornerstone of our culture. We believe that
          culture isn’t free food and foosball tables, it’s a group of people
          working toward a common goal; dedicated to helping each other grow,
          find new ways to solve complex problems, and have a little fun along
          the way. As part of our team, you’ll have a huge impact, not just on
          the product or the people, but on the future of the field.
        </p>
        <ArrowButton to="/" text="View Openings" />
      </Row>
    </Grid>
  </div>
);
