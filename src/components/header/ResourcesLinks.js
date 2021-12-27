import React from 'react';
import { Link } from 'gatsby';
import styles from './ResourcesLinks.module.css';

export default () => (
  <div className={styles.container}>
    <div className={styles.column}>
      <Link to="/resources/">Library</Link>
      <Link to="/blog/">Blog</Link>
      <Link to="/blog/category/engineering">Engineering Blog</Link>

      <a href="https://deploy-docs.aptible.com">Documentation</a>

      <h6 className="small">Support</h6>
      <a
        href="https://aptible.zendesk.com/hc/en-us/requests/new"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open a Ticket
      </a>
      <a
        href="https://community.aptible.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Community
      </a>
      <a
        href="https://status.aptible.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Status
      </a>
    </div>
  </div>
);
