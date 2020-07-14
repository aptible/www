import React from 'react';
import { Link } from 'gatsby';
import styles from './Card.module.css';
import Arrow from '../shared/Arrow';
import WistiaVideo from './WistiaVideo';
import videoPlayIcon from '../../images/video-play.svg';
import customerCards from '../../data/customer-cards.json';

import formaticPhoto from '../../images/customers/photos/fortmatic-arthur-jen.jpg';
import quadpayPhoto from '../../images/customers/photos/quadpay-ian-yamey.jpg';

import ableHealthLogo from '../../images/customers/logos/able-health.png';
import fortmaticLogo from '../../images/customers/logos/fortmatic.svg';
import healthifyLogo from '../../images/customers/logos/healthify.svg';
import mdsaveLogo from '../../images/customers/logos/mdsave.svg';
import pathaiLogo from '../../images/customers/logos/pathai.png';
import riffynLogo from '../../images/customers/logos/riffyn.png';
import snapsLogo from '../../images/customers/logos/snaps.png';
import vergesenseLogo from '../../images/customers/logos/vergesense.svg';
import virtaLogo from '../../images/customers/logos/virta.svg';

const photos = {
  fortmatic: formaticPhoto,
  quadpay: quadpayPhoto
};

const logos = {
  ableHealth: ableHealthLogo,
  fortmatic: fortmaticLogo,
  healthify: healthifyLogo,
  mdsave: mdsaveLogo,
  pathAI: pathaiLogo,
  riffyn: riffynLogo,
  snaps: snapsLogo,
  vergesense: vergesenseLogo,
  virta: virtaLogo
};

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showVideo: false
    };
  }

  videoClick = (e) => {
    e.preventDefault();
    this.setState({ showVideo: true });
  }

  render() {
    const customer = this.props.customer;
    const customerData = customerCards[customer];

    const to = customerData.link;
    const image = photos[customer];
    const ContainerElement = to ? Link : 'div';

    return (
      <ContainerElement to={to} className={`${styles.container} ${to ? styles.linkedContainer : ''}`}>
        {image &&
          <div className={styles.imageContainer}>
            {customerData.videoId &&
              <React.Fragment>
                {this.state.showVideo &&
                  <div className={styles.videoContainer}>
                    <WistiaVideo videoId={customerData.videoId} autoPlay="true" />
                  </div>
                }

                {!this.state.showVideo &&
                  <React.Fragment>
                    <div className={styles.videoLength}>
                      <div className={styles.videoPlayIcon}>
                        <img src={videoPlayIcon} alt="Video" />
                      </div>
                      <p className="L-bold">{customerData.videoLength}</p>
                    </div>
                    <div className={styles.videoClick} onClick={this.videoClick}></div>
                  </React.Fragment>
                }
              </React.Fragment>
            }

            {!this.state.showVideo &&
              <img src={image} className={styles.image} alt="Customer" />
            }
          </div>
        }

        <div className={styles.card}>
          <div className={`${styles.arrow} ${image ? styles.withImage : ''}`}><Arrow /></div>

          {logos[customer] &&
            <img src={logos[customer]} className={styles.logo} alt="Customer logo" />
          }

          {customerData.headline &&
            <h5 dangerouslySetInnerHTML={{ __html: customerData.headline }}></h5>
          }

          {customerData.text &&
            <p>{customerData.text}</p>
          }

          {customerData.author &&
            <p className={styles.author}>{customerData.author}</p>
          }

          {to &&
            <div className={styles.readMore}>
              <p>Read More</p>
            </div>
          }

          {customerData.tags &&
            <div className={styles.tags}>
              {customerData.tags.map((tag, idx) => {
                return <span key={idx} className={styles.tag}>{tag}</span>
              })}
            </div>
          }

        </div>
      </ContainerElement>
    );
  }
}


export default Card;
