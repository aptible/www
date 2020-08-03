import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Webinar.module.css';
import ContentfulRichText from '../contentful/ContentfulRichText';
import WebinarForm from './WebinarForm';
import WistiaVideo from '../shared/WistiaVideo';

export default ({ webinar }) => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.headlines}>
        <h5>Aptible Webinar</h5>
        <h1>{webinar.title}</h1>
        <h2>{webinar.subheadline}</h2>
      </div>

      <div className={styles.body}>
        <p>
          {webinar.webinarDate}
          {webinar.webinarTime
            ? `, ${webinar.webinarTime} ${webinar.webinarTimeZone}`
            : ''}
        </p>

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

        {webinar.wistiaVideoId &&
          <React.Fragment>
            <h3 style={{ padding: '30px 0' }}>Video</h3>
            <WistiaVideo videoId={webinar.wistiaVideoId} />
          </React.Fragment>
        }

        {webinar.transcript &&
          <React.Fragment>
            <h3 style={{ padding: '60px 0 30px 0' }}>Transcript</h3>
            <ContentfulRichText json={webinar.transcript.json} />
          </React.Fragment>
        }
      </div>

      {!webinar.wistiaVideoId &&
        <div className={styles.form}>
          <WebinarForm
            formId={webinar.marketoFormId}
            optInTextOverride={webinar.formOptInOverride}
          />
        </div>
      }
    </Grid>
  </div>
);
