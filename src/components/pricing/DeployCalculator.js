import React from 'react';
import { Link } from 'gatsby';
import styles from './DeployCalculator.module.css';
import PricingSlider from './PricingSlider';
import ToolTip from '../shared/ToolTip';
import Footnotes from '../shared/Footnotes';

const calculators = {
  containers: [
    { tick: '0', cost: '0', alwaysDisplay: true },
    { tick: '1GB', cost: '0' },
    { tick: '2GB', cost: '0' },
    { tick: '4GB', cost: '0' },
    { tick: '6GB', cost: '0', alwaysDisplay: true, includedLimit: true },
    { tick: '8GB', cost: '117' },
    { tick: '12GB', cost: '350' },
    { tick: '16GB', cost: '584' },
    { tick: '32GB', cost: '1,518' },
    { tick: '64GB', cost: '3,387' },
    { tick: '128GB', cost: '7,125', alwaysDisplay: true },
    { tick: '+', cost: '7,125', alwaysDisplay: true },
  ],
  containersManagedHids: [
    { tick: '0', cost: '0', alwaysDisplay: true },
    { tick: '1GB', cost: '15' },
    { tick: '2GB', cost: '29' },
    { tick: '4GB', cost: '58' },
    { tick: '6GB', cost: '88', alwaysDisplay: true, includedLimit: true },
    { tick: '8GB', cost: '117' }, // '234'
    { tick: '12GB', cost: '176' }, // '526'
    { tick: '16GB', cost: '234' }, // '818'
    { tick: '32GB', cost: '468' }, // '1,986'
    { tick: '64GB', cost: '935' }, // '4,322'
    { tick: '128GB', cost: '1,869', alwaysDisplay: true }, // '8,994'
    { tick: '+', cost: '1,869', alwaysDisplay: true }, // '8,994'
  ],
  encryptedDisk: [
    { tick: '0', cost: '0', alwaysDisplay: true },
    { tick: '10GB', cost: '0' },
    { tick: '50GB', cost: '0' },
    { tick: '100GB', cost: '0' },
    { tick: '250GB', cost: '0' },
    { tick: '500GB', cost: '0' },
    { tick: '1TB', cost: '0', alwaysDisplay: true, includedLimit: true },
    { tick: '1.5TB', cost: '185' },
    { tick: '2TB', cost: '370' },
    { tick: '3TB', cost: '740' },
    { tick: '4TB', cost: '1,110' },
    { tick: '+', cost: '1,110', alwaysDisplay: true },
  ],
  endpoints: [
    { tick: '0', cost: '0', alwaysDisplay: true },
    { tick: '1', cost: '0' },
    { tick: '2', cost: '0' },
    { tick: '3', cost: '0' },
    { tick: '4', cost: '0', alwaysDisplay: true, includedLimit: true },
    { tick: '5', cost: '37' },
    { tick: '6', cost: '73' },
    { tick: '7', cost: '110' },
    { tick: '8', cost: '146' },
    { tick: '9', cost: '183' },
    { tick: '10', cost: '219' },
    { tick: '+', cost: '219', alwaysDisplay: true },
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
  disk:  `Encrypted database storage. Includes backups: daily for 90 days,
          monthly for 6 years.`,
  endpoints: `Endpoints attach to your containers so that they can be accessed
              over the internet, or by other containers. May be HTTPS, TCP, or
              TLS Endpoints.`,
  stack: `Something`,
  support: <>Learn more about <Link to="/deploy/support/">Deploy support plans</Link>.</>,
};

const footnotes = [
  {
    marker: 1,
    note: <>Based on 730 hours/month; <a href="/documentation/deploy/reference/stacks/shared-dedicated.html">view documentation</a> for more information</>
  }
];

const Amount = ({ value }) => {
  return (
    <div className={styles.amount}>
      <h5><span>${value}</span>/mo</h5>
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
      <div className={styles.lineItemAmount}>
        {lineItemAmount}
      </div>
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
      containersIndex: 0,
      diskIndex: 0,
      endpointsIndex: 0,
      vpnConnectionsIndex: 0,
      estimatedMonthlyTotal: 0,
      supportPlan: 'standard',
    };
  }

  toggleSupportPlanOption = (value) => {
    if (value !== this.state.supportPlan) {
      this.setState({
        supportPlan: value,
      });
    }
  }

  toggleManagedHids = () => {
    this.setState({ managedHids: !this.state.managedHids });
  }

  containersAmount = () => {
    return calculators.containers[this.state.containersIndex].cost;
  }

  containersManagedHidsAmount = () => {
    if (!this.state.managedHids) {
      return '0';
    }

    return calculators.containersManagedHids[this.state.containersIndex].cost;
  }

  updateContainersIndex = (idx) => {
    this.setState({ containersIndex: idx });
  }

  diskAmount = () => {
    return calculators.encryptedDisk[this.state.diskIndex].cost;
  }

  updateDiskIndex = (idx) => {
    this.setState({ diskIndex: idx });
  }

  endpointsAmount = () => {
    return calculators.endpoints[this.state.endpointsIndex].cost;
  }

  updateEndpointsIndex = (idx) => {
    this.setState({ endpointsIndex: idx });
  }

  vpnConnectionsAmount = () => {
    return calculators.vpnConnections[this.state.vpnConnectionsIndex].cost;
  }

  updateVpnConnectionsIndex = (idx) => {
    this.setState({ vpnConnectionsIndex: idx });
  }

  supportPlanAmount = () => {
    return calculators.supportPlan[this.state.supportPlan].cost;
  }

  convertAmountToNumber = (amount) => parseInt(amount.replace(/,/g, ''), 10);

  calculateEstimatedAmount = () => {
    const amounts = [
      this.containersAmount(),
      this.containersManagedHidsAmount(),
      this.diskAmount(),
      this.endpointsAmount(),
      this.vpnConnectionsAmount(),
      this.supportPlanAmount(),
    ].map((amount) => this.convertAmountToNumber(amount));

    return amounts.reduce((a, b) => a + b, 0).toLocaleString('en');
  }

  render() {
    return (
      <div className={styles.container}>
        <h4>Estimate your monthly spend</h4>

        <div className={styles.calculator}>
          <Resource
            title="App &amp; Database Containers"
            helpText={toolTips.containers}
            calculatedAmount={this.containersAmount()}
            lineItemAmount={<><span>$0.08</span>/GB/Hour</>}
            pricingSlider={
              <PricingSlider
                calculator={calculators.containers}
                defaultValue="4"
                updatePriceFn={this.updateContainersIndex}
              />
            }
          > 
            <div className={`${styles.lineItemDescription} ${styles.hidsLineItem}`}>
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

                {/* <Link to="/deploy/hids/">Managed HIDS</Link> */}
                {/* <div className={styles.lineItemAmount}>
                  $0.02/GB/Hour
                </div> */}

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
            lineItemAmount={<><span>$0.37</span>/GB/Month</>}
            pricingSlider={
              <PricingSlider
                calculator={calculators.encryptedDisk}
                defaultValue="6"
                updatePriceFn={this.updateDiskIndex}
              />
            }
          />
          
          <Resource
            title="Endpoints"
            helpText={toolTips.endpoints}
            calculatedAmount={this.endpointsAmount()}
            lineItemAmount={<><span>$0.05</span>/Hour/Month</>}
            pricingSlider={
              <PricingSlider
                calculator={calculators.endpoints}
                defaultValue="4"
                updatePriceFn={this.updateEndpointsIndex}
              />
            }
          />

          <Resource
            title="VPN Connections"
            helpText={toolTips.endpoints}
            calculatedAmount={this.vpnConnectionsAmount()}
            lineItemAmount={<><span>$99</span>/Connection/Month</>}
            pricingSlider={
              <PricingSlider
                calculator={calculators.vpnConnections}
                defaultValue="0"
                updatePriceFn={this.updateVpnConnectionsIndex}
              />
            }
          />

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

        <div className={styles.footnotes}>
          <Footnotes footnotes={footnotes} />
        </div>
      </div>
    );
  }
}

export default DeployCalculator;
