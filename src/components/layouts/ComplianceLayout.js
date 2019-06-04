import React from 'react';
import AptibleLayout from '../layouts/AptibleLayout';
import { Grid } from '../grid/Grid';
import styles from './ComplianceLayout.module.css';

const searchIcon = (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.0002 21L14.6562 14.656" stroke="#33C69F" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#33C69F" strokeWidth="2" strokeMiterlimit="10" />
  </svg>
);

class ComplianceLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    if (window._st) {
      window._st('install', this.props.regulation.search_key, '2.0.0');
    }
  }

  render() {
    const SidebarComponent = this.props.SidebarComponent;

    return (
      <AptibleLayout>
        <div className={styles.container}>
          <Grid>
            <div className={styles.title}>
              <h5>{this.props.regulation.hero.subtitle}</h5>
              <h1>{this.props.title}</h1>
            </div>

            {this.props.SidebarComponent &&
              <div className={styles.sidebar}>
                <SidebarComponent regulation={this.props.regulation} />
              </div>
            }

            <div className={styles.searchContainer}>
              <input
                type="text"
                className={`compliance__search-bar ${styles.searchInput}`}
                placeholder="Search" />

              <div className={styles.searchIcon}>{searchIcon}</div>
            </div>

            <div className={styles.content} data-swiftype-index="true">
              <div className="compliance__search-container"></div>

              {this.props.children}
            </div>
          </Grid>
        </div>
        
      </AptibleLayout>
    )
  }
}

export default ComplianceLayout;
