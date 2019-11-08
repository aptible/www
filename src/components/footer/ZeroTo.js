import React from 'react';
import styles from './ZeroTo.module.css';
import { Grid } from '../grid/Grid';
import SignupButton from '../signup/SignupButton';
import arrowImage from '../../images/arrows/zero-to.svg';
import GridLinesForSection from '../grid/GridLinesForSection';
import { throttle } from '../../lib/util';

const TARGET_VIEWPORT_PERCENTAGE = 0.5;

class ZeroTo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.tickerRef = React.createRef();
    this.startScrollY = 0;
    this.targetScrollY = 0;
    this.totalScrollDistance = 0;
    this.lastScrollPercent = 0;
  }

  componentDidMount() {
    if ('IntersectionObserver' in window) {
      let observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.startAnimation();
        } else {
          this.stopAnimation();
        }
      });
      observer.observe(this.tickerRef.current);
    } else {
      // TODO: fallback show "audit-ready"
    }
  }

  startAnimation() {
    this.startScrollY = window.scrollY;
    this.targetScrollY = this.calculateTargetScrollPosition();
    this.totalScrollDistance = this.targetScrollY - this.startScrollY;

    window.addEventListener('scroll', this.scrollListener);
  }

  stopAnimation() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  calculateTargetScrollPosition() {
    const elYPosition = this.tickerRef.current.getBoundingClientRect().y + window.scrollY;
    const halfViewport = window.innerHeight * TARGET_VIEWPORT_PERCENTAGE;

    return elYPosition - halfViewport;
  }

  scrollListener = throttle(() => {
    const currentDistance = window.scrollY - this.startScrollY;

    let percentScrolled = currentDistance / this.totalScrollDistance;
    if (percentScrolled < 0) {
      percentScrolled = 0;
    } else if (percentScrolled > 1) {
      percentScrolled = 1;
    }

    const percentInt = parseInt(percentScrolled * 100);
    if (percentInt !== this.lastScrollPercent) {
      this.lastScrollPercent = percentInt;
      window.requestAnimationFrame(() => {
        this.tickerRef.current.children[0].style.transform = `translateY(-${percentInt}%)`;
      })
    }
  }, 100);

  render() {
    return (
      <div className={styles.zero}>
        <Grid rows="2">
          <div className={styles.zeroTo}><h1>Beyond</h1></div>
          <div className={styles.arrow}><img src={arrowImage} alt="Arrow" /></div>
          <div className={styles.protocols} ref={this.tickerRef}>
            <div className={styles.protocolTicker}>
              <h1>SOC 2</h1>
              <h1>ISO 27001</h1>
              <h1>HIPAA</h1>
              <h1>GDPR</h1>
              <h1>Audit-Ready</h1>
            </div>
          </div>

          <div className={styles.start}>
            <h4>Start your security management journey now.</h4>
          </div>
          <div className={styles.button}>
            <SignupButton text="Get Started" theme="black" />
          </div>
        </Grid>

        <GridLinesForSection />
      </div>
    );
  }
}

export default ZeroTo;
