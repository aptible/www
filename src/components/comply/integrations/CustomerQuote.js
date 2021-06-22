import React from 'react';
import styles from './CustomerQuote.module.css';

export default ({ customerQuote }) => {
  const {
    quote,
    customerName: name,
    customerJobTitle: jobTitle,
    customerCompany: company,
    customerPhoto: photo,
  } = customerQuote;
  return (
    <div className={styles.container}>
      {photo && (
        <div className={styles.photo}>
          <img src={photo.file.url} alt="" />
        </div>
      )}
      <div>
        <p className={styles.quote}>“{quote.quote}”</p>
        <div className={styles.citation}>
          <div>
            {name}, {jobTitle}
          </div>
          <div className={styles.company}>{company}</div>
        </div>
      </div>
    </div>
  );
};
