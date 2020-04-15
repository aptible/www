import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import HelloBar from '../shared/HelloBar';
import CookieConsent from '../shared/CookieConsent';
import Analytics from '../shared/Analytics';

export default ({ children }) => (
  <div>
    <HelloBar
      id="blog-aptible-response-to-covid-19"
      to="/blog/aptible-response-to-covid-19/"
      callout="New Blog Post"
      text="Learn more about how we are supporting customers during COVID-19"
    />
    <Header />
    <CookieConsent />
    {children}
    <Footer />
    <Analytics />
  </div>
);
