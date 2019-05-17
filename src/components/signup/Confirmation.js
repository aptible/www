import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Confirmation.module.css';
import done from '../../images/signup/done.svg';
import salesPhoto from '../../images/company/team/elyssa.jpg';
import teamIcon from '../../images/team-member.svg';
import Button from '../buttons/Button';

export default () => (
  <div className={styles.container}>
    <img src={done} alt="Checkmark" className={styles.checkmark} />
    <h1>Thanks, your meeting is scheduled with&hellip;</h1>

    <Grid>
      <div className={styles.meetingDetails}>

        <div className={styles.person}>
          <div className={styles.photoContainer}>
            <img src={salesPhoto} className={styles.photo} alt="Meeting with" />
            <img src={teamIcon} className={styles.icon} alt="Aptible team member" />
          </div>

          <h4>Elyssa Cendana</h4>

          <p className="L">
            Your meeting is scheduled for Friday, May 17th, at 4pm EST.
          </p>
        </div>
        
        <div className={styles.questionsContainer}>
          <h2>Just a few more questions in preparation for your call&hellip;</h2>

          <div className={styles.questions}>
            <div className={styles.name}>
              <input type="text" placeholder="Your Name" />
            </div>

            <div className={styles.role}>
              <input type="text" placeholder="Your Role" />
            </div>

            <div className={styles.protocol}>
              <input type="text" placeholder="Which protocol(s) are you targeting?" />
            </div>

            <div className={styles.submit}>
              <Button to="/">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  </div>
);
