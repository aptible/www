import React from 'react';
import Portal from '../shared/Portal';
import CheckmarkUnorderedList from '../shared/CheckmarkUnorderedList';
import Button from '../buttons/Button';
import styles from './Download.module.css';
import { submitMarketoForm, SECURITY_MANAGEMENT_GUIDE_FORM } from '../../lib/marketo';
import heroImage from '../../images/security-management/sm1.jpg';

const closeIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 1L1.32993 18.9924M18.6841 19L1 1.02118" stroke="white" strokeOpacity="0.7" strokeWidth="2" />
  </svg>
);

function Download(props) {
  return (
    <Portal>
      <InnerDownload {...props} />
    </Portal>
  );
}

class InnerDownload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  emailChanged = (e) => {
    this.setState({ email: e.target.value });
  }

  submit = () => {
    if (this.state.email.length < 1 || this.state.email.indexOf('@') === -1) {
      return;
    }

    const payload = {
      Email: this.state.email,
      LeadSource: 'Content Signup'
    };

    submitMarketoForm(SECURITY_MANAGEMENT_GUIDE_FORM, payload, () => {
      window.location = 'https://pages.aptible.com/rs/620-GAP-535/images/2019.10.17%20Security%20Management%20Guide.pdf';
    });
  }

  closeWindow = () => {
    this.props.closeFn();
  }

  dontClose = (e) => {
    e.stopPropagation();
  }

  render() {
    return (
      <div className={styles.container} onClick={this.props.closeFn}>
        <div className={styles.window} onClick={this.dontClose}>
          <div className={styles.form}>
            <div className={styles.closeIcon} onClick={this.props.closeFn}>
              {closeIcon}
            </div>

            <h4>Download the Security Management Guide</h4>
            <input type="email" placeholder="you@yourwork.com" value={this.state.value} onChange={this.emailChanged} />

            <div className={styles.button}>
              <Button onClickFn={this.submit}>Download the Guide</Button>
            </div>
          </div>

          <div className={styles.illustration}>
            <img src={heroImage} alt="security management" />
          </div>

          <div className={styles.bullets}>
            <CheckmarkUnorderedList>
              <li>Shorten your sales sycle</li>
              <li>Gain a competitive advantage</li>
              <li>Simplify vendor security assessments</li>
              <li>Pass your next compliance audit, guaranteed</li>
              <li>Delegate Security Management tasks</li>
              <li>Build a best-in-class security program</li>
            </CheckmarkUnorderedList>
          </div>
        </div>
      </div>
    )
  }
}

export default Download;
