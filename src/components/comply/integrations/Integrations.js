import React from 'react';
import IntegrationCard from './IntegrationCard';
import styles from './Integrations.module.css';

const FILTERS = {
  ALL: 'All',
  WORKFLOW_AUTOMATION: 'Workflow Automation',
  SECURE_SYSTEM_DEVELOPMENT: 'Secure System Development',
  MOBILE_DEVICE_MANAGEMENT: 'Mobile Device Management',
  IDENTITY_ACCESS_MANAGEMENT: 'Identity & Access Management',
};

class Integrations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilter: FILTERS.ALL,
    };
  }

  filterResources = event => {
    this.setState({
      activeFilter: event.target.textContent,
    });
  };

  render() {
    const { integrations } = this.props;
    const { activeFilter } = this.state;

    let filteredIntegrations = integrations;
    filteredIntegrations = filteredIntegrations.filter(integration => {
      if (activeFilter === FILTERS.ALL) {
        return integrations;
      }

      return integration.controls.includes(activeFilter);
    });

    return (
      <div className={styles.wrapper}>
        <div className={styles.filters}>
          <h5>Categories</h5>
          <div className={styles.categories}>
            {Object.values(FILTERS).map(filter => (
              <button
                key={filter}
                onClick={this.filterResources}
                className={activeFilter === filter ? styles.active : ''}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.container}>
          {filteredIntegrations.map(integration => {
            return (
              <IntegrationCard key={integration.id} integration={integration} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Integrations;
