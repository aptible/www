import React from 'react';
import AptibleLayout from '../../components/layouts/AptibleLayout';
import FeaturesHero from '../../components/deploy/FeaturesHero';
import FeaturesGrid from '../../components/deploy/FeaturesGrid';
import DivisionOfResponsibility from '../../components/deploy/DivisionOfResponsibility';
import FeaturesLeft from '../../components/deploy/FeaturesLeft';
import ZeroTo from '../../components/footer/ZeroTo';

export default () => (
  <AptibleLayout>
    <FeaturesHero />
    <FeaturesGrid />
    <DivisionOfResponsibility />
    <FeaturesLeft />
    <ZeroTo />
  </AptibleLayout>
);
