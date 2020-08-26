import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './HelloBar.module.css';
import { cookies } from '../../lib/aptible';

const closeIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 1L1.32993 18.9924M18.6841 19L1 1.02118" stroke="white" strokeOpacity="0.7" strokeWidth="2" />
  </svg>
);

class HelloBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentDidMount = () => {
    if (typeof(window) === 'undefined') {
      return
    }

    if (cookies.get(this.cookieName())) {
      return false;
    }

    this.setState({ show: true });
  }

  cookieName = () => {
    return `hello-${this.props.id}`;
  }

  close = () => {
    const cookieExpiresAt = new Date();
    cookieExpiresAt.setDate(cookieExpiresAt.getDate() + 90);
    cookies.write(this.cookieName(), '1', cookieExpiresAt);

    this.setState({ show: false });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.show &&
          <div className={styles.container}>
            <Grid>
              <Link className={styles.content} to={this.props.to}>
                <p>
                  {this.props.callout && (
                    <span>{this.props.callout}</span>
                  )}
                  {this.props.text}
                </p>
              </Link>

              <div className={styles.close} onClick={this.close}>
                {closeIcon}
              </div>
            </Grid>
          </div>
        }
      </React.Fragment>
    )
  }
}

export default HelloBar;
