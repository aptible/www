import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { Grid } from '../components/grid/Grid';
import AptibleLayout from '../components/layouts/AptibleLayout';

export default () => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible | Thank you</title>
      <meta name="description" content="Thank you!" />
    </Helmet>
    <Grid>
      <div style={{ gridColumn: '1 / span 7', padding: '100px 0 200px 0' }}>
        <h2>Thank you!</h2>
        <h4 style={{ color: '#b5bbbf', margin: '30px 0 60px 0' }}>
          Thanks for your interest in Aptible Comply! Someone will be in touch
          shortly.
        </h4>

        <p style={{ marginBottom: '30px' }}>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </Grid>
  </AptibleLayout>
);
