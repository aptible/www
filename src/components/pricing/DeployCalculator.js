import React from 'react';
import { Link } from 'gatsby';
import styles from './DeployCalculator.module.css';
import PricingSlider from './PricingSlider';
import ToolTip from '../shared/ToolTip';

const calculators = {
  containers: [
    { tick: '0', cost: '0', alwaysDisplay: true },
    { tick: '1GB', cost: '58' },
    { tick: '2GB', cost: '117' },
    { tick: '4GB', cost: '234' },
    { tick: '6GB', cost: '350', alwaysDisplay: true },
    { tick: '8GB', cost: '467' },
    { tick: '12GB', cost: '701' },
    { tick: '16GB', cost: '934' },
    { tick: '32GB', cost: '1,869' },
    { tick: '64GB', cost: '3,738' },
    { tick: '128GB', cost: '7,425', alwaysDisplay: true },
    { tick: '+', cost: '7,425', alwaysDisplay: true },
  ],
  containersManagedHids: [
    { tick: '0', cost: '0', alwaysDisplay: true },
    { tick: '1GB', cost: '15' },
    { tick: '2GB', cost: '29' },
    { tick: '4GB', cost: '59' },
    { tick: '6GB', cost: '88', alwaysDisplay: true },
    { tick: '8GB', cost: '117' },
    { tick: '12GB', cost: '175' },
    { tick: '16GB', cost: '234' },
    { tick: '32GB', cost: '467' },
    { tick: '64GB', cost: '935' },
    { tick: '128GB', cost: '1,869', alwaysDisplay: true },
    { tick: '+', cost: '1,869', alwaysDisplay: true },
  ],
  encryptedDisk: [
    { tick: '0', cost: '0', alwaysDisplay: true },
    { tick: '10GB', cost: '2' },
    { tick: '50GB', cost: '10' },
    { tick: '100GB', cost: '20' },
    { tick: '250GB', cost: '50' },
    { tick: '500GB', cost: '100' },
    { tick: '1TB', cost: '200', alwaysDisplay: true },
    { tick: '1.5TB', cost: '250' },
    { tick: '2TB', cost: '400' },
    { tick: '3TB', cost: '600' },
    { tick: '4TB', cost: '800' },
    { tick: '+', cost: '800', alwaysDisplay: true },
  ],
  encryptedBackups: [
    { tick: '0', cost: '0', alwaysDisplay: true },
    { tick: '100GB', cost: '2' },
    { tick: '250GB', cost: '5' },
    { tick: '500GB', cost: '10' },
    { tick: '750GB', cost: '15' },
    { tick: '1TB', cost: '20', alwaysDisplay: true },
    { tick: '1.5TB', cost: '30' },
    { tick: '2TB', cost: '40' },
    { tick: '3TB', cost: '60' },
    { tick: '5TB', cost: '100' },
    { tick: '10TB', cost: '200' },
    { tick: '+', cost: '200', alwaysDisplay: true },
  ],
  provisionedIOPS: [
    { tick: '0', cost: '0', alwaysDisplay: true },
    { tick: '100', cost: '1' },
    { tick: '500', cost: '5' },
    { tick: '1000', cost: '10' },
    { tick: '1500', cost: '15' },
    { tick: '2000', cost: '20', alwaysDisplay: true },
    { tick: '3000', cost: '30' },
    { tick: '5000', cost: '50' },
    { tick: '10000', cost: '100' },
    { tick: '15000', cost: '150' },
    { tick: '20000', cost: '200' },
    { tick: '+', cost: '200', alwaysDisplay: true },
  ],
  endpoints: [
    { tick: '0', cost: '0', alwaysDisplay: true },
    { tick: '1', cost: '37' },
    { tick: '2', cost: '73' },
    { tick: '3', cost: '110' },
    { tick: '4', cost: '146', alwaysDisplay: true },
    { tick: '5', cost: '183' },
    { tick: '6', cost: '219' },
    { tick: '7', cost: '256' },
    { tick: '8', cost: '292' },
    { tick: '9', cost: '329' },
    { tick: '10', cost: '365' },
    { tick: '+', cost: '365', alwaysDisplay: true },
  ],
  vpnConnections: [
    { tick: '0', cost: '0', alwaysDisplay: true },
    { tick: '1', cost: '99' },
    { tick: '2', cost: '198' },
    { tick: '3', cost: '297' },
    { tick: '4', cost: '396' },
    { tick: '5', cost: '495', alwaysDisplay: true },
    { tick: '6', cost: '594' },
    { tick: '7', cost: '693' },
    { tick: '8', cost: '792' },
    { tick: '9', cost: '891' },
    { tick: '10', cost: '990' },
    { tick: '+', cost: '990', alwaysDisplay: true },
  ],
  supportPlan: {
    standard: {
      cost: '0',
    },
    premium: {
      cost: '499',
    },
    enterprise: {
      cost: '1499',
    },
  },
};

