import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './CustomerCarousel.module.css';
import ArrowButton from '../buttons/ArrowButton';
import CustomerCarouselThumbnail from './CustomerCarouselThumbnail';

import fortmaticPhoto from '../../images/customers/carousel/fortmatic.jpg';
import atriumPhoto from '../../images/customers/carousel/atrium.jpg';
import quadpayPhoto from '../../images/customers/carousel/quadpay.jpg';

import atriumLogo from '../../images/customers/logos/atrium.png';
import fortmaticLogo from '../../images/customers/logos/fortmatic.svg';
import quadpayLogo from '../../images/customers/logos/quadpay.svg';

const customers = [
  {
    image: null,
    headline: (
      <React.Fragment>
        <h2><span className={styles.quoteStart}>&ldquo;</span>We want our end users to know we take security very seriously.</h2>
        <h2>With Aptible we were able to secure our SOC 2 audit very quickly.&rdquo;</h2>
      </React.Fragment>
    ),
    description: 'Fortmatic uses Aptible Comply to build their Security Management Program and secured their SOC 2 audit in a fraction of the time.',
    photo: fortmaticPhoto,
    logo: fortmaticLogo
  },
  {
    image: null,
    headline: (
      <React.Fragment>
        <h2><span className={styles.quoteStart}>&ldquo;</span>We needed a system that made it easy to operate a Security Management program, that tracked our efforts and helped us share our position with customers&hellip;with Aptible we’ve done that.&rdquo;</h2>
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
        <h2><span className={styles.quoteStart}>&ldquo;</span>Aptible Comply is amazing.</h2>
        <h2>It's very easy to use, and the pre-built content is a huge win.&rdquo;</h2>
      </React.Fragment>
    ),
    description: 'Quadpay uses Aptible to build out best practice policies and procedures and to streamline answering VSAs.',
    photo: quadpayPhoto,
    logo: quadpayLogo
  }
];

class CustomerCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openIdx: 0,
      timerRunning: true,
      animateIn: true
    };

    this.animationInterval = null;
    this.stopAnimationTimeout = null;
    this.contentRef = React.createRef();
  }

  componentDidMount = () => {
    const stopAnimation = () => {
      this.stopAnimationTimeout = setTimeout(() => {
        this.setState({ animateIn: false });
      }, 9000)
    };

    stopAnimation();

    this.animationInterval = setInterval(() => {
      const nextIdx = this.state.openIdx === (customers.length - 1) ? 0 : this.state.openIdx + 1;
      this.setState({ openIdx: nextIdx, animateIn: true }, stopAnimation);
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
        <div className={`${styles.content} ${this.state.animateIn ? styles.animateIn : ''} ${this.state.timerRunning ? '' : styles.animationStopped}`} ref={this.contentRef}>
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
