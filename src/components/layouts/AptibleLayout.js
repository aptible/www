import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import HelloBar from '../shared/HelloBar';
import CookieConsent from '../shared/CookieConsent';
import Analytics from '../shared/Analytics';

const AptibleLayout = ({ children }) => (
  <>
    <HelloBar
      id="hitrust-now-available"
      to="/comply/signup/"
      text="Now Available in Comply: HITRUST. Contact Us to learn more"
    />
    <Header />
    <CookieConsent />
    {children}
    <Footer />
    <Analytics />
  </>
);

export default AptibleLayout;
