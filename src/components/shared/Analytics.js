import React from 'react';
import { analytics, cookies } from '../../lib/aptible';

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
  }

  cookieParamsForTracking = () => {
    const expiresAt = this.cookieExpirationDate();

    // Save all UTM params to a cookie for later conversions
    for (let param of analytics.utmVars) {
      if (analytics.getParam(param)) {
        cookies.write(param, analytics.getParam(param), expiresAt);
      }
    }
  }

  cookieExpirationDate = () => {
    const cookieExpiresAt = new Date();
    cookieExpiresAt.setDate(cookieExpiresAt.getDate() + 1);

    return cookieExpiresAt;
  }

  render() {
    return null;
  }
}

export default Analytics;
