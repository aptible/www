import React from 'react';
import withoutComplyIllustration from '../../../images/comply/without-comply-illustration.svg';
import { Grid } from '../../grid/Grid';
import styles from './WithoutComply.module.css';

const data = [
  {
    heading: 'Data Everywhere',
    copy: (
      <>
        <p className="M">
          Today, companies rely on an ever-growing stack of SaaS vendors. With
          cloud infrastructure, you don't use one server, but hundreds or
          thousands.
        </p>
        <p className="M">
          Actually keeping track of the compliance status of each asset, device,
          and person is an exercise in frustration.
        </p>
      </>
    ),
  },
  {
    heading: 'Manual Work',
    copy: (
      <>
        <p className="M">
          The list of manual compliance checks is never-ending: Access control
          reviews, 2FA enrollment status, MDM configuration, branch
          protection&hellip;
        </p>
        <p className="M">
          These compliance checks happen ad hoc, across spreadsheets, calendar
          invites, and project management tools. You know you still make
          mistakes, despite spending hours trying to keep up.
        </p>
      </>
    ),
  },
  {
    heading: 'Lack of Control',
    copy: (
      <>
        <p className="M">
          Your organization moves fast. Marketing and sales seem to adopt new
          tools almost every day, and your engineering team is creating new
          repos and launching new services regularly.
        </p>
        <p className="M">
          As your company changes, you're forced to choose between adding a
          layer of security overhead that slows growth -or- risk being unaware
          of changes in security posture.
        </p>
      </>
    ),
  },
];

export default () => (
  <div className={styles.container} id="without-comply">
    <Grid>
      <div className={styles.intro}>
        <h5>Without Comply</h5>
        <h2 className="h1">
          The challenge of operating a security program in B2B SaaS
        </h2>

        <p className="XL">
          The proliferation of data collected and systems used by every B2B SaaS
          company introduces challenges in organizing, managing, and scaling
          security and compliance workflows.
        </p>
      </div>
    </Grid>

    <div className={styles.illustration}>
      <img src={withoutComplyIllustration} alt="" />
    </div>

    <Grid>
      <div className={styles.blocks}>
        {data.map(block => (
          <div className={styles.blocksCard} key={block.heading}>
            <div className={styles.beacon} />
            <h6>{block.heading}</h6>
            {block.copy}
          </div>
        ))}
      </div>
    </Grid>
  </div>
);
