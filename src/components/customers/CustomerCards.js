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
            <Card customer="pathAI" />
            <Card customer="healthify" />
            <Card customer="glidianInc" />
            <Card customer="vidscrip" />
            <Card customer="aidin" />
            <Card customer="projectBeacon" />
          </div>

          <div className={styles.right}>
            <Card customer="mdsave" />
            <Card customer="quadpay" />
            <Card customer="healthCatalyst" />
            <Card customer="medicalMemory" />
            <Card customer="rightwayHealthcare" />
            <Card customer="pager" />
          </div>
        </Grid>
      </div>
    );
  }
}

export default CustomerCards;
