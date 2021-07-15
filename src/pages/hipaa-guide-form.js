import React from 'react';
import { Helmet } from 'react-helmet';

import LeadForm from './p/components/LeadForm';

import AptibleLayout from '../components/layouts/AptibleLayout';
import styles from './hipaa-guide-form.module.css';

export default () => {
  return (
    <AptibleLayout>
      <Helmet>
        <title>Aptible | HIPAA Guide</title>
        <meta name="description" content="Something something darkside ..." />
      </Helmet>
      <div className={styles.container}>
        <LeadForm
          id="hipaa-guide"
          btnText="View our HIPAA Guide!"
          successText="Thanks!  Redirecting to our HIPAA guide"
          onSuccess={() => {
            window.location.href = `${window.location.origin}/hipaa/`;
          }}
        />
      </div>
    </AptibleLayout>
  );
};
