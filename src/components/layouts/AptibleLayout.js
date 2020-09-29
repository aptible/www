import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import HelloBar from '../shared/HelloBar';
import CookieConsent from '../shared/CookieConsent';
import Analytics from '../shared/Analytics';

const AptibleLayout = ({ children }) => (
  <>
    <HelloBar
      id="webinars-make-audits-simple-smooth-and-effective"
      to="/webinars/make-audits-simple-smooth-and-effective/"
      callout="Upcoming"
      text="October 27th: Achieve simple, smooth audits with automations & integrations"
    />
    <Header />
    <CookieConsent />
    {children}
    <Footer />
    <Analytics />
  </>
);

export default AptibleLayout;
