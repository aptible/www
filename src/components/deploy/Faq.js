import React from 'react';
import styles from './Faq.module.css';

const Question = ({ title, question }) => {
  return (
    <div className={styles.question}>
      <h6 className="">{title}</h6>
      {question}
    </div>
  );
};

export default ({ title = 'Frequently Asked Questions', questions }) => (
  <div>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.questions}>
      {questions.map((q, idx) => (
        <Question {...q} key={idx} />
      ))}
    </div>
  </div>
);
