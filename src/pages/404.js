import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { Grid } from '../components/grid/Grid';
import AptibleLayout from '../components/layouts/AptibleLayout';

export default () => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible | Page Not Found</title>
      <meta name="description" content="Page not found." />
    </Helmet>
    <Grid>
      <div style={{ gridColumn: '1 / span 7', padding: '100px 0 200px 0' }}>
        <h2>Hmm&hellip; we can't find the page you're looking for.</h2>
        <h4 style={{ color: '#b5bbbf', margin: '30px 0 60px 0' }}>
          Maybe you mistyped the address? If not, the page may have moved.
        </h4>

        <p style={{ marginBottom: '30px' }}>
          <Link to="/">Back to Home</Link>
        </p>

        <p>
          <a href="/documentation/index.html">Documentation</a> &nbsp;
          <a href="https://dashboard.aptible.com">Aptible Deploy</a> &nbsp;
          <a href="https://comply-grc.aptible.com">Aptible Comply</a> &nbsp;
          <a href="https://account.aptible.com">Account</a> &nbsp;
          <a href="http://status.aptible.com/">Aptible Status</a> &nbsp;
          <a href="https://twitter.com/aptiblestatus">@aptiblestatus</a> &nbsp;
          <a href="https://aptible.zendesk.com/hc/en-us/requests/new">
            Contact Support
          </a>
        </p>
      </div>
    </Grid>
  </AptibleLayout>
);
