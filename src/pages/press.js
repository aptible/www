import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Hero from '../components/press/Hero';
import FunFacts from '../components/press/FunFacts';
import PressDownloads from '../components/press/PressDownloads'
export default ({ data }) => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible | Newsroom</title>
      <meta name="description" content="Aptible is the leading security management platform for small companies. We help companies shorten sales cycles through security. We offer pricing plans that work for any business that needs to improve their security." />
    </Helmet>
    <Hero />
    <FunFacts />
    <PressDownloads />
  </AptibleLayout>
);
