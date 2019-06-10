import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import GridLinesBackground from '../grid/GridLinesBackground';
import HelloBar from '../shared/HelloBar';
import CookieConsent from '../shared/CookieConsent';
import Analytics from '../shared/Analytics';

export default ({ children }) => (
  <div>
    <HelloBar
      id="2019-relaunch"
      to="/blog/introducing-new-brand-identity/"
      callout="Big News!"
      text="Things look a little different around here. Announcing the new Aptible brand identity. Get all the details." />
    <Header />
    <CookieConsent />
    {children}
    <Footer />
    <GridLinesBackground />
    <Analytics />
  </div>
);
