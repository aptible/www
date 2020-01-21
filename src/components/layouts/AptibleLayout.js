import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import HelloBar from '../shared/HelloBar';
import CookieConsent from '../shared/CookieConsent';
import Analytics from '../shared/Analytics';

export default ({ children }) => (
  <div>
    <HelloBar
      id="blog-what-is-security-management"
      to="/blog/what-is-security-management/"
      callout="New Blog Post"
      text="Intro to Security Management: Learn about about Security Management, its importance, and how it can benefit your business."
    />
    <Header />
    <CookieConsent />
    {children}
    <Footer />
    <Analytics />
  </div>
);
