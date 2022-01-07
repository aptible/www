import React from 'react';
import { Link } from 'gatsby';
import styles from './TrainingCard.module.css';
import training from '../../data/training.json';
import { titleize } from './helpers';

export default ({ course }) => {
  const LinkContent = () => (
    <div className={styles.card}>
      <h5>{titleize(course)}</h5>
      <p>{training[course].description}</p>

      <div className={styles.readMore}>
        <p>View Course</p>
      </div>
    </div>
  );

  // Culture & security starts with objectives, not introduction
  const slug = course === 'culture-and-security' ? 'objectives' : 'introduction';

  return (
    <Link to={`/training/${course}/${slug}/`} className={styles.container}>
      <LinkContent />
    </Link>
  );
};
