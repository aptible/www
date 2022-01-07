import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './Footer.module.css';

const twitterIcon = (
  <svg
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 2C15.4 2.3 14.8 2.4 14.1 2.5C14.8 2.1 15.3 1.5 15.5 0.7C14.9 1.1 14.2 1.3 13.4 1.5C12.8 0.9 11.9 0.5 11 0.5C9.3 0.5 7.8 2 7.8 3.8C7.8 4.1 7.8 4.3 7.9 4.5C5.2 4.4 2.7 3.1 1.1 1.1C0.8 1.6 0.7 2.1 0.7 2.8C0.7 3.9 1.3 4.9 2.2 5.5C1.7 5.5 1.2 5.3 0.7 5.1C0.7 6.7 1.8 8 3.3 8.3C3 8.4 2.7 8.4 2.4 8.4C2.2 8.4 2 8.4 1.8 8.3C2.2 9.6 3.4 10.6 4.9 10.6C3.8 11.5 2.4 12 0.8 12C0.5 12 0.3 12 0 12C1.5 12.9 3.2 13.5 5 13.5C11 13.5 14.3 8.5 14.3 4.2C14.3 4.1 14.3 3.9 14.3 3.8C15 3.3 15.6 2.7 16 2Z"
      fill="#0A1B2B"
      fillOpacity="0.5"
    />
  </svg>
);

const fbIcon = (
  <svg
    width="10"
    height="16"
    viewBox="0 0 10 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.02293 16L3 9H0V6H3V4C3 1.3008 4.67151 0 7.07938 0C8.23277 0 9.22406 0.08587 9.51294 0.12425V2.94507L7.84296 2.94583C6.53343 2.94583 6.27987 3.5681 6.27987 4.48124V6H10L9 9H6.27986V16H3.02293Z"
      fill="#0A1B2B"
      fillOpacity="0.5"
    />
  </svg>
);

const githubIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0C3.58011 0 0 3.58011 0 8C0 11.5359 2.29343 14.5316 5.47084 15.5924C5.86863 15.6661 6.01596 15.4205 6.01596 15.2044C6.01596 15.0129 6.01105 14.512 6.00614 13.8441C3.78146 14.3254 3.31001 12.7735 3.31001 12.7735C2.94659 11.8502 2.42112 11.5998 2.42112 11.5998C1.69429 11.1037 2.47514 11.1136 2.47514 11.1136C3.27563 11.1725 3.70288 11.9386 3.70288 11.9386C4.41498 13.1614 5.57397 12.8079 6.03069 12.6016C6.10436 12.0859 6.31062 11.7324 6.53653 11.531C4.76366 11.3346 2.89748 10.647 2.89748 7.58257C2.89748 6.70841 3.20688 5.99632 3.72253 5.43646C3.63904 5.2302 3.36403 4.41989 3.79619 3.31983C3.79619 3.31983 4.469 3.10374 5.99632 4.13996C6.63474 3.96317 7.31737 3.87477 8 3.86986C8.67772 3.87477 9.36525 3.96317 10.0037 4.13996C11.531 3.10374 12.2038 3.31983 12.2038 3.31983C12.6409 4.41989 12.3659 5.23511 12.2824 5.43646C12.7931 5.99632 13.1025 6.70841 13.1025 7.58257C13.1025 10.6568 11.2314 11.3296 9.44874 11.531C9.73358 11.7765 9.99386 12.2676 9.99386 13.0141C9.99386 14.0847 9.98404 14.9441 9.98404 15.2093C9.98404 15.4254 10.1265 15.671 10.5341 15.5924C13.7115 14.5316 16 11.5359 16 8.00491C16 3.58011 12.4199 0 8 0Z"
      fill="#0A1B2B"
      fillOpacity="0.5"
    />
  </svg>
);

const linkedInIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.32 2.33317C3.32 3.25384 2.58 3.99984 1.66667 3.99984C0.753333 3.99984 0.0133333 3.25384 0.0133333 2.33317C0.0133333 1.41317 0.753333 0.666504 1.66667 0.666504C2.58 0.666504 3.32 1.41317 3.32 2.33317ZM3.33333 5.33317H0V15.9998H3.33333V5.33317ZM8.65467 5.33317H5.34267V15.9998H8.65533V10.4005C8.65533 7.28717 12.6747 7.0325 12.6747 10.4005V15.9998H16V9.24584C16 3.9925 10.052 4.18384 8.65467 6.76984V5.33317Z"
      fill="#0A1B2B"
      fillOpacity="0.5"
    />
  </svg>
);

const Footer = () => (
  <div className={styles.footer}>
    <Grid rows="3">
      <div className={styles.product}>
        <h6 className="small">Product</h6>
        <Link to="/pricing-plans/#deploy">Pricing</Link>
        <Link to="/solutions/secure-cloud-infrastructure">Fully-Managed Security for Your Cloud Infrastructure</Link>
        <Link to="/solutions/hipaa-hitrust-soc2-compliant-hosting">Prove Compliance and Pass Security Audits</Link>
        <Link to="/solutions/reliable-devops">Reliable DevOps Without the Overhead</Link>
      </div>

      <div className={styles.resources}>
        <h6 className="small">Resources</h6>
        <Link to="/customers/">Customers</Link>
        <Link to="/resources/">Resource Library</Link>
        <Link to="/training/">Training</Link>
        <Link to="/blog/">Blog</Link>
        <Link to="/blog/category/engineering/">Engineering Blog</Link>
      </div>

      <div className={styles.support}>
        <h6 className="small">Support</h6>
        <a
          href="https://aptible.zendesk.com/hc/en-us/requests/new"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Support
        </a>
        <a
          href="https://status.aptible.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aptible Status
        </a>
        <a href="https://deploy-docs.aptible.com/changelog">Changelog</a>
        <a href="https://deploy-docs.aptible.com">Documentation</a>
      </div>

      <div className={styles.company}>
        <h6 className="small">Company</h6>
        <Link to="/company/">About</Link>
        <Link to="/careers/">Careers</Link>
        <Link to="/press/">Press</Link>
        <Link to="/handbook/">Aptible Handbook</Link>
        <Link to="/legal/terms-of-service/">Legal</Link>
      </div>

      <div className={styles.social}>
        <a
          href="https://twitter.com/aptible"
          target="_blank"
          rel="noopener noreferrer"
        >
          {twitterIcon}
        </a>

        <a
          href="https://www.facebook.com/aptible/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {fbIcon}
        </a>

        <a
          href="https://github.com/aptible"
          target="_blank"
          rel="noopener noreferrer"
        >
          {githubIcon}
        </a>

        <a
          href="https://linkedin.com/company/aptible"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkedInIcon}
        </a>
      </div>

      <div className={styles.links}>
        <Link to="/">
          <h6 className="small">Aptible Home</h6>
        </Link>
        <a href="https://account.aptible.com/login">
          <h6 className="small">Log In</h6>
        </a>
        <a href="mailto:support@aptible.com">
          <h6 className="small">support@aptible.com</h6>
        </a>
      </div>

      <div className={styles.copyright}>
        <div>
          &copy; {new Date().getFullYear()} Aptible Inc.
          <br />
          <div className={styles.address}>
            548 Market St #75826
            <br />
            San Francisco, CA
            <br />
            94104-5401
            <br />
            United States
          </div>
        </div>
      </div>
    </Grid>
  </div>
);

export default Footer;
