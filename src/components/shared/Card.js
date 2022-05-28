import React from 'react';
import cn from 'classnames';
import { Link } from 'gatsby';
import styles from './Card.module.css';
import Arrow from '../shared/Arrow';
import WistiaVideo from './WistiaVideo';
import videoPlayIcon from '../../images/video-play.svg';
import customerCards from '../../data/customer-cards.json';
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
import himsHersLogo from '../../images/customers/logos/hims-hers-logo.png';
import careportLogo from '../../images/customers/logos/careport-logo.png';
import dorsataLogo from '../../images/customers/logos/dorsata.png';
import greenspaceLogo from '../../images/customers/logos/greenspace.png';
import stellarLogo from '../../images/customers/logos/stellar-health.png';
import medicalMemoryBranded from '../../images/solutions/medical-memory-branded-half-height.png';
import rightwayBranded from '../../images/solutions/rightway-branded-panel-half-height.png';
import glidianBranded from '../../images/solutions/gildian-branded-panel-half-height.png';
import himsHersBranded from '../../images/solutions/hims-hers-half-height.png';

const photos = {
  medicalMemory: medicalMemoryBranded,
  rightwayHealthcare: rightwayBranded,
  glidianInc: glidianBranded,
  hims_hers: himsHersBranded,
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
  hims_hers: himsHersLogo,
  careport: careportLogo,
  dorsata: dorsataLogo,
  greenspace: greenspaceLogo,
  stellar: stellarLogo,
};


const CardLogo = ({ logo, to, website, alt }) => {
  const img = (
    <img
      src={logo}
      className={styles.logo}
      alt={alt}
    />
  );

  if(website && !to) {
    return <a href={website} target="_blank" rel="noopener noreferrer">{img}</a>
  }
  
  return img
}

const CardContent = ({ logo, customerData, image, to }) => (
  <div className={styles.card}>
    <div className={`${styles.arrow} ${image ? styles.withImage : ''}`}>
      <Arrow />
    </div>

    { logo && <CardLogo
      logo={logo}
      to={to}
      website={customerData.website}
      alt={customerData.name}
    />}

    {customerData.headline && (
      <h5 dangerouslySetInnerHTML={{ __html: customerData.headline }} />
    )}

    {customerData.text && <p>{customerData.text}</p>}

    {customerData.author && (
      <p className={styles.author}>{customerData.author}</p>
    )}

    {to && (
      <div className={styles.readMore}>
        <p>Read More</p>
      </div>
    )}
  </div>
)

const CardMedia = ({ videoId, showVideo, videoLength, videoClick, image }) => (  
  <div className={styles.imageContainer}>
    {videoId && (
      <React.Fragment>
        {this.state.showVideo && (
          <div className={styles.videoContainer}>
            <WistiaVideo
              videoId={videoId}
              autoPlay="true"
            />
          </div>
        )}

        {showVideo && (
          <React.Fragment>
            <div className={styles.videoLength}>
              <div className={styles.videoPlayIcon}>
                <img src={videoPlayIcon} alt="Video" />
              </div>
              <p className="L-bold">{videoLength}</p>
            </div>
            <div
              className={styles.videoClick}
              onClick={videoClick}
            />
          </React.Fragment>
        )}
      </React.Fragment>
    )}

    {!showVideo && (
      <img src={image} className={styles.image} alt="Customer" />
    )}
  </div>
)

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
    const cardContent = (
      <>
        {image && <CardMedia
          showVideo={this.state.showVideo}
          videoId={customerData.videoId}
          videoLength={customerData.videoLength}
          image={image}
          videoClick={this.videoClick}
        />}

        <CardContent
          logo={logos[customer]}
          customerData={customerData}
          image={image}
          to={to}
        />
      </>
    )

    if(to) {
      return (
        <Link
          to={to}
          className={cn(styles.container, styles.linkedContainer)}
        >
          {cardContent}
        </Link>
      )
    }

    return (
      <div className={styles.container}>{cardContent}</div>
    );
  }
}

export default Card;
