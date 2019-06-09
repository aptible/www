import React from 'react';
import styles from './Customers.module.css';
import CustomerCarousel from '../customers/CustomerCarousel';

export default () => (
  <div className={styles.customers}>
    <CustomerCarousel linkToCustomers="true" />
  </div>
);
