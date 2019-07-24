import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Webinar.module.css';
import ContentfulRichText from '../contentful/ContentfulRichText';
import WebinarForm from './WebinarForm';

export default ({ webinar }) => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.headlines}>
        <h5>Aptible Webinar</h5>
        <h1>{webinar.title}</h1>
        <h2>{webinar.subheadline}</h2>
      </div>

      <div className={styles.body}>
        <ContentfulRichText json={webinar.body.json} />

        <h3 style={{ paddingTop: '30px' }}>Presented By</h3>
        <div className={styles.presenter}>
          <img src={webinar.presenter1.professionalPhoto.file.url} alt={webinar.presenter1.name} />
          <h5>{webinar.presenter1.name}</h5>
          <p>{webinar.presenter1.jobTitle}</p>
        </div>
        
        {webinar.presenter2 &&
          <div className={styles.presenter}>
            <img src={webinar.presenter2.professionalPhoto.file.url} alt={webinar.presenter2.name} />
            <h5>{webinar.presenter2.name}</h5>
            <p>{webinar.presenter2.jobTitle}</p>
          </div>
        }
      </div>

      <div className={styles.form}>
        <WebinarForm formId={webinar.marketoFormId} />
      </div>
    </Grid>
  </div>
);
