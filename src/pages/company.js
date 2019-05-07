import React from 'react';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Hero from '../components/company/Hero';
import Nav from '../components/shared/Nav';
import Vision from '../components/company/Vision';
import Values from '../components/company/Values';
import Team from '../components/company/Team';
import Join from '../components/company/Join';

const stickyNavItems = [
  { title: 'Vision', ref: null },
  { title: 'Values', ref: null },
  { title: 'Team', ref: null },
  { title: 'Careers', ref: null },
];

export default ({ data }) => (
  <AptibleLayout>
    <Hero />
    <Nav items={stickyNavItems} />
    <Vision />
    <Values />
    <Team members={data.team.edges} />
    <Join />
  </AptibleLayout>
);

export const query = graphql`
  query {
    team: allTeamYaml {
      edges {
        node {
          name
          title
          bio
        }
      }
    }
  }
`;
