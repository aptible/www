import React from 'react';
import { analytics, cookies } from '../../lib/aptible';

const SESSION_REF_URL_COOKIE = '_aptible_session_ref';

class Analytics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    if (typeof(window) === 'undefined') {
      return
    }

    this.cookieParamsForTracking();
    this.cookieSessionRefUrl();
  }

  cookieParamsForTracking = () => {
    const expiresAt = this.paramsCookieExpirationDate();

    // Save all UTM params to a cookie for later conversions
    for (let param of analytics.utmVars) {
      if (analytics.getParam(param)) {
        cookies.write(param, analytics.getParam(param), expiresAt);
      }
    }
  }

  paramsCookieExpirationDate = () => {
    const cookieExpiresAt = new Date();
    cookieExpiresAt.setDate(cookieExpiresAt.getDate() + 1);

    return cookieExpiresAt;
  }

  cookieSessionRefUrl = () => {
    let sessionRefUrl = cookies.get(SESSION_REF_URL_COOKIE);

    // Cookie their session ref URL for signup tracking
    if (sessionRefUrl === null || sessionRefUrl === undefined) {
      sessionRefUrl = '';

      if (document.referrer && document.referrer.length > 0 && document.referrer.indexOf('https://www.aptible.com') === -1) {
        sessionRefUrl = document.referrer;
      }

      cookies.write(SESSION_REF_URL_COOKIE, sessionRefUrl, this.sessionCookieExpirationDate());
    }
  }

  sessionCookieExpirationDate = () => {
    const cookieExpiresAt = new Date();
    cookieExpiresAt.setHours(cookieExpiresAt.getHours() + 1);

    return cookieExpiresAt;
  }

  render() {
    return null;
  }
}

export default Analytics;
