import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import GridLinesBackground from '../grid/GridLinesBackground';

export default ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
    <GridLinesBackground />
  </div>
);
