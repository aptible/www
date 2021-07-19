import React, { useEffect } from 'react';

import styles from './modal.module.css';

export default ({ children }) => {
  // we need to disable scrolling when the modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return <div className={styles.modalContainer}>{children}</div>;
};

export const ModalView = ({ children }) => {
  return <div className={styles.view}>{children}</div>;
};
