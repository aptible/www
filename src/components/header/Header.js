import React from 'react';
import { Link } from 'gatsby';
import styles from './Header.module.css';
import { Grid } from '../grid/Grid';
import logoImage from '../../images/aptible.svg';
import Button from '../buttons/Button';
import SignupButton from '../signup/SignupButton';
import MainNavItem from './MainNavItem';
import MobileMenuItem from './MobileMenuItem';
import Products from './Products';
import Resources from './Resources';
import Company from './Company';
import UseCases from './UseCases';
import Mobile from './Mobile';

const dropDowns = {
  products: Products,
  resources: Resources,
  company: Company,
  useCases: UseCases,
  mobile: Mobile
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false,
      openSectionName: null
    };
  }

  toggleNavSection = (sectionName) => {
    if (this.state.navOpen && sectionName === this.state.openSectionName) {
      this.setState({ navOpen: false, openSectionName: null });
    } else if (this.state.navOpen) {
      this.setState({ openSectionName: sectionName });
    } else {
      this.setState({ navOpen: true, openSectionName: sectionName });
    }
  }

  closeNav = () => {
    this.setState({ navOpen: false, openSectionName: null });
  }

  render() {
    let DropDownContent;
    if (this.state.navOpen && dropDowns[this.state.openSectionName]) {
      DropDownContent = dropDowns[this.state.openSectionName];
    }

    return (
      <div className={`${styles.headerContainer} ${this.state.navOpen ? styles.open : ''}`}>
        <div className={styles.navOverlay} onClick={this.closeNav}></div>
        <header className={`${styles.header} `}>
          <Grid>
            <Link to="/" className={styles.logo}>
              <img src={logoImage} alt="Aptible logo" />
            </Link>

            <MainNavItem
              title="Products"
              gridColumn="3"
              onClickFn={this.toggleNavSection}
              sectionName="products"
              openSectionName={this.state.openSectionName}
            />
            <MainNavItem
              title="Use Cases"
              gridColumn="4"
              onClickFn={this.toggleNavSection}
              sectionName="useCases"
              openSectionName={this.state.openSectionName}
            />
            <MainNavItem
              title="Customers"
              to="/customers/"
              gridColumn="5"
            />
            <MainNavItem
              title="Resources"
              gridColumn="6"
              onClickFn={this.toggleNavSection}
              sectionName="resources"
              openSectionName={this.state.openSectionName}
            />
            <MainNavItem
              title="Company"
              gridColumn="7"
              onClickFn={this.toggleNavSection}
              sectionName="company"
              openSectionName={this.state.openSectionName}
            />

            <div className={styles.mobileNav}>
              <MobileMenuItem navOpen={this.state.navOpen} onClickFn={this.toggleNavSection} />
            </div>

            <div className={styles.cta}>
              <Grid>
                <div className={styles.ctaLogIn}>
                  <Button size="small" href="https://dashboard.aptible.com/login">Log In</Button>
                </div>

                <div className={styles.ctaSignUp}>
                  {window.location.pathname.includes('deploy') ? (
                    <SignupButton size="small" text="Start with Deploy" product="deploy" />
                  ) : (
                    <SignupButton size="small" text="Schedule a Demo" product="comply" />
                  )}
                </div>
              </Grid>
            </div>
          </Grid>

          {DropDownContent && <DropDownContent />}
        </header>
      </div>
    );
  }
}

export default Header;
