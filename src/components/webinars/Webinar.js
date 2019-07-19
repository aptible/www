import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Webinar.module.css';
import ContentfulRichText from '../contentful/ContentfulRichText';
import WebinarForm from './WebinarForm';

export default ({ webinar }) => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.headlines}>
        <h1>{webinar.title}</h1>
        <h2>{webinar.subheadline}</h2>
      </div>

      <div className={styles.body}>
        <ContentfulRichText json={webinar.body.json} />
      </div>

      <div className={styles.form}>
        <WebinarForm formId={webinar.marketoFormId} />
      </div>
    </Grid>
  </div>
);
