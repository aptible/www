import React from 'react';
import { Grid } from '../../grid/Grid';
import styles from './SellFaster.module.css';
import screenshot from '../../../images/comply/rooms/sell-faster.svg';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.content}>
        <h1>Use compliance to sell faster</h1>
        <p className="XL">
          Aptible Comply gives customers a self-service portal where they can
          sign an NDA and view or download the documents normally requested in
          the buying process.
        </p>
        <p className="XL">
          Comply eliminates deal delays introduced by waiting on sales,
          security, legal, and engineering to create and answer Jira tickets,
          sign NDAs, and watermark reports.
        </p>
        <p className="XL">
          Automated e-signing of NDAs, report watermarking, document versioning,
          and update pushes simplify the distribution process.
        </p>

        <div className={styles.screenshot}>
          <img src={screenshot} alt="" />
        </div>

        <p className="XL">
          Give customers the ability to instantly access the confidential
          security documentation they need to buy your service.
        </p>
        <p className="XL">
          Streamline the manual processes of providing security documentation.
          Eliminate the back and forth between security, legal, and sales. Save
          your team a ton of time and close deals faster.
        </p>
      </div>

      <div className={styles.boxes}>
        <div className={styles.box}>
          <h6>Secure Self-Serve Access</h6>
          <p>
            Get your security and compliance documents into prospects’ hands
            quicker without sacrificing security
          </p>
        </div>
        <div className={styles.box}>
          <h6>Clickwrap or DocuSign NDAs</h6>
          <p>
            Customers can sign the NDA right in the Room so that sales isn’t
            slowed down by security processes
          </p>
        </div>
        <div className={styles.box}>
          <h6>Automatic Watermark</h6>
          <p>
            Each document is automatically watermarked upon download, preventing
            engineering interruptions
          </p>
        </div>

        <div className={styles.box}>
          <h6>Document Audit Log</h6>
          <p>Record every authorization and access of your docs</p>
        </div>
        <div className={styles.box}>
          <h6>Document Management</h6>
          <p>Upload, Password Protect, Version, and Tag your documents</p>
        </div>
        <div className={styles.box}>
          <h6>Push Updates to Customers</h6>
          <p>Streamline renewals by pushing compliance updates to customers</p>
        </div>

        <div className={styles.box}>
          <h6>Invite Sales Prospects</h6>
          <p>
            Easily invite from Salesforce. Share your documentation with
            prospects with a single click
          </p>
        </div>
      </div>
    </Grid>
  </div>
);
