import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './TrainingCards.module.css';
import TrainingCard from './TrainingCard';

const TrainingCards = ({ training }) => {
  const courses = Object.keys(training);
  const halfwayThrough = Math.floor(courses.length / 2);
  const leftTraining = courses.slice(0, halfwayThrough);
  const rightTraining = courses.slice(halfwayThrough, courses.length);

  return (
    <div className={styles.container}>
      <Grid>
        <div className={styles.left}>
          {leftTraining.map(course => (
            <TrainingCard key={course} course={course} />
          ))}
        </div>

        <div className={styles.right}>
          {rightTraining.map(course => (
            <TrainingCard key={course} course={course} />
          ))}
        </div>
      </Grid>
    </div>
  );
};

export default TrainingCards;
