import React, { useEffect } from 'react';

import Portal from '../shared/Portal';
import styles from './modal.module.css';

export default ({ children }) => {
  // we need to disable scrolling when the modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Portal>
      <div className={styles.modal}>{children}</div>
    </Portal>
  );
};

export const ModalView = ({ children }) => {
  return <div className={styles.view}>{children}</div>;
};
