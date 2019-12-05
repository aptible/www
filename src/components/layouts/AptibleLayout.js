import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import CookieConsent from '../shared/CookieConsent';
import Analytics from '../shared/Analytics';

export default ({ children }) => (
  <div>
    <Header />
    <CookieConsent />
    {children}
    <Footer />
    <Analytics />
  </div>
);
