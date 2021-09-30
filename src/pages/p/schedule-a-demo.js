import React from 'react';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';

import Title from './components/Title';
import { useQueryParam } from '../../hooks/use-query-param';
import styles from './VideoLandingPage.module.css';

const availableCalendars = {
  'frank-macreery': 1,
  'skylar-anderson': 1
}

const DEFAULT_CALENDAR = 'frank-macreery';

const getCalendarIdFromQueryParam = (calendar) => {
  return availableCalendars[calendar] ? calendar : DEFAULT_CALENDAR;
}

export default () => {
  const { calendar } = useQueryParam('calendar');
  const calendarId = getCalendarIdFromQueryParam(calendar);

  return (
    <div>
      <Helmet>
        <title>Aptible | Schedule a Demo</title>
        <meta
          name="description"
          content="Go from zero to HITRUST-compliant Docker deployment in minutes"
        />
        <script
          type="text/javascript"
          defer
          src="//static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
        />
      </Helmet>
      <div className={styles.layout}>
        <div className={classnames(styles.container, styles.textCenter)}>
          <Title
            title="Schedule time with Aptible"
            summary="Use the scheduler below to arrange a demo time with Aptible."
          />

          <div className={styles.meetingsFormWrapper}>
            <div
              className="meetings-iframe-container"
              data-src={`https://meetings.hubspot.com/${calendarId}?embed=true`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
