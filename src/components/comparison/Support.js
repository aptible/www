import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Content.module.css';

export default () => (
  <Grid rows="1">
    <div className={styles.container} id="support">
      <h2>
        Support
      </h2>

      <ul>
        <li>Aptible's support team is staffed by DevOps and platform engineers who help to build the product. We speak your language, and we're happy to help with problems that are out of scope for other providers — like application error debugging or performance analysis. <a href="https://www.g2.com/products/aptible-aptible/reviews">Many of our customers cite our support</a> as a key differentiator.</li>
        <li>The reliability of our product is backed by a <a href="https://www.aptible.com/legal/service-level-agreement/">99.95% Uptime SLA</a>. If any of your services is down for 21 minutes or more in a calendar month, we automatically credit your account. We rarely need to issue these credits, and we document all security and availability issues promptly and transparently on our <a href="https://status.aptible.com/history">status page</a>.</li>
      </ul>
    </div>
  </Grid>
);
