import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Nav.module.css';
import SignupButton from '../signup/SignupButton';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.beaconRef = React.createRef();
    this.containerRef = React.createRef();
    this.navTimer = null;
    this.activeItemTimer = null;
  }

  componentDidMount = () => {
    this.toggleStickyNav();
    this.lookForActiveItem();
  }

  componentWillUnmount = () => {
    clearInterval(this.navTimer);
    clearInterval(this.activeItemTimer);
  }

  toggleStickyNav = () => {
    if (!this.beaconRef.current) {
      return
    }

    let beacon, container, beaconPosY, navVisible;

    this.navTimer = setInterval(() => {
      beacon = this.beaconRef.current;
      container = this.containerRef.current;
      beaconPosY = beacon.getBoundingClientRect().y;
      navVisible = getComputedStyle(container).getPropertyValue('visibility');

      if (beaconPosY < 1 && navVisible === 'hidden') {
        this.containerRef.current.style.visibility = 'visible';
      } else if (beaconPosY > 1 && navVisible === 'visible') {
        this.containerRef.current.style.visibility = 'hidden';
      }
    }, 500);
  }

  lookForActiveItem = () => {
    let scrollPosition;
    let reverseRefs = [...this.props.items].map((item) => item.ref).reverse();

    this.activeItemTimer = setInterval(() => {
      scrollPosition = window.scrollY + (window.innerHeight / 2);

      for (let id of reverseRefs) {
        const ref = window.document.getElementById(id.replace('#', ''));
        if (!ref) {
          return
        }

        const refY = ref.getBoundingClientRect().top + window.scrollY;

        if (scrollPosition >= refY) {
          this.setActiveItem(id);
          return
        }
      }
    }, 1000);
  }

  setActiveItem = (ref) => {
    for (let node of document.querySelectorAll(`.${styles.navItem}`)) {
      if (node.classList.contains(styles.active)) {
        node.classList.remove(styles.active);
      }
    }

    for (let node of document.querySelectorAll(`a[href='${ref}']`)) {
      if (node.classList.contains(styles.navItem)) {
        node.classList.add(styles.active);
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles.scrollBeacon} ref={this.beaconRef}></div>

        <div className={styles.container} ref={this.containerRef}>
          <Grid>
            <div className={`${styles.navItems} ${this.props.ctaText ? '' : styles.noCta}`}>
              {this.props.items.map((item, idx) => {
                return (
                  <a href={item.ref} className={styles.navItem} key={idx}>
                    <h6 className="small">{item.title}</h6>
                    <div className={styles.circle} />
                  </a>
                );
              })}
            </div>

            {this.props.ctaText && (
              <div className={styles.cta}>
                <SignupButton text={this.props.ctaText} />
              </div>
            )}
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default Nav;
