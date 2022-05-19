import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import HelloBar from '../shared/HelloBar';
import CookieConsent from '../shared/CookieConsent';
import Analytics from '../shared/Analytics';

const AptibleLayout = ({ children }) => (
  <>
    <HelloBar
      id="heroku-comparison"
      to="/heroku-alternative/"
      callout="Heroku Customers"
      text="It's worth migrating to Aptible. Compare key features."
    />
    <Header />
    <CookieConsent />
    {children}
    <Footer />
    <Analytics />
  </>
);

export default AptibleLayout;
