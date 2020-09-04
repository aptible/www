import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import HelloBar from '../shared/HelloBar';
import CookieConsent from '../shared/CookieConsent';
import Analytics from '../shared/Analytics';

const AptibleLayout = ({ children }) => (
  <>
    <HelloBar
      id="webinars-a-new-era-for-evidence-collection"
      to="/webinars/a-new-era-for-evidence-collection/"
      callout="Upcoming"
      text="September 22nd: Learn how automated evidence collection can streamline audit preparation"
    />
    <Header />
    <CookieConsent />
    {children}
    <Footer />
    <Analytics />
  </>
);

export default AptibleLayout;
