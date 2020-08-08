import React from 'react';
import Header from '../header/Header';

export default ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);
 