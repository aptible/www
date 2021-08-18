import React from 'react';
import * as queryString from 'query-string';
import { useFormCompletion } from '../../hooks/use-form-completion';
import pic from '../../images/security-management/sm1.jpg';
import { querystring } from '../../lib/util';
import LeadForm from '../lead-form';
import Modal, { ModalView } from '../modal';

import styles from './hipaa.module.css';

export default () => {
  const queryParams = queryString.parse(querystring());
  const bypass = !!queryParams.bypass;
  const { completed, onComplete } = useFormCompletion('hipaa-guide');
  if (completed || bypass) return null;

  return (
    <Modal>
      <ModalView>
        <img
          src={pic}
          className={styles.img}
          alt="security is eating the world"
        />
        <div className={styles.modal}>
          <h3 className={styles.title}>
            HIPAA Compliance: The Guide for Startups
          </h3>

          <div className={styles.formContainer}>
            <LeadForm
              id="hipaa-guide"
              btnText="Get the Guide"
              successText="Thanks!  Redirecting to our HIPAA guide"
              onSuccess={onComplete}
            />
          </div>

          <p className={styles.text}>
            Explosive growth in digital health over the last few years means
            there are many developers and managers who haven’t worked under
            HIPAA before. This guide is written for startups (and small
            businesses operating online) who could use some help with the basics
            of HIPAA compliance.
          </p>
        </div>
      </ModalView>
    </Modal>
  );
};
