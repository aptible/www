import React from 'react';
import { Grid } from '../../grid/Grid';
import styles from './Hero.module.css';
import Button from '../../buttons/Button';
import screenshot from '../../../images/comply/rooms/screenshot.svg';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.content}>
        <h5>Aptible Comply</h5>
        <h1 className="hero">
          Sell faster and smarter with compliance datarooms
        </h1>

        <p className="XL">
          Aptible Comply Rooms is a <strong>free</strong> dataroom solution for
          B2B SaaS teams who need to close deals quicker by delivering
          confidential security documentation to customers more efficiently.
        </p>

        <Button href="https://comply-grc.aptible.com/signup?context=rooms">
          Sign up for free
        </Button>
      </div>

      <div className={styles.screenshot}>
        <img src={screenshot} alt="" />
      </div>
    </Grid>
  </div>
);
