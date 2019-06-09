import React from 'react';
import { Link } from 'gatsby';
import Button from '../buttons/Button';
import Portal from '../shared/Portal';
import styles from './CookieConsent.module.css';
import { cookies } from '../../lib/aptible';

function CookieConsent(props) {
  return (
    <Portal>
      <InnerCookieConsent {...props} />
    </Portal>
  );
}

class InnerCookieConsent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentDidMount = () => {
    if (typeof (window) === 'undefined') {
      return;
    }

    if (cookies.get('cookieConsent')) {
      return;
    }

    this.setState({ show: true });
  }

  close = () => {
    const cookieExpiresAt = new Date();
    cookieExpiresAt.setDate(cookieExpiresAt.getDate() + 90);
    cookies.write('cookieConsent', '1', cookieExpiresAt);

    this.setState({ show: false });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.show &&
          <div className={styles.container}>
            <p>
              This site uses cookies to store information on your computer.
              Some are essential to make our site work; others help us improve
              the user experience. By using the site, you consent to the
              placement of these cookies.
            </p>

            <div className={styles.ctas}>
              <Button onClickFn={this.close}>Dismiss</Button>
              <p className={styles.privacy}>
                Read our <Link to="/legal/privacy/">Privacy Statement</Link>
              </p>
            </div>
          </div>
        }
      </React.Fragment>
    )
  }
}

export default CookieConsent;
