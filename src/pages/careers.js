import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Hero from '../components/careers/Hero';
import PhotoCarousel from '../components/careers/PhotoCarousel';
import MapBackground from '../components/careers/MapBackground';
import Culture from '../components/careers/Culture';
import QuotesCarousel from '../components/careers/QuotesCarousel';
import Benefits from '../components/careers/Benefits';
import CurrentOpenings from '../components/careers/CurrentOpenings';

export default ({ data }) => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible | Careers</title>
      <meta name="description" content="Aptible is a remote team seeking to build trust on the internet. Learn more about open opportunities at Aptible." />
    </Helmet>
    <Hero />
    <PhotoCarousel />
    <MapBackground>
      <Culture />
      <QuotesCarousel quotedEmployees={data.quotedEmployees.edges} />
      <Benefits />
    </MapBackground>
    <CurrentOpenings jobs={data.jobs.edges} />
  </AptibleLayout>
);

export const query = graphql`
  query {
    quotedEmployees: allContentfulEmployee(
      filter: {
        slug: {
          in: [
            "ashley-mathew", "chris-gomes", "elyssa-cendana", "david-wen",
            "mia-lopez", "sarah-veirs", "zachary-starr-glasser"
          ]
        }
      }
    ) {
      edges {
        node {
          slug
          professionalPhoto {
            file {
              url
            }
          }
        }
      }
    }
    jobs: allLever(
      sort: {
        fields: [categories___team]
      }
    ) {
      edges {
        node {
          text
          hostedUrl
          categories {
            team
            location
          }
        }
      }
    }
  }
`;
