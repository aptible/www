import React from 'react';
import Container from '../container/Container';
import styles from './Blocks.module.css';

const Blocks = ({ blocks }) => (
  <Container>
    <div className={styles.blocks}>
      {blocks.map(block => (
        <div className={styles.block} key={block.title}>
          <h5>{block.title}</h5>
          <p>{block.body}</p>
        </div>
      ))}
    </div>
  </Container>
);

export default Blocks;
