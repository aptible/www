import React from 'react';
import { Link } from 'gatsby';
import styles from './Header.module.css';
import { Grid } from '../grid/Grid';
import logoImage from '../../images/aptible.svg';
import MainNavItem from './MainNavItem';
import MobileMenuItem from './MobileMenuItem';
import Products from './Products';
import Resources from './Resources';
import Mobile from './Mobile';

const dropDowns = {
  products: Products,
  resources: Resources,
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

  render() {
    let DropDownContent;
    if (this.state.navOpen && dropDowns[this.state.openSectionName]) {
      DropDownContent = dropDowns[this.state.openSectionName];
    }

    return (
      <div className={`${styles.headerContainer} ${this.state.navOpen ? styles.open : ''}`}>
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
              to="/use-cases/"
              gridColumn="4"
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
              title="Log In"
              to="https://dashboard.aptible.com/login"
              gridColumn="7"
            />

            <div className={styles.mobileNav}>
              <MobileMenuItem onClickFn={this.toggleNavSection} />
            </div>
          </Grid>

          {DropDownContent && <DropDownContent />}
        </header>
      </div>
    );
  }
}

export default Header;
