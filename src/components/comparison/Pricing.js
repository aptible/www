import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Content.module.css';

export default () => (
  <Grid rows="1">
    <div className={styles.container} id="pricing">
      <h2>
        Pricing
      </h2>

      <ul>
        <li>Like Heroku, Aptible's pricing is based on resource usage. Unlike Heroku, we don't segment subscriptions into different plans. <a href="https://www.aptible.com/pricing-plans/">A single, simple calculator</a> enables you to estimate your costs on Aptible.</li>
        <li>On Heroku, many security and compliance features are gated behind their Enterprise plans. To access these plans, you need to talk to a sales rep and negotiate custom pricing. The list price for Heroku Shield (required for HIPAA compliance) <a href="https://elements.heroku.com/addons/heroku-private-spaces">is $3,000/month</a>. On Aptible, the only requirement for HIPAA compliance is that you deploy your resources in a <a href="https://deploy-docs.aptible.com/docs/shared-dedicated">dedicated stack</a>, which costs $499/month, prorated to the minute with no contractual commitment.</li>
        <li>
          For individual app and database resources, Aptible is priced comparably to Heroku, but with a simpler and more flexible pricing model based purely on container size. Pricing is the same for app and database containers, and RAM and disk size can be scaled independently. The following table illustrates monthly pricing for a few example resources:<br />

          <table>
            <thead>
              <tr>
                <th>Resource</th>
                <th>...on Heroku</th>
                <th>...on Aptible</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>App container</td>
                <td>
                  <a href="https://www.heroku.com/pricing#containers">"Performance M" dyno</a><br />
                  2.5 GB RAM<br />
                  custom domain

                  <p>$250/month</p>
                </td>
                <td>
                  <br />
                  4 GB RAM<br />
                  1 endpoint

                  <p>$269/month</p>
                </td>
              </tr>
              <tr>
                <td>PostgreSQL database</td>
                <td>
                  <a href="https://elements.heroku.com/addons/heroku-postgresql">"Shield 0" Postgres</a><br />
                  4 GB RAM<br />
                  64GB disk<br />
                  HA replica<br />
                  50 backups

                  <p>$350/month</p>
                </td>
                <td>
                  <br />
                  4 GB RAM<br />
                  64GB disk<br />
                  HA replica<br />
                  50 backups

                  <p>$318/month</p>
                </td>
              </tr>
              <tr>
                <td>Redis database</td>
                <td>
                  <a href="https://elements.heroku.com/addons/heroku-redis">"Premium 5" Redis</a><br />
                  1 GB RAM

                  <p>$200/month</p>
                </td>
                <td>
                  <br />
                  1 GB RAM

                  <p>$60/month</p>
                </td>
              </tr>
            </tbody>
          </table>
        </li>
        <li>For performance/cost optimization, Aptible offers CPU-optimized (C), RAM-optimized (R) and Economy (T) container profiles in addition to the default General Purpose (M) profile. On Heroku, RAM- and CPU-optimized dynos are available only for a small handful of sizes. </li>
      </ul>
    </div>
  </Grid>
);
