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
        <Link to="/pricing/">
          <h3>Pricing</h3>
        </Link>
      </div>

      <div className={styles.useCases}>
        <h6 className="small">Use Cases</h6>
        <Link to="/">VSAs and External Audits</Link>
        <Link to="/">Security Standards</Link>
        <Link to="/">Regulatory Compliance</Link>
        <Link to="/">Security Competence</Link>
        <Link to="/">Internal Audits</Link>
      </div>

      <div className={styles.resources}>
        <h6 className="small">Resources</h6>
        <Link to="/">Customers</Link>
        <Link to="/">Security Management Library</Link>
        <Link to="/">Compliance Guides</Link>
        <Link to="/">Slack Community</Link>
        <Link to="/">Support Tickets</Link>
        <Link to="/">Status</Link>
        <Link to="/">Changelog</Link>
      </div>

      <div className={styles.company}>
        <h6 className="small">Company</h6>
        <Link to="/">About</Link>
        <Link to="/">Jobs</Link>
        <Link to="/">Legal</Link>
        <Link to="/">FAQ</Link>
        <Link to="/">Media Kit</Link>
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
        <Link to="/"><h6 className="small">Log In</h6></Link>
        <Link to="/"><h6 className="small">Get Started</h6></Link>
        <Link to="/"><h6 className="small">Book A Demo</h6></Link>
        <Link to="/"><h6 className="small">Contact</h6></Link>
      </div>

      <div className={styles.copyright}>
        <p>&copy; {(new Date().getFullYear())} Aptible Inc.</p>
      </div>
    </Grid>

    <GridLinesForSection />
  </div>
);
