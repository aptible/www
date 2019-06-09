import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './CustomerCarousel.module.css';
import ArrowButton from '../buttons/ArrowButton';
import CustomerCarouselThumbnail from './CustomerCarouselThumbnail';
import arrowImage from '../../images/arrows/green.svg';

import fortmaticPhoto from '../../images/customers/carousel/fortmatic.jpg';
import atriumPhoto from '../../images/customers/carousel/atrium.jpg';

import atriumLogo from '../../images/customers/logos/atrium.png';
import fortmaticLogo from '../../images/customers/logos/fortmatic.svg';
import quadpayLogo from '../../images/customers/logos/quadpay.svg';

const customers = [
  {
    image: null,
    headline: (
      <React.Fragment>
        <h1 className={styles.quoteStart}>&ldquo;We want our end users</h1>
        <h1>to know we take security very seriously.</h1>
        <h1>with Aptible <img src={arrowImage} alt="Aptible arrow" /></h1>
        <h1>we were able to secure our SOC 2 audit very quickly.&rdquo;</h1>
      </React.Fragment>
    ),
    description: 'Fortmatic uses Aptible Comply to build their Security Management Program and secured their SOC 2 audit in a fraction of the time.',
    photo: fortmaticPhoto,
    logo: fortmaticLogo,
    caseStudy: '/customers/fortmatic/'
  },
  {
    image: null,
    headline: (
      <React.Fragment>
        <h1 className={styles.quoteStart}>&ldquo;We needed a system that</h1>
        <h1>made it easy to track our compliance efforts&hellip;</h1>
        <h1>with Aptible we've done that</h1>
        <h1>without having to hire a compliance team.&rdquo;</h1>
      </React.Fragment>
    ),
    description: 'Atrium uses Aptible for managing their information security and compliance efforts, specifically around ISO 27001 and SOC 2.',
    photo: atriumPhoto,
    logo: atriumLogo,
    caseStudy: '/customers/atrium/'
  },
  {
    image: null,
    headline: (
      <React.Fragment>
        <h1 className={styles.quoteStart}>&ldquo;Aptible Comply is amazing.</h1>
        <h1>It's very easy <img src={arrowImage} alt="Aptible arrow" /></h1>
        <h1>to use, and the pre-built</h1>
        <h1>content is a huge win.&rdquo;</h1>
      </React.Fragment>
    ),
    description: 'Quadpay uses Aptible to build out best practice policies and procedures and to streamline answering VSAs.',
    photo: atriumPhoto,
    logo: quadpayLogo
  }
];

class CustomerCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openIdx: 0,
      timerRunning: true
    };

    this.animationInterval = null;
    this.stopAnimationTimeout = null;
    this.contentRef = React.createRef();
  }

  componentDidMount = () => {
    const stopAnimation = () => {
      this.contentRef.current.classList.remove(styles.animateIn);
    };
    
    const animate = () => {
      this.contentRef.current.classList.add(styles.animateIn);
      this.stopAnimationTimeout = setTimeout(stopAnimation, 9700);
    };

    this.stopAnimationTimeout = setTimeout(stopAnimation, 9700)

    this.animationInterval = setInterval(() => {
      if (this.state.openIdx === (customers.length - 1)) {
        this.setState({ openIdx: 0 }, animate);
      } else {
        this.setState({ openIdx: this.state.openIdx + 1 }, animate);
      }
    }, 10000);
  }

  componentWillUnmount = () => {
    this.clearTimers();
  }

  clearTimers = () => {
    clearTimeout(this.stopAnimationTimeout);
    clearInterval(this.animationInterval);
  }

  thumbnailClick = (idx) => {
    this.clearTimers();
    this.setState({ openIdx: idx, timerRunning: false });
  }

  render() {
    return (
      <Grid>
        <div className={`${styles.content} ${styles.animateIn} ${this.state.timerRunning ? '' : styles.animationStopped}`} ref={this.contentRef}>
          <h5>Our Customers</h5>

          {customers[this.state.openIdx].headline}
          <p className="L">
            {customers[this.state.openIdx].description}
          </p>

          {this.props.linkToCustomers &&
            <ArrowButton to="/customers/" text="Our Customers" />
          }

          {(!this.props.linkToCustomers && customers[this.state.openIdx].caseStudy) &&
            <ArrowButton to={customers[this.state.openIdx].caseStudy} text="Read The Case Study" />
          }
          
        </div>

        <div className={styles.mainImage}>
          <div className={styles.photo}>
            <img src={customers[this.state.openIdx].photo} alt="Customer" />
            <div className={styles.logo}>
              <img src={customers[this.state.openIdx].logo} alt="Customer Logo" />
            </div>
          </div>
        </div>

        <div className={styles.thumbnails}>
          {customers.map((customer, idx) => (
            <CustomerCarouselThumbnail
              key={idx}
              clickFn={() => this.thumbnailClick(idx)}
              timerRunning={this.state.timerRunning}
              customer={customers[idx]}
              active={this.state.openIdx === idx} />
          ))}
        </div>
      </Grid>
    )
  }
}

export default CustomerCarousel;
