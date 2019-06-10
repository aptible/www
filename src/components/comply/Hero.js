import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Hero.module.css';
import SignupButton from '../signup/SignupButton';
import WistiaVideo from '../shared/WistiaVideo';
import videoPlayIcon from '../../images/video-play.svg';
import atriumPhoto from '../../images/customers/photos/atrium-justin-kan.jpg';
import atriumLogo from '../../images/customers/logos/atrium.png';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playVideo: false
    };
  }

  playVideo = () => {
    this.setState({ playVideo: true });
  }

  render() {
    return (
      <div className={styles.container}>
        <Grid>
          <div className={styles.content}>
            <h5>Aptible Comply</h5>
            {!this.props.headlineOverride &&
              <h1>
                Build your business.
                <span>Not your compliance docs.</span>
              </h1>
            }
            {this.props.headlineOverride &&
              <h1>{this.props.headlineOverride}</h1>
            }

            {!this.props.paragraphOverride &&
              <p className="XL">
                Comply organizes and automates security and privacy management into
                clear, simple processes that give you and your customers confidence.
              </p>
            }
            {this.props.paragraphOverride &&
              <p className="XL">{this.props.paragraphOverride}</p>
            }

            <SignupButton text="Schedule a Demo" product="comply" />
          </div>

          <div className={styles.cardContainer}>
            {!this.state.playVideo &&
              <div className={styles.imageContainer} onClick={this.playVideo}>
                <img src={atriumPhoto} alt="atrium" className={styles.cardImage} />
                <div className={styles.videoLength}>
                  <div className={styles.videoPlayIcon}>
                    <img src={videoPlayIcon} alt="Video" />
                  </div>
                  <p className="L-bold">1:47</p>
                </div>
              </div>
              
            }

            {this.state.playVideo &&
              <div className={styles.imageContainer}>
                <WistiaVideo videoId="8p6ej6qqrg" autoPlay="true" />
              </div>
            }
            
            <div className={styles.cardContent}>
              <img src={atriumLogo} alt="atrium logo" className={styles.logo} />

              <p>
                &ldquo;We needed a system that made it easy to track our compliance
                efforts and establish information Security Management&hellip;
                with Aptible we've done that without having to hire a full-time
                compliance team.&rdquo;
              </p>

              <div className={styles.cardAuthor}>
                Justin Kan, CEO
              </div>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Hero;
// export default ({ headlineOverride, paragraphOverride }) => 
