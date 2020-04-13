import React from 'react';
import { Grid } from '../../grid/Grid';
import styles from './WithoutComply.module.css';
import screenshot from '../../../images/comply/open-rooms/with-comply.svg';
import vector from '../../../images/comply/open-rooms/with-comply-vector.svg';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.content}>
        <h5>Without Comply</h5>
        <h1>
          The challenge of building trust and sharing security documentation in
          B2B SaaS
        </h1>

        <div className={styles.grid}>
          <div className={styles.text}>
            <p>
              Companies that pursue compliance programs like SOC 2 and ISO 27001
              need to distribute that documentation to their sales prospects in a
              secure, confidential way.
            </p>
            <p>
              Distribution processes like getting an NDA in place, watermarking
              reports, and creating an audit record of distribution are fragmented
              across sales, security, legal, and CS, and systems like Docusign,
              email, Jira, and SFDC. 
            </p>
            <p>
              Each manual step needed to fulfill a request slows down the sales
              cycle.
            </p>
          </div>
          <div className={styles.screenshot}>
            <img src={screenshot} alt="" />
            <img className={styles.vector} src={vector} alt="" />
          </div>
        </div>
      </div>

      <div className={styles.boxes}>
        <div className={styles.box}>
          <h5>Waiting on manual work across systems and tools</h5>
          <p>
            Waiting on other team members to do things like answer support
            tickets, sign NDAs, and watermark SOC 2 reports.
          </p>
          <p>
            Every customer request is slowed down by the need to be answered,
            recorded, relayed and fulfilled by a team member.
          </p>
          <p>
            Passing NDAs and watermarked reports back and forth between sales,
            security, legal, and engineering.
          </p>
          <p>
            Working across multiple, fragmented systems like email,
            spreadsheets, Jira tickets, Salesforce, DocusSign etc to get info to
            prospects.
          </p>
        </div>

        <div className={styles.box}>
          <h5>No Engagement Metrics</h5>
          <p>
            There are no metrics around engagement. You don’t have any
            visibility into how your compliance program is affecting your
            business at the customer or deal level.
          </p>
        </div>
      </div>
    </Grid>
  </div>
);
