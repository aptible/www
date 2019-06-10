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
      to="/blog/"
      callout="Big News!"
      text="We've launched our new brand and are excited to announce our series A! Read more." />
    <Header />
    <CookieConsent />
    {children}
    <Footer />
    <GridLinesBackground />
    <Analytics />
  </div>
);
