import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../../components/layouts/AptibleLayout';
import Hero from '../../components/comply/rooms/Hero';
import WithoutComply from '../../components/comply/rooms/WithoutComply';
import UseAptible from '../../components/comply/rooms/UseAptible';
import SellFaster from '../../components/comply/rooms/SellFaster';
import SellSmarter from '../../components/comply/rooms/SellSmarter';
import ZeroTo from '../../components/footer/ZeroTo';

export default () => (
  <AptibleLayout>
    <Helmet>
      <title>
        Aptible Comply | Sell faster and smarter with compliance datarooms
      </title>
      <meta
        name="description"
        content="Aptible Comply Rooms is a dataroom solution for B2B SaaS teams who need to close deals quicker by delivering confidential security documentation to customers more efficiently."
      />
    </Helmet>
    <Hero />
    <WithoutComply />
    <UseAptible />
    <SellFaster />
    <SellSmarter />
    <ZeroTo />
  </AptibleLayout>
);
