import React from 'react';
import { Link } from 'gatsby';
import styles from './Footer.module.css';
import { Grid } from '../grid/Grid';
import NewsletterSignup from './NewsletterSignup';
import GridLinesForSection from '../grid/GridLinesForSection';
import temporarySocialImages from '../../images/temp-social.svg';

export default () => (
  <div className={styles.footer}>
    <Grid rows="3">
      <div className={styles.products}>
        <h6 className="small">Products</h6>
        <Link to="/comply/">
          <h3>Comply</h3>
        </Link>
        <Link to="/deploy/">
          <h3>Deploy</h3>
        </Link>
        <Link to="/pricing-plans/">
          <h3>Pricing</h3>
        </Link>
      </div>

      <div className={styles.useCases}>
        <h6 className="small">Use Cases</h6>
        <Link to="/use-cases/#vendor-security-assessments">
          <span className="desktopOnly">VSAs and External Audits</span>
          <span className="mobileOnly">VSAs and Audits</span>
        </Link>
        <Link to="/use-cases/#security-standards">Security Standards</Link>
        <Link to="/use-cases/#regulatory-compliance">Regulatory Compliance</Link>
        <Link to="/use-cases/#security-awareness">Security Awareness</Link>
        <Link to="/use-cases/#internal-audits">Internal Audits</Link>
      </div>

      <div className={styles.resources}>
        <h6 className="small">Resources</h6>
        <Link to="/customers/">Customers</Link>
        <Link to="/security-management/">
          <span className="desktopOnly">Security Management Guide</span>
          <span className="mobileOnly">Security Guide</span>
        </Link>
        <Link to="/hipaa/">Compliance Guides</Link>
        <Link to="/blog/">Blog</Link>
        <a href="https://aptible.zendesk.com/" target="_blank" rel="noopener noreferrer">Support Tickets</a>
        <a href="https://status.aptible.com/" target="_blank" rel="noopener noreferrer">Status</a>
        <Link to="/changelog/">Changelog</Link>
      </div>

      <div className={styles.company}>
        <h6 className="small">Company</h6>
        <Link to="/company/">About</Link>
        <Link to="/careers/">Careers</Link>
        <Link to="/legal/terms-of-service/">Legal</Link>
      </div>


      <div className={styles.newsletter}>
        <h5>Security Management Monthly</h5>
        <p>
          We'll send you the best from Krebs on Security, Bleeping Computer,
          and more in a brief monthly digest.
        </p>
      </div>

      <div className={styles.newsletterForm}>
        <NewsletterSignup />
      </div>

      <div className={styles.social}>
        <img src={temporarySocialImages} alt="social icons" />
      </div>

      <div className={styles.links}>
        <Link to="/"><h6 className="small">Aptible Home</h6></Link>
        <a href="https://dashboard.aptible.com/login"><h6 className="small">Log In</h6></a>
      </div>

      <div className={styles.copyright}>
        <p>&copy; {(new Date().getFullYear())} Aptible Inc.</p>
      </div>
    </Grid>

    <GridLinesForSection />
  </div>
);
