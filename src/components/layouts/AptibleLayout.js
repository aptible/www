import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import HelloBar from '../shared/HelloBar';
import CookieConsent from '../shared/CookieConsent';
import Analytics from '../shared/Analytics';

export default ({ children }) => (
  <div>
    <HelloBar
      id="comply-integrations"
      to="/comply/integrations/"
      callout="Just Launched"
      text="Comply Integrations: Integrate with all of your SaaS services to automate compliance tasks"
    />
    <Header />
    <CookieConsent />
    {children}
    <Footer />
    <Analytics />
  </div>
);
 