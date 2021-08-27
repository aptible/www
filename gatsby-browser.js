import './src/styles/global.css';
import './src/styles/typography.css';
import './src/styles/forms.css';
import './src/styles/search.css';
import './src/styles/tables.css';

export function onRouteUpdate({ location, prevLocation }) {
  window.aptible.event('pageview', null);

  // Re-send Rollworks pixel on pushstate navigation changes
  if (prevLocation && window.__adroll) {
    window.__adroll.record_user({});
  }
};
