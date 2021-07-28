export const utmVars = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'gclid',
];

export const events = {
  EMAIL_COLLECTED: 'Email Collected',
  SIGNUP_NEWSLETTER: 'Newsletter Signup',
  SIGNUP_DRIFT: 'Drift Email Collected',
  COOKIE_CONSENT: 'Cookie Consent Dismissed',
};

export function allParams() {
  const params = {};

  const queryString =
    window.location.search[0] === '?'
      ? window.location.search.substr(1)
      : window.location.search;
  if (queryString.length < 1) {
    return params;
  }

  const pairs = queryString.split('&');
  for (let i = 0; i < pairs.length; i++) {
    let pair = pairs[i].split('=');
    params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }

  return params;
}

export function getParam(key) {
  return allParams()[key];
}

export function allUtmVars() {
  let utms = {};

  const params = allParams();
  for (let key in params) {
    if (utmVars.indexOf(key) !== -1) {
      utms[key] = params[key];
    }
  }

  return utms;
}

export function currentURL() {
  return `${window.location.origin}${window.location.pathname}`;
}

export function trackOnLinkedIn(pid = '42067', conversionId = '2213244') {
  new Image().src = `https://px.ads.linkedin.com/collect/?pid=${pid}&conversionId=${conversionId}&fmt=gif`;
}

export function event(name, payload = {}) {
  if (window.analytics) {
    payload = Object.assign({}, payload, allUtmVars());
    payload['url'] = currentURL();

    window.analytics.track(name, payload);
  }
}

export function identify(email) {
  // Do not send to Drift: updating the user email now would result in us
  // losing track of who the user is and breaking any open chat they might
  // have.
  if (window.analytics) {
    window.analytics.identify(
      email,
      {
        email: email,
        url: currentURL(),
      },
      { Drift: false },
    );
  }
}
