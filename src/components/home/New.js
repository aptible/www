import React from 'react';
import Hero from './Hero';
import styles from './New.module.css';

export const Home = () => {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
};
