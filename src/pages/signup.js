import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Signup from '../components/signup/Signup';

function redirectHome() {
  window.location = '/';
}

export default () => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible | Signup</title>
      <meta name="description" content="Aptible is the leading security management platform for small companies. Grow by meeting security requirements for SOC 2, ISO 27001, HIPAA, GDPR, and more." />
    </Helmet>
    <Signup closeFn={redirectHome} />
  </AptibleLayout>
);
