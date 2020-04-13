import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../../components/layouts/AptibleLayout';
import Hero from '../../components/comply/open-rooms/Hero';
import WithoutComply from '../../components/comply/open-rooms/WithoutComply';
import UseAptible from '../../components/comply/open-rooms/UseAptible';
import SellFaster from '../../components/comply/open-rooms/SellFaster';
import SellSmarter from '../../components/comply/open-rooms/SellSmarter';
import ZeroTo from '../../components/footer/ZeroTo';

export default () => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible Comply | Automate Security and Compliance</title>
      <meta name="description" content="Aptible Comply Workflows automate the management of your company’s security, keeping track of everything you have to do to maintain compliance (and stay secure)." />
    </Helmet>
    <Hero />
    <WithoutComply />
    <UseAptible />
    <SellFaster />
    <SellSmarter />
    <ZeroTo />
  </AptibleLayout>
);
