import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Hero from '../components/company/Hero';
import Nav from '../components/shared/Nav';
import Vision from '../components/company/Vision';
import Values from '../components/company/Values';
import HowWePrioritize from '../components/company/HowWePrioritize';
import Team from '../components/company/Team';
import Join from '../components/company/Join';

const stickyNavItems = [
  { title: 'Vision', ref: '#vision' },
  { title: 'Values', ref: '#values' },
  { title: 'Team', ref: '#team' },
  { title: 'Careers', ref: '#careers' },
];

export default ({ data }) => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible | About Aptible</title>
      <meta name="description" content="Aptible is a remote team seeking to build trust on the internet. Learn more about Aptible and the team behind it." />
    </Helmet>
    <Hero webcamPhotos={data.webcamPhotos.edges} />
    <Nav items={stickyNavItems} />
    <Vision />
    <Values />
    <HowWePrioritize />
    <Team members={data.employees.edges} />
    <Join />
  </AptibleLayout>
);

export const query = graphql`
  query {
    employees: allContentfulEmployee(
      filter: { name: { ne: null } }
      sort: { fields: [name] }
    ) {
      edges {
        node {
          name
          jobTitle
          slug
          bio {
            bio
          }
          professionalPhoto {
            file {
              url
            }
          }
          funPhoto {
            file {
              url
            }
          }
        }
      }
    }

    webcamPhotos: allContentfulEmployee(
      filter: {
        webcamPhoto: {
          file: {
            url:{
              ne: null
            }
          }
        }
      }
    ) {
      edges {
        node {
          slug
          webcamPhoto {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
