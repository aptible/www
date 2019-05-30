import React from 'react';
import styles from './ShareIcons.module.css';

const facebookIcon = (
  <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.02293 16L3 9H0V6H3V4C3 1.3008 4.67151 0 7.07938 0C8.23277 0 9.22406 0.08587 9.51294 0.12425V2.94507L7.84296 2.94583C6.53343 2.94583 6.27987 3.5681 6.27987 4.48124V6H10L9 9H6.27986V16H3.02293Z" fill="white" fillOpacity="0.5" />
  </svg>
);

const twitterIcon = (
  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2C15.4 2.3 14.8 2.4 14.1 2.5C14.8 2.1 15.3 1.5 15.5 0.7C14.9 1.1 14.2 1.3 13.4 1.5C12.8 0.9 11.9 0.5 11 0.5C9.3 0.5 7.8 2 7.8 3.8C7.8 4.1 7.8 4.3 7.9 4.5C5.2 4.4 2.7 3.1 1.1 1.1C0.8 1.6 0.7 2.1 0.7 2.8C0.7 3.9 1.3 4.9 2.2 5.5C1.7 5.5 1.2 5.3 0.7 5.1C0.7 6.7 1.8 8 3.3 8.3C3 8.4 2.7 8.4 2.4 8.4C2.2 8.4 2 8.4 1.8 8.3C2.2 9.6 3.4 10.6 4.9 10.6C3.8 11.5 2.4 12 0.8 12C0.5 12 0.3 12 0 12C1.5 12.9 3.2 13.5 5 13.5C11 13.5 14.3 8.5 14.3 4.2C14.3 4.1 14.3 3.9 14.3 3.8C15 3.3 15.6 2.7 16 2Z" fill="white" fillOpacity="0.5" />
  </svg>
);

const linkedinIcon = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.04347826,14 L0,14 L0,4.45454545 L3.04347826,4.45454545 L3.04347826,14 Z M1.52234783,3.18181818 C0.680521739,3.18181818 0,2.46845455 0,1.59027273 C0,0.712090909 0.68173913,0 1.52234783,0 C2.36113043,0 3.04347826,0.713363636 3.04347826,1.59027273 C3.04347826,2.46845455 2.36113043,3.18181818 1.52234783,3.18181818 Z M14,14 L11.074,14 L11.074,9.35454545 C11.074,8.24663636 11.053913,6.82181818 9.55286957,6.82181818 C8.02930435,6.82181818 7.79495652,8.02836364 7.79495652,9.27436364 L7.79495652,14 L4.86956522,14 L4.86956522,4.44754545 L7.67808696,4.44754545 L7.67808696,5.75272727 L7.71765217,5.75272727 C8.10843478,5.00181818 9.06347826,4.21018182 10.4878261,4.21018182 C13.4521739,4.21018182 14,6.18863636 14,8.76081818 C14,8.76081818 14,14 14,14 Z" fill="white" fillOpacity="0.5" />
  </svg>
);

const linkIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '-1px' }}>
    <path d="M9.59847 12.8C7.99847 14.4 5.49847 14.4 3.89847 12.8C2.29847 11.2 2.19847 8.79998 3.79847 7.29998L8.29847 2.79998C9.29847 1.79998 10.8985 1.79998 11.7985 2.79998C12.7985 3.79998 12.7985 5.39998 11.7985 6.29998L8.29847 9.89997C7.89847 10.3 7.29847 10.3 6.89847 9.89997C6.49847 9.49998 6.49847 8.89997 6.89847 8.49998L9.69847 5.69998L8.19847 4.29998L5.49847 6.99998C4.29847 8.19998 4.29847 10.1 5.49847 11.2C6.69847 12.3 8.59847 12.4 9.69847 11.2L13.2985 7.59998C15.0985 5.79998 15.0985 2.99998 13.2985 1.19998C11.4985 -0.600024 8.69847 -0.600024 6.89847 1.19998L2.39847 5.89998C0.0984713 8.19998 0.198471 11.9 2.49847 14.2C3.69847 15.4 5.19847 16 6.79847 16C8.39847 16 9.89847 15.4 10.9985 14.2L15.2985 9.89997L13.8985 8.49998L9.59847 12.8Z" fill="white" fillOpacity="0.5" />
  </svg>
);

class ShareIcons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shareUrl = () => {
    if (typeof(window) === 'undefined') {
      return '';
    }

    return encodeURIComponent(window.location.toString());
  }

  facebookLink = () => {
    return `https://www.facebook.com/sharer/sharer.php?u=${this.shareUrl()}`;
  }

  twitterLink = () => {
    return `https://twitter.com/home?status=${this.shareUrl()}`;
  }

  linkedinLink = () => {
    return `https://www.linkedin.com/shareArticle?mini=true&title=Aptible&summary=&source=&url=${this.shareUrl()}`;
  }

  sendUrlToClipboard = () => {
    if (!window || !window.navigator || !window.navigator.permissions) {
      return
    }

    window.navigator.permissions.query({ name: 'clipboard-write' }).then(result => {
      if (result.state === 'granted' || result.state === 'prompt') {
        window.navigator.clipboard.writeText(window.location.toString());
      }
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.icon}>
          <a href={this.facebookLink()} target="_blank" rel="noopener noreferrer">
            {facebookIcon}
          </a>
        </div>

        <div className={styles.icon}>
          <a href={this.twitterLink()} target="_blank" rel="noopener noreferrer">
            {twitterIcon}
          </a>
        </div>

        <div className={styles.icon}>
          <a href={this.linkedinLink()} target="_blank" rel="noopener noreferrer">
            {linkedinIcon}
          </a>
        </div>

        <div className={styles.icon}>
          <div onClick={this.sendUrlToClipboard}>
            {linkIcon}
          </div>
        </div>
      </div>
    );
  }
}

export default ShareIcons;
