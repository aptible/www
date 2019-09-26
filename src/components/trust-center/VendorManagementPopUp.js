import React from 'react';
import axios from 'axios';
import Portal from '../shared/Portal';
import { analytics, cookies } from '../../lib/aptible';
import styles from './VendorManagementPopUp.module.css';
import Button from '../buttons/Button';
import VendorProtocolIcons from './VendorProtocolIcons';

const DISABLE_POPUP_COOKIE = 'tc_disable_vm_popup';
const REVEAL_DOMAIN_COOKIE = 'reveal_domain';
const REVEAL_DOMAIN_NULL = 'null';

const addIcon = (
  <svg
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.8957 7.91581H10.426V0.446048C10.426 0.259304 10.2392 0.0725598 10.0525 0.0725598H8.55854C8.32511 0.0725598 8.18505 0.259304 8.18505 0.446048V7.91581H0.715285C0.481855 7.91581 0.341797 8.10256 0.341797 8.2893V9.78326C0.341797 10.0167 0.481855 10.1567 0.715285 10.1567H8.18505V17.6265C8.18505 17.8599 8.32511 18 8.55854 18H10.0525C10.2392 18 10.426 17.8599 10.426 17.6265V10.1567H17.8957C18.0825 10.1567 18.2692 10.0167 18.2692 9.78326V8.2893C18.2692 8.10256 18.0825 7.91581 17.8957 7.91581Z"
      fill="#33C69F"
    />
  </svg>
);

const closeIcon = (
  <svg
    width="11"
    height="11"
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.03125 5L10.25 1.8125L10.9062 1.15625C11 1.0625 11 0.90625 10.9062 0.78125L10.2188 0.09375C10.0938 0 9.9375 0 9.84375 0.09375L6 3.96875L2.125 0.09375C2.03125 0 1.875 0 1.75 0.09375L1.0625 0.78125C0.96875 0.90625 0.96875 1.0625 1.0625 1.15625L4.9375 5L1.0625 8.875C0.96875 8.96875 0.96875 9.125 1.0625 9.25L1.75 9.9375C1.875 10.0312 2.03125 10.0312 2.125 9.9375L6 6.0625L9.1875 9.28125L9.84375 9.9375C9.9375 10.0312 10.0938 10.0312 10.2188 9.9375L10.9062 9.25C11 9.125 11 8.96875 10.9062 8.875L7.03125 5Z"
      fill="#B9C8D2"
    />
  </svg>
);

export default class VendorManagementPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      companyName: '',
      vendors: [],
    };
  }

  componentDidMount = () => {
    if (cookies.get(DISABLE_POPUP_COOKIE)) {
      return;
    }

    this.loadVendors();
  };

  requestUrl = () => {
    let url = 'https://trust.aptible.com/api/vendors/for_ip';
    let domain = null;

    if (analytics.getParam('domain_override')) {
      domain = analytics.getParam('domain_override');
    } else {
      domain = cookies.get(REVEAL_DOMAIN_COOKIE);
    }

    if (domain) {
      url += `?domain_override=${domain}`;
    }

    return url;
  };

  loadVendors = () => {
    let protocols = [];

    axios.get(this.requestUrl()).then(resp => {
      if (resp.data) {
        let cookieDomain = REVEAL_DOMAIN_NULL;
        if (resp.data.domain && resp.data.domain !== '') {
          cookieDomain = resp.data.domain;
          analytics.event('tc_vm_popup:identified');
        } else {
          analytics.event('tc_vm_popup:anonymous');
        }

        cookies.write(
          REVEAL_DOMAIN_COOKIE,
          cookieDomain,
          this.cookieExpiresAt(),
        );

        if (resp.data.protocols) {
          protocols = resp.data.protocols;
        }

        if (resp.data.vendors) {
          let vendors = resp.data.vendors;
          if (vendors.length > 3) {
            vendors = vendors.slice(0, 3);
          }

          analytics.event('tc_vm_popup:view');

          this.setState({
            vendors: vendors,
            protocols: protocols,
            companyName: resp.data.companyName,
            isOpen: true,
          });
        }
      }
    });
  };

  cookieExpiresAt = () => {
    const cookieExpiresAt = new Date();
    cookieExpiresAt.setDate(cookieExpiresAt.getDate() + 7);

    return cookieExpiresAt;
  };

  close = e => {
    e.preventDefault();
    cookies.write(DISABLE_POPUP_COOKIE, 'true', this.cookieExpiresAt());
    analytics.event('tc_vm_popup:close');
    this.setState({ isOpen: false });
  };

  click = () => {
    analytics.event('tc_vm_popup:click');
    cookies.write(DISABLE_POPUP_COOKIE, 'true', this.cookieExpiresAt());
    window.location.href = 'https://trust.aptible.com/vendor-management?source=www';
  };

  mappedProtocols = () => {
    const mappedProtocols = {};
    this.state.protocols.forEach(p => (mappedProtocols[p.id] = p));
    return mappedProtocols;
  };

  render() {
    return (
      <Portal>
        {this.state.isOpen &&
          <div className={styles.container}>
            <div className={styles.closeIcon} onClick={this.close}>
              {closeIcon}
            </div>
            <h5>
              Automate Vendor Management
              {this.state.companyName !== '' && (
                <> at {this.state.companyName}</>
              )}
            </h5>
            <p>
              Build your free vendor inventory list today and automate the
              compliance processes involved in SaaS vendor management.
            </p>

            {this.state.vendors.map(v => (
              <div className={styles.vendorRow} key={v.id} onClick={this.click}>
                <div className={styles.addButton}>{addIcon}</div>

                <div className={styles.logoContainer}>
                  <div className={styles.logo}>
                    <img src={v.logo} alt={v.name} />
                  </div>
                </div>

                <div className={styles.companyName}>{v.name}</div>
                <div className={styles.protocols}>
                  <VendorProtocolIcons
                    mappedProtocols={this.mappedProtocols()}
                    protocolIds={v.vendorToProtocols.map(vp => vp.protocolId)} />
              </div>
              </div>
            ))}

            <div className={styles.button}>
              <Button onClickFn={this.click}>Start Vendor Management</Button>
            </div>
          </div>
        }
      </Portal>
    );
  }
}
