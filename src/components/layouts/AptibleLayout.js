import React from 'react';
import Header from '../header/Header';
import GridLinesBackground from '../grid/GridLinesBackground';

export default ({ children }) => (
  <div>
    <Header />
    {children}
    <GridLinesBackground />
  </div>
);
