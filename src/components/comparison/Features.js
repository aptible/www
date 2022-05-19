import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Features.module.css';
import featureData from '../../data/vs-heroku.json';
import check from '../../images/signup/checkmark.svg';
import x from '../../images/signup/x.svg';

const FeatureName = ({feature}) => {
  return feature['link'] ? <a href={feature['link']}>{feature['name']}</a> : feature['name'];
}

const FeatureIcon = ({available}) => {
  const icon = available ? check : x;
  return <img src={icon} className={styles.icon} />
}

export default () => (
  <Grid rows="1">
    <div className={styles.container} id="features">
      <h2>
        Key Feature Comparison
      </h2>

      <table className={styles.featureTable}>
        <thead>
          <tr>
            <th></th>
            <th className={styles.featureColumn}>Heroku (Free to Advanced)</th>
            <th className={styles.featureColumn}>Heroku Enterprise</th>
            <th className={styles.featureColumn}>Aptible</th>
          </tr>
        </thead>

        <tbody>
          {Object.keys(featureData).map((section, idx) => (
            <>
              {idx !== 0 &&
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              }

              <tr>
                <td><strong>{section}</strong></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              {featureData[section].map(feature => (
                <tr>
                  <td><FeatureName feature={feature} /></td>
                  <td><FeatureIcon available={feature['free']} /></td>
                  <td><FeatureIcon available={feature['enterprise']} /></td>
                  <td><FeatureIcon available={feature['aptible']} /></td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  </Grid>
);
