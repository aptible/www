import React from 'react';
import { Link } from 'gatsby';
import styles from './Header.module.css';
import { Grid } from '../grid/Grid';
import logoImage from '../../images/aptible.svg';
import Button from '../buttons/Button';
import SignupButton from '../signup/SignupButton';
import MainNavItem from './MainNavItem';
import MobileMenuItem from './MobileMenuItem';
import Resources from './Resources';
import Solutions from './Solutions';
import Company from './Company';
import Mobile from './Mobile';
import HeaderContext from './HeaderContext';

const dropDowns = {
  resources: Resources,
  company: Company,
  mobile: Mobile,
  solutions: Solutions,
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false,
      openSectionName: null,
      isDeployPage: false,
      isRoomsPage: false,
    };
  }

  toggleNavSection = sectionName => {
    if (this.state.navOpen && sectionName === this.state.openSectionName) {
      this.setState({ navOpen: false, openSectionName: null });
    } else if (this.state.navOpen) {
      this.setState({ openSectionName: sectionName });
    } else {
      this.setState({ navOpen: true, openSectionName: sectionName });
    }
  };

  closeNav = () => {
    this.setState({ navOpen: false, openSectionName: null });
  };

  componentDidMount = () => {
    if (typeof window === 'undefined') {
      return;
    }

    if (window.location.pathname) {
      this.setState({
        isDeployPage: window.location.pathname.includes('deploy'),
      });

      this.setState({
        isRoomsPage: window.location.pathname.includes('comply/rooms'),
      });
    }
  };

  render() {
    const { openSectionName } = this.state;
    let DropDownContent;
    if (this.state.navOpen && dropDowns[openSectionName]) {
      DropDownContent = dropDowns[openSectionName];
    }

    const headerCta = (
      <SignupButton size="small" text="Sign up for free" product="deploy" />
    );

    return (
      <HeaderContext.Provider value={this.state}>
        <div
          className={`${styles.headerContainer} ${
            this.state.navOpen ? styles.open : ''
          }`}
        >
          <div className={styles.navOverlay} onClick={this.closeNav} />
          <header className={`${styles.header} `}>
            <Grid>
              <div className={styles.navRow}>
                <Link to="/" className={styles.logo}>
                  <img src={logoImage} alt="Aptible logo" />
                </Link>
                <div className={styles.navItems}>
                  <MainNavItem
                    title="Product"
                    onClickFn={this.toggleNavSection}
                    sectionName="solutions"
                    openSectionName={openSectionName}
                  />
                  <MainNavItem title="Pricing" to="/pricing-plans" />
                  <MainNavItem
                    title="Customers"
                    to="/customers/"
                    gridColumn="6"
                  />
                  <MainNavItem
                    title="Developers"
                    gridColumn="7"
                    onClickFn={this.toggleNavSection}
                    sectionName="resources"
                    openSectionName={openSectionName}
                  />

                  <MainNavItem
                    title="Company"
                    onClickFn={this.toggleNavSection}
                    sectionName="company"
                    openSectionName={openSectionName}
                  />

                  <MainNavItem
                    title="Docs"
                    to="https://deploy-docs.aptible.com"
                  />

                  <div className={styles.mobileNav}>
                    <MobileMenuItem
                      navOpen={this.state.navOpen}
                      onClickFn={this.toggleNavSection}
                    />
                  </div>

                  <div className={styles.cta}>
                    <Grid>
                      <div className={styles.ctaLogIn}>
                        <Button
                          size="small"
                          href="https://account.aptible.com/login"
                        >
                          Log In
                        </Button>
                      </div>

                      <div className={styles.ctaSignUp}>{headerCta}</div>
                    </Grid>
                  </div>
                </div>
              </div>
            </Grid>

            {DropDownContent && <DropDownContent />}
          </header>
        </div>
      </HeaderContext.Provider>
    );
  }
}

export default Header;
