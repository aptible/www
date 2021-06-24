import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import HelloBar from '../shared/HelloBar';
import CookieConsent from '../shared/CookieConsent';
import Analytics from '../shared/Analytics';

const AptibleLayout = ({ children }) => (
  <>
    <HelloBar
      id="blog-greater-focus-on-deploy-as-comply-becomes-conveyor"
      to="/blog/greater-focus-on-deploy-as-comply-becomes-conveyor/"
      callout="Announcement"
      text="Aptible Comply is now Conveyor. Click here to learn more."
    />
    <Header />
    <CookieConsent />
    {children}
    <Footer />
    <Analytics />
  </>
);

export default AptibleLayout;
