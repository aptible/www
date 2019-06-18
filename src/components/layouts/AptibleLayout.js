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
      id="2019-series-a"
      to="/blog/announcing-aptible-12-million-series-a-funding/"
      callout="Big News!"
      text="Announcing Aptible’s $12 million Series A funding. Read more." />
    <Header />
    <CookieConsent />
    {children}
    <Footer />
    <GridLinesBackground />
    <Analytics />
  </div>
);
