import React from 'react';
import { Link } from 'gatsby';
import styles from './Header.module.css';
import { Grid } from '../grid/Grid';
import logoImage from '../../images/aptible.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`${styles.headerContainer}`}>
        <header className={`${styles.header}`}>
          <Grid>
            <Link to="/" className={styles.logo}>
              <img src={logoImage} alt="Aptible logo" />
            </Link>
          </Grid>
        </header>
      </div>
    );
  }
}

export default Header;
