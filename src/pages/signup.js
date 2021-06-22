import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import SignupPage from '../components/signup/SignupPage';

export default () => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible | Sign Up</title>
      <meta
        name="description"
        content="Aptible is the leading security management platform for small companies. Grow by meeting security requirements for SOC 2, ISO 27001, HIPAA, GDPR, and more."
      />
    </Helmet>
    <SignupPage />
  </AptibleLayout>
);
