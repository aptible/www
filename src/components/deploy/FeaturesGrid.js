import React from 'react';
import classNames from 'classnames';
import { Grid } from '../grid/Grid';
import styles from './FeaturesGrid.module.css';
import deployFeatures from '../../data/deploy-features.json';

function FeatureCard({ filters, headline, body }) {
  return (
    <div className={styles.card}>
      <div className={styles.pills}>
        {filters.map((filter, idx) => (
          <span
            key={idx}
            className={`${styles.pill} ${styles[filter + 'Pill']}`}
          />
        ))}
      </div>
      <h5>{headline}</h5>
      <p dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
}

class FeaturesGrid extends React.Component {
  constructor(props) {
    super(props);
    const initialFeatures = this.assignFeaturesToColumns(deployFeatures);

    this.state = {
      allFeatures: deployFeatures,
      featuresLeft: initialFeatures.left,
      featuresMiddle: initialFeatures.middle,
      featuresRight: initialFeatures.right,
      security: true,
      auditReady: true,
      flexible: true,
      reliability: true,
      convenience: true,
    };
  }

  toggleFilter = filter => {
    const filters = {
      security: this.state.security,
      auditReady: this.state.auditReady,
      flexible: this.state.flexible,
      reliability: this.state.reliability,
      convenience: this.state.convenience,
    };
    filters[filter] = !this.state[filter];

    const filteredFeatures = this.filterFeatures(filters);

    this.setState({
      [filter]: !this.state[filter],
      featuresLeft: filteredFeatures.left,
      featuresMiddle: filteredFeatures.middle,
      featuresRight: filteredFeatures.right,
    });
  };

  filterFeatures = filters => {
    const activeFilters = Object.keys(filters).filter(k => filters[k]);
    const filtered = this.state.allFeatures.filter(feature => {
      for (let filter of activeFilters) {
        if (feature.filters.indexOf(filter) !== -1) {
          return true;
        }
      }

      return false;
    });

    return this.assignFeaturesToColumns(filtered);
  };

  assignFeaturesToColumns = features => {
    const numEachCol = Math.ceil(features.length / 3);

    return {
      left: features.slice(0, numEachCol),
      middle: features.slice(numEachCol, numEachCol * 2),
      right: features.slice(numEachCol * 2, numEachCol * 3),
    };
  };

  switchClassNames = filter => {
    const filterState = this.state[filter];

    return classNames({
      [styles.switch]: true,
      [styles.switchActive]: filterState,
      [styles[`${filter}SwitchActive`]]: filterState,
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <Grid>
          <div className={styles.filters}>
            <div
              className={styles.filter}
              onClick={() => this.toggleFilter('security')}
            >
              <span className={this.switchClassNames('security')}>
                <span className={styles.switchCircle} />
              </span>
              Security
            </div>

            <div
              className={styles.filter}
              onClick={() => this.toggleFilter('auditReady')}
            >
              <span className={this.switchClassNames('auditReady')}>
                <span className={styles.switchCircle} />
              </span>
              Audit-ready
            </div>

            <div
              className={styles.filter}
              onClick={() => this.toggleFilter('flexible')}
            >
              <span className={this.switchClassNames('flexible')}>
                <span className={styles.switchCircle} />
              </span>
              Flexible + Scalable
            </div>

            <div
              className={styles.filter}
              onClick={() => this.toggleFilter('reliability')}
            >
              <span className={this.switchClassNames('reliability')}>
                <span className={styles.switchCircle} />
              </span>
              DevOps: Reliability
            </div>

            <div
              className={styles.filter}
              onClick={() => this.toggleFilter('convenience')}
            >
              <span className={this.switchClassNames('convenience')}>
                <span className={styles.switchCircle} />
              </span>
              DevOps: Convenience
            </div>
          </div>

          <div className={styles.leftColumn}>
            {this.state.featuresLeft.map((feature, idx) => (
              <FeatureCard
                key={idx}
                filters={feature.filters}
                headline={feature.headline}
                body={feature.body}
              />
            ))}
          </div>

          <div className={styles.middleColumn}>
            {this.state.featuresMiddle.map((feature, idx) => (
              <FeatureCard
                key={idx}
                filters={feature.filters}
                headline={feature.headline}
                body={feature.body}
              />
            ))}
          </div>

          <div className={styles.rightColumn}>
            {this.state.featuresRight.map((feature, idx) => (
              <FeatureCard
                key={idx}
                filters={feature.filters}
                headline={feature.headline}
                body={feature.body}
              />
            ))}
          </div>
        </Grid>
      </div>
    );
  }
}

export default FeaturesGrid;
