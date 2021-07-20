import React from 'react';
import { Link } from 'gatsby';
import styles from './Card.module.css';
import Arrow from '../shared/Arrow';
import WistiaVideo from './WistiaVideo';
import videoPlayIcon from '../../images/video-play.svg';
import customerCards from '../../data/customer-cards.json';

import quadpayPhoto from '../../images/customers/photos/quadpay-ian-yamey.jpg';
import healthCatalystLogo from '../../images/customers/logos/health-catalyst.png';
import ableHealthLogo from '../../images/customers/logos/able-health.png';
import healthifyLogo from '../../images/customers/logos/healthify.svg';
import mdsaveLogo from '../../images/customers/logos/mdsave.svg';
import pathaiLogo from '../../images/customers/logos/pathai.png';
import virtaLogo from '../../images/customers/logos/virta.svg';
import medicalMemoryLogo from '../../images/customers/logos/medical-memory-logo.png';
import pagerLogo from '../../images/customers/logos/pager-logo.png';
import vidscripLogo from '../../images/customers/logos/vidscip-logo.png';
import rightwayLogo from '../../images/customers/logos/rightway-logo.png';
import aidinLogo from '../../images/customers/logos/aidin-logo.png';
import glidianLogo from '../../images/customers/logos/glidian-logo.png';
import projectBeaconLogo from '../../images/customers/logos/project-beacon-logo.png';

const photos = {
  quadpay: quadpayPhoto,
};

const logos = {
  healthCatalyst: healthCatalystLogo,
  ableHealth: ableHealthLogo,
  healthify: healthifyLogo,
  mdsave: mdsaveLogo,
  pathAI: pathaiLogo,
  virta: virtaLogo,
  medicalMemory: medicalMemoryLogo,
  pager: pagerLogo,
  vidscrip: vidscripLogo,
  rightwayHealthcare: rightwayLogo,
  aidin: aidinLogo,
  glidianInc: glidianLogo,
  projectBeacon: projectBeaconLogo,
};

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showVideo: false,
    };
  }

  videoClick = e => {
    e.preventDefault();
    this.setState({ showVideo: true });
  };

  render() {
    const customer = this.props.customer;
    const customerData = customerCards[customer];

    const to = customerData.link;
    const image = photos[customer];
    const ContainerElement = to ? Link : 'div';

    return (
      <ContainerElement
        to={to}
        className={`${styles.container} ${to ? styles.linkedContainer : ''}`}
      >
        {image && (
          <div className={styles.imageContainer}>
            {customerData.videoId && (
              <React.Fragment>
                {this.state.showVideo && (
                  <div className={styles.videoContainer}>
                    <WistiaVideo
                      videoId={customerData.videoId}
                      autoPlay="true"
                    />
                  </div>
                )}

                {!this.state.showVideo && (
                  <React.Fragment>
                    <div className={styles.videoLength}>
                      <div className={styles.videoPlayIcon}>
                        <img src={videoPlayIcon} alt="Video" />
                      </div>
                      <p className="L-bold">{customerData.videoLength}</p>
                    </div>
                    <div
                      className={styles.videoClick}
                      onClick={this.videoClick}
                    />
                  </React.Fragment>
                )}
              </React.Fragment>
            )}

            {!this.state.showVideo && (
              <img src={image} className={styles.image} alt="Customer" />
            )}
          </div>
        )}

        <div className={styles.card}>
          <div className={`${styles.arrow} ${image ? styles.withImage : ''}`}>
            <Arrow />
          </div>

          {logos[customer] && (
            <a href={customerData.website} target="_blank">
              <img
                src={logos[customer]}
                className={styles.logo}
                alt={`${customerData.name} logo`}
              />
            </a>
          )}

          {customerData.headline && (
            <h5 dangerouslySetInnerHTML={{ __html: customerData.headline }} />
          )}

          {customerData.text && <p>{customerData.text}</p>}

          {customerData.author && (
            <p className={styles.author}>{customerData.author}</p>
          )}

          {customerData.name && (
            <h6 className={styles.companyName}>
              <a href={customerData.website} target="_blank">
                {customerData.name}
              </a>
            </h6>
          )}

          {to && (
            <div className={styles.readMore}>
              <p>Read More</p>
            </div>
          )}

          {customerData.tags && (
            <div className={styles.tags}>
              {customerData.tags.map((tag, idx) => {
                return (
                  <span key={idx} className={styles.tag}>
                    {tag}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </ContainerElement>
    );
  }
}

export default Card;
