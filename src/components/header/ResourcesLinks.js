import React from 'react';
import { Link } from 'gatsby';
import styles from './ResourcesLinks.module.css';

export default () => (
  <div className={styles.container}>
    <div className={styles.column}>
      <Link to="/resources/">Library</Link>
      <Link to="/resources/guides/">Guides</Link>
      <Link to="/resources/webinars/">Webinars</Link>

      <h6 className="small">Compliance Guides</h6>
      <Link to="/gdpr/articles/1-subject-matter-objectives/">GDPR</Link>
      <Link to="/hipaa/">HIPAA</Link>
    </div>

    <div className={styles.column}>
      <Link to="/blog/">Blog</Link>
      <Link to="/blog/category/engineering">Engineering Blog</Link>

      <h6 className="small">Documentation</h6>
      <a href="/documentation/index.html">Deploy</a>
      <a href="https://docs.aptible.com/" target="_blank" rel="noopener noreferrer">Comply</a>
      
      <h6 className="small">Support</h6>
      <a href="https://aptible.zendesk.com/hc/en-us/requests/new" target="_blank" rel="noopener noreferrer">Open a Ticket</a>
      <a href="https://status.aptible.com/" target="_blank" rel="noopener noreferrer">Status</a>
    </div>
  </div>
);