const toolTips = {
  containers: `Aptible provisions 1 GB RAM Docker containers by default for
              app and database services. For higher capacity deployments, sum
              the total RAM (in GB) required for all containers.`,
  hids: `Your infrastructure is protected at the host level with both
         intrusion detection monitoring and incident response. The Aptible
         Security Team investigates, responds to, and resolves any security
         incidents.`,
  disk: `Encrypted database storage.`,
  backups: `Encrypted database backups. Backup retention policies are
            customizable, with the default retention policy creating
            daily backups for 90 days, and monthly backups for 6 years,
            with all backups copied to a second region for disaster recovery
            purposes.`,
  endpoints: `Endpoints attach to your containers so that they can be accessed
              over the internet, or by other containers. May be HTTPS, TCP, or
              TLS Endpoints.`,
  provisionedIOPS: (
    <>
      Additional database disk I/O operations per second provisioned over the
      baseline (3000 IOPS). See the{' '}
      <a href="https://deploy-docs.aptible.com/docs/database-scaling">
        Database Scaling documentation
      </a>{' '}
      for more details.
    </>
  ),
  stack: (
    <>
      Based on 730 hours/month,{' '}
      <a href="https://deploy-docs.aptible.com/docs/shared-dedicated">
        more info
      </a>
    </>
  ),
  support: (
    <>
      Learn more about <Link to="/support-plans/">Aptible support plans</Link>.
    </>
  ),
};

const Amount = ({ value }) => {
  return (
    <div className={styles.amount}>
      <h5>
        <span>${value}</span>/mo
      </h5>
    </div>
  );
};

const LineItem = ({ title, helpText, calculatedAmount, lineItemAmount }) => (
  <>
    <div className={styles.lineItemContainer}>
      <div className={styles.lineItemDescription}>
        {title}
        {helpText && <ToolTip text={helpText} />}
      </div>

      <Amount value={calculatedAmount} />
    </div>

    {lineItemAmount && (
      <div className={styles.lineItemAmount}>{lineItemAmount}</div>
    )}
  </>
);

const Resource = ({
  title,
  helpText,
  calculatedAmount,
  lineItemAmount,
  pricingSlider,
  children,
}) => (
  <div className={styles.resource}>
    <LineItem
      title={title}
      helpText={helpText}
      calculatedAmount={calculatedAmount}
      lineItemAmount={lineItemAmount}
    />

    {pricingSlider}

    {children}
  </div>
);

class DeployCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      managedHids: false,
      containersIndex: '0',
      diskIndex: '0',
      backupIndex: '0',
      provisionedIOPSIndex: '0',
      endpointsIndex: '0',
      vpnConnectionsIndex: '0',
      estimatedMonthlyTotal: '0',
      dedicatedStack: true,
      supportPlan: 'standard',
    };
  }

  toggleDedicatedStack = () => {
    this.setState({ dedicatedStack: !this.state.dedicatedStack });
  };

  toggleSupportPlanOption = value => {
    if (value !== this.state.supportPlan) {
      this.setState({
        supportPlan: value,
      });
    }
  };

  toggleManagedHids = () => {
    this.setState({ managedHids: !this.state.managedHids });
  };

  containersAmount = () => {
    return calculators.containers[this.state.containersIndex].cost;
  };

  containersManagedHidsAmount = () => {
    if (!this.state.managedHids) {
      return '0';
    }

    return calculators.containersManagedHids[this.state.containersIndex].cost;
  };

  updateContainersIndex = idx => {
    this.setState({ containersIndex: idx });
  };

  diskAmount = () => {
    return calculators.encryptedDisk[this.state.diskIndex].cost;
  };

  updateDiskIndex = idx => {
    this.setState({ diskIndex: idx });
  };

  backupAmount = () => {
    return calculators.encryptedBackups[this.state.backupIndex].cost;
  };

  updateBackupIndex = idx => {
    this.setState({ backupIndex: idx });
  };

  provisionedIOPSAmount = () => {
    return calculators.provisionedIOPS[this.state.provisionedIOPSIndex].cost;
  };

  updateProvisionedIOPSIndex = idx => {
    this.setState({ provisionedIOPSIndex: idx });
  };

  endpointsAmount = () => {
    return calculators.endpoints[this.state.endpointsIndex].cost;
  };

  updateEndpointsIndex = idx => {
    this.setState({ endpointsIndex: idx });
  };

  vpnConnectionsAmount = () => {
    return calculators.vpnConnections[this.state.vpnConnectionsIndex].cost;
  };

  updateVpnConnectionsIndex = idx => {
    this.setState({ vpnConnectionsIndex: idx });
  };

  dedicatedStackAmount = () => {
    if (!this.state.dedicatedStack) {
      return '0';
    }

    return '499';
  };

  supportPlanAmount = () => {
    return calculators.supportPlan[this.state.supportPlan].cost;
  };

  convertAmountToNumber = amount => parseInt(amount.replace(/,/g, ''), 10);

  calculateEstimatedAmount = () => {
    const amounts = [
      this.containersAmount(),
      this.containersManagedHidsAmount(),
      this.diskAmount(),
      this.backupAmount(),
      this.provisionedIOPSAmount(),
      this.endpointsAmount(),
      this.vpnConnectionsAmount(),
      this.dedicatedStackAmount(),
      this.supportPlanAmount(),
    ].map(amount => this.convertAmountToNumber(amount));

    return amounts.reduce((a, b) => a + b, 0).toLocaleString('en');
  };

  render() {
    return (
      <div className={styles.container}>
        <h4>Estimate your monthly spend</h4>

        <div className={styles.calculator}>
          <Resource
            title="App &amp; Database Containers"
            helpText={toolTips.containers}
            calculatedAmount={this.containersAmount()}
            lineItemAmount={
              <>
                <span>$0.08</span>/GB/Hour
              </>
            }
            pricingSlider={
              <PricingSlider
                calculator={calculators.containers}
                defaultValue="0"
                updatePriceFn={this.updateContainersIndex}
              />
            }
          >
            <div
              className={`${styles.lineItemDescription} ${styles.hidsLineItem}`}
            >
              With Managed HIDS
              <ToolTip text={toolTips.hids} />
            </div>

            <div className={styles.hidsToggle}>
              <div className={styles.hidsToggleButtons}>
                <div className={styles.toggleButtons}>
                  <button
                    onClick={this.toggleManagedHids}
                    disabled={this.state.managedHids}
                  >
                    With HIDS
                  </button>
                  <button
                    onClick={this.toggleManagedHids}
                    disabled={!this.state.managedHids}
                  >
                    Without HIDS
                  </button>
                </div>

                <div className={styles.hidsTooltipDesktop}>
                  <ToolTip text={toolTips.hids} />
                </div>
              </div>
              <Amount value={this.containersManagedHidsAmount()} />
            </div>
          </Resource>

          <Resource
            title="Encrypted Disk"
            helpText={toolTips.disk}
            calculatedAmount={this.diskAmount()}
            lineItemAmount={
              <>
                <span>$0.20</span>/GB/Month
              </>
            }
            pricingSlider={
              <PricingSlider
                calculator={calculators.encryptedDisk}
                defaultValue="0"
                updatePriceFn={this.updateDiskIndex}
              />
            }
          />

          <Resource
            title="Encrypted Backups"
            helpText={toolTips.backups}
            calculatedAmount={this.backupAmount()}
            lineItemAmount={
              <>
                <span>$0.02</span>/GB/Month
              </>
            }
            pricingSlider={
              <PricingSlider
                calculator={calculators.encryptedBackups}
                defaultValue="0"
                updatePriceFn={this.updateBackupIndex}
              />
            }
          />

          <Resource
            title="Provisioned IOPS"
            helpText={toolTips.provisionedIOPS}
            calculatedAmount={this.provisionedIOPSAmount()}
            lineItemAmount={
              <>
                <span>$0.01</span>/Provisioned IOPS/Month
              </>
            }
            pricingSlider={
              <PricingSlider
                calculator={calculators.provisionedIOPS}
                defaultValue="0"
                updatePriceFn={this.updateProvisionedIOPSIndex}
              />
            }
          />

          <Resource
            title="Endpoints"
            helpText={toolTips.endpoints}
            calculatedAmount={this.endpointsAmount()}
            lineItemAmount={
              <>
                <span>$0.05</span>/Hour/Month
              </>
            }
            pricingSlider={
              <PricingSlider
                calculator={calculators.endpoints}
                defaultValue="0"
                updatePriceFn={this.updateEndpointsIndex}
              />
            }
          />

          <Resource
            title="Endpoints"
            helpText={toolTips.endpoints}
            calculatedAmount={this.endpointsAmount()}
            lineItemAmount={
              <>
                <span>$0.05</span>/Hour/Month
              </>
            }
            pricingSlider={
              <PricingSlider
                calculator={calculators.endpoints}
                defaultValue="0"
                updatePriceFn={this.updateEndpointsIndex}
              />
            }
          />

          <Resource
            title="VPN Connections"
            calculatedAmount={this.vpnConnectionsAmount()}
            lineItemAmount={
              <>
                <span>$99</span>/Connection/Month
              </>
            }
            pricingSlider={
              <PricingSlider
                calculator={calculators.vpnConnections}
                defaultValue="0"
                updatePriceFn={this.updateVpnConnectionsIndex}
              />
            }
          />

          <Resource
            title="Dedicated Stack for Regulated Data"
            helpText={toolTips.stack}
            calculatedAmount={this.dedicatedStackAmount()}
          >
            <div className={styles.toggleButtons}>
              <button
                onClick={this.toggleDedicatedStack}
                disabled={this.state.dedicatedStack}
              >
                With Dedicated Stack
              </button>
              <button
                onClick={this.toggleDedicatedStack}
                disabled={!this.state.dedicatedStack}
              >
                Without Dedicated Stack
              </button>
            </div>
          </Resource>

          <Resource
            title="Support Plan"
            helpText={toolTips.support}
            calculatedAmount={this.supportPlanAmount()}
          >
            <div className={styles.toggleButtons}>
              <button
                onClick={() => this.toggleSupportPlanOption('standard')}
                disabled={this.state.supportPlan === 'standard'}
              >
                Standard
              </button>
              <button
                onClick={() => this.toggleSupportPlanOption('premium')}
                disabled={this.state.supportPlan === 'premium'}
              >
                Premium
              </button>
              <button
                onClick={() => this.toggleSupportPlanOption('enterprise')}
                disabled={this.state.supportPlan === 'enterprise'}
              >
                Enterprise
              </button>
            </div>
          </Resource>
        </div>

        <div className={styles.estimatedMonthlyTotal}>
          <h4>Estimated monthly total</h4>
          <Amount value={this.calculateEstimatedAmount()} />
        </div>
      </div>
    );
  }
}

export default DeployCalculator;
