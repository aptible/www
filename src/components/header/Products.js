import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';

export default () => (
  <Grid>
    <p>
      <Link to="/comply">Comply</Link>
    </p>
    <p>
      <Link to="/deploy">Deploy</Link>
    </p>
  </Grid>
);
