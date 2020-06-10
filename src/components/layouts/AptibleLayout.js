import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import HelloBar from '../shared/HelloBar';
import CookieConsent from '../shared/CookieConsent';
import Analytics from '../shared/Analytics';

export default ({ children }) => (
  <div>
    <HelloBar
      id="comply-rooms"
      to="/blog/turn-compliance-into-customer-trust/"
      callout="Just Launched"
      text="Comply Rooms: Turn compliance into customer trust with compliance datarooms"
    />
    <Header />
    <CookieConsent />
    {children}
    <Footer />
    <Analytics />
  </div>
);
