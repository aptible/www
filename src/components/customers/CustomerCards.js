import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './CustomerCards.module.css';
import Card from '../shared/Card';

class CustomerCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.container}>
        <Grid>
          <div className={styles.left}>
            <Card customer="ableHealth" />
            <Card customer="atrium" />
            <Card customer="vergesense" />
            <Card customer="snaps" />
            <Card customer="pathAI" />
          </div>

          <div className={styles.right}>
            <Card customer="fortmatic" />
            <Card customer="mdsave" />
            <Card customer="virta" />
            <Card customer="healthify" />
          </div>
        </Grid>
      </div>
    )
  }
}

export default CustomerCards;
