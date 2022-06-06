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
            <Card customer="hims_hers" />
            <Card customer="ableHealth" />
            <Card customer="pathAI" />
            <Card customer="stellar" />
            <Card customer="healthify" />
            <Card customer="dorsata" />
            <Card customer="glidianInc" />
            <Card customer="vidscrip" />
            <Card customer="aidin" />
          </div>

          <div className={styles.right}>
            <Card customer="projectBeacon" />
            <Card customer="careport" />
            <Card customer="greenspace" />
            <Card customer="mdsave" />
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
