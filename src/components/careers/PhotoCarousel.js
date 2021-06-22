import React from 'react';
import styles from './PhotoCarousel.module.css';
import { Grid, Row } from '../grid/Grid';
import WistiaVideo from '../shared/WistiaVideo';
import team1 from '../../images/careers/team1.jpg';
import team2 from '../../images/careers/team2.jpg';
import team3 from '../../images/careers/team3.jpg';

const IMAGES = [team1, team2, team3];

class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.carouselRef = React.createRef();
    this.gridRef = React.createRef();
  }

  componentDidMount() {
    const container = this.carouselRef.current.children[0];

    const gridWidth = this.gridRef.current.offsetWidth;
    const windowWidth = window.outerWidth;
    const carouselPadding = (windowWidth - gridWidth) / 2;

    container.style.padding = `0 ${carouselPadding}px`;
  }

  render() {
    return (
      <div>
        <div className={styles.imageSelector} ref={this.carouselRef}>
          <div className={styles.carouselContainer}>
            <div className={styles.video}>
              <WistiaVideo videoId="24g31c7wor" />
            </div>
            {IMAGES.map((image, idx) => (
              <div key={idx} className={styles.image}>
                <img src={image} key={idx} alt="Aptible team" />
              </div>
            ))}
          </div>
        </div>
        <Grid>
          <Row>
            <div ref={this.gridRef} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default PhotoCarousel;
