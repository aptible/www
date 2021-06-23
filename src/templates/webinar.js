import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Webinar from '../components/webinars/Webinar';

export default ({ data }) => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible | {data.webinar.title}</title>
      <meta name="description" content={data.webinar.subheadline} />
    </Helmet>
    <Webinar webinar={data.webinar} />
  </AptibleLayout>
);

export const query = graphql`
  query($slug: String!) {
    webinar: contentfulWebinar(slug: { eq: $slug }) {
      title
      subheadline
      webinarDate(formatString: "dddd, MMMM D, YYYY")
      webinarTime
      webinarTimeZone
      marketoFormId
      formOptInOverride
      body {
        json
      }
      presenter2 {
        name
        jobTitle
        professionalPhoto {
          file {
            url
          }
        }
      }
      wistiaVideoId
      transcript {
        json
      }
    }
  }
`;
