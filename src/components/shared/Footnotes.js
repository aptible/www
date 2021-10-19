import React from 'react';
import styles from './Footnotes.module.css';

export const FootnoteMarker = ({ children }) => (
  <sup className={styles.footnoteMarker}>{children}</sup>
);

const Footnotes = ({ footnotes }) => {
  return (
  <div className={styles.footnotes}>
    { footnotes.map(footnote => (
      <div className={styles.footnote} key={footnote.marker}>
        <FootnoteMarker>{footnote.marker}</FootnoteMarker>
        <div>{footnote.note}</div>
      </div>
    ))}
  </div>
  )
};

export default Footnotes;
