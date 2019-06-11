import React from 'react';
import { Link } from 'gatsby';
import styles from './ResourcesLinks.module.css';

export default () => (
  <div className={styles.container}>
    <div className={styles.documentation}>
      <Link to="/documentation/index.html">Documentation</Link>
      <Link to="/documentation/comply.html" className={styles.subLink}>Comply</Link>
      <Link to="/documentation/deploy.html" className={styles.subLink}>Deploy</Link>
      <Link to="/support/toolbelt/" className={styles.subLink}>CLI</Link>
    </div>
    <div className={styles.blog}>
      <Link to="/blog/">Blog</Link>
      <Link to="/changelog/" className={styles.subLink}>Product Updates</Link>
      <Link to="/blog/category/webinars/" className={styles.subLink}>Webinar Recap</Link>
      <Link to="/blog/category/company/" className={styles.subLink}>Company Updates</Link>
    </div>
    <div className={styles.guides}>
      <h6 className="small">Compliance Guides</h6>
      <Link to="/hipaa/">HIPAA</Link>
      <Link to="/gdpr/articles/1-subject-matter-objectives/">GDPR</Link>
    </div>
    <div className={styles.support}>
      <h6 className="small">Support</h6>
      <a href="https://aptible.zendesk.com/hc/en-us/requests/new" target="_blank" rel="noopener noreferrer">Open a Ticket</a>
      <a href="https://status.aptible.com/" target="_blank" rel="noopener noreferrer">Status</a>
    </div>
  </div>
);
