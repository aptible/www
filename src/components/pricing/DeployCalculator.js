import React from 'react';
import { Link } from 'gatsby';
import styles from './DeployCalculator.module.css';
import PricingSlider from './PricingSlider';
import ToolTip from '../shared/ToolTip';
import checkmarkIcon from '../../images/pricing/checkmark.svg';


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
    { tick: '8GB', cost: '234' },
    { tick: '12GB', cost: '526' },
    { tick: '16GB', cost: '818' },
    { tick: '32GB', cost: '1,986' },
    { tick: '64GB', cost: '4,322' },
    { tick: '128GB', cost: '8,994', alwaysDisplay: true },
    { tick: '+', cost: '8,994', alwaysDisplay: true },
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
              TLS Endpoints.`
}


class DeployCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      managedHids: false,
      containersIndex: 0,
      diskIndex: 0,
      endpointsIndex: 0,
      vpnConnectionsIndex: 0
    };
  }

  toggleManagedHids = () => {
    this.setState({ managedHids: !this.state.managedHids });
  }

  containersCalculator = () => {
    return this.state.managedHids ? calculators.containersManagedHids : calculators.containers
  }

  containersAmount = () => {
    return this.containersCalculator()[this.state.containersIndex].cost;
  }

  updateContainersIndex = (idx) => {
    this.setState({ containersIndex: idx });
  }

  diskAmount = () => {
    return calculators.encryptedDisk[this.state.diskIndex].cost
  }

  updateDiskIndex = (idx) => {
    this.setState({ diskIndex: idx });
  }

  endpointsAmount = () => {
    return calculators.endpoints[this.state.endpointsIndex].cost
  }

  updateEndpointsIndex = (idx) => {
    this.setState({ endpointsIndex: idx });
  }

  vpnConnectionsAmount = () => {
    return calculators.vpnConnections[this.state.vpnConnectionsIndex].cost
  }

  updateVpnConnectionsIndex = (idx) => {
    this.setState({ vpnConnectionsIndex: idx });
  }

  render() {
    return (
      <div className={styles.container}>
        <h6 className="small">Resources</h6>

        <div className={styles.calculator}>

          <div className={styles.resource}>
            <div className={styles.lineItemContainer}>
              <div className={styles.lineItemDescriptionContainer}>
                <div className={styles.lineItemLines}></div>
                <div className={styles.lineItemDescription}>
                  App & Database Containers
                  <ToolTip text={toolTips.containers} />
                </div>
              </div>
              <div className={styles.lineItemAmount}>
                <span>$0.08</span>/GB/Hour
              </div>
            </div>

            <div className={styles.lineItemContainer} style={{ marginTop: '10px' }}>
              <div className={styles.lineItemDescriptionContainer}>
                <div className={styles.lineItemLines}></div>
                <div
                  className={`${styles.lineItemDescription} ${styles.managedHids}`}
                  onClick={this.toggleManagedHids}>
                  <div className={styles.managedHidsCheckbox}>
                    {this.state.managedHids &&
                      <img src={checkmarkIcon} alt="checkmark" />
                    }
                  </div>
                  With <Link to="/deploy/hids/">Managed HIDS</Link>
                  <ToolTip text={toolTips.hids} />
                </div>
              </div>
              <div className={styles.lineItemAmount}>
                $0.02/GB/Hour
              </div>
            </div>

            <div className={styles.pricingContainer}>
              <PricingSlider
                calculator={this.containersCalculator()}
                defaultValue="4"
                updatePriceFn={this.updateContainersIndex}
              />
              <div className={styles.amount}>
                <h5><span>${this.containersAmount()}</span>/mo</h5>
              </div>
            </div>
          </div>

          <div className={styles.resource}>
            <div className={styles.lineItemContainer}>
              <div className={styles.lineItemDescriptionContainer}>
                <div className={styles.lineItemLines}></div>
                <div className={styles.lineItemDescription}>
                  Encrypted Disk
                  <ToolTip text={toolTips.disk} />
                </div>
              </div>
              <div className={styles.lineItemAmount}>
                <span>$0.37</span>/GB/Month
              </div>
            </div>
            <div className={styles.pricingContainer}>
              <PricingSlider
                calculator={calculators.encryptedDisk}
                defaultValue="6"
                updatePriceFn={this.updateDiskIndex}
              />
              <div className={styles.amount}>
                <h5><span>${this.diskAmount()}</span>/mo</h5>
              </div>
            </div>
          </div>

          <div className={styles.resource}>
            <div className={styles.lineItemContainer}>
              <div className={styles.lineItemDescriptionContainer}>
                <div className={styles.lineItemLines}></div>
                <div className={styles.lineItemDescription}>
                  Endpoints
                  <ToolTip text={toolTips.endpoints} />
                </div>
              </div>
              <div className={styles.lineItemAmount}>
                <span>$0.05</span>/Hour
              </div>
            </div>
            <div className={styles.pricingContainer}>
              <PricingSlider
                calculator={calculators.endpoints}
                defaultValue="4"
                updatePriceFn={this.updateEndpointsIndex}
              />
              <div className={styles.amount}>
                <h5><span>${this.endpointsAmount()}</span>/mo</h5>
              </div>
            </div>
          </div>

          <div className={styles.resource}>
            <div className={styles.lineItemContainer}>
              <div className={styles.lineItemDescriptionContainer}>
                <div className={styles.lineItemLines}></div>
                <div className={styles.lineItemDescription}>
                  VPN Connections
                </div>
              </div>
              <div className={styles.lineItemAmount}>
                <span>$99</span>/Connection/Month
              </div>
            </div>
            <div className={styles.pricingContainer}>
              <PricingSlider
                calculator={calculators.vpnConnections}
                defaultValue="0"
                updatePriceFn={this.updateVpnConnectionsIndex}
              />
              <div className={styles.amount}>
                <h5><span>${this.vpnConnectionsAmount()}</span>/mo</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DeployCalculator;
