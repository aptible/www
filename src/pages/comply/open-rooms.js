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
      <title>Aptible Comply | Sell faster and smarter with compliance datarooms</title>
      <meta name="description" content="Aptible Comply’s Open Rooms is a dataroom solution for B2B Saas teams who need to close deals quicker by delivering confidential security documentation to customers more efficiently." />
    </Helmet>
    <Hero />
    <WithoutComply />
    <UseAptible />
    <SellFaster />
    <SellSmarter />
    <ZeroTo />
  </AptibleLayout>
);
