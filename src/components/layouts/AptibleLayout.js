import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import HelloBar from '../shared/HelloBar';
import CookieConsent from '../shared/CookieConsent';
import Analytics from '../shared/Analytics';

const AptibleLayout = ({ children }) => (
  <>
    <HelloBar
      id="p-2021-year-in-review"
      to="/p/2021-year-in-review"
      callout="2021 Year in Review"
      text="Watch Aptible CEO, Frank Macreery, review highlights from 2021 and preview what's coming in 2022."
    />
    <Header />
    <CookieConsent />
    {children}
    <Footer />
    <Analytics />
  </>
);

export default AptibleLayout;
