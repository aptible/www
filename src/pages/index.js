import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Hero from '../components/home/Hero';
import Section from '../components/shared/Section';
import ProductCarousel from '../components/home/ProductCarousel';
import FeaturesCarousel from '../components/home/FeaturesCarousel';
import Logos from '../components/home/Logos';
import Frameworks from '../components/home/Frameworks';
import ZeroTo from '../components/footer/ZeroTo';
import CustomerCards from '../components/home/CustomerCards';

const primarySections = [
  {
    id: 'products',
    title: 'Compliance and security solutions that build trust',
    body:
      'Making it simple for modern businesses to improve their data security and compliance programs.',
    module: <ProductCarousel />,
  },
  {
    id: 'features',
    title: 'Simplify building customer trust',
    body:
      'Comply and Deploy make it easier for compliance managers and developers to create customer trust.',
    module: (
      <FeaturesCarousel />
    ),
  },
  {
    id: 'customers',
    title: 'Modern business trust Aptible to help them build trust',
    body:
      'Hundreds of companies love Aptible for giving them the comprehensive platforms with intelligent automation to simplify their work.',
    module: <CustomerCards />,
  },
];

const secondarySections = [
  {
    id: 'frameworks',
    title: 'Security is our business',
    body:
      'We know how important data security is, it’s not just what we help you with, it’s also core to how we operate.',
    module: <Frameworks />,
  }
];

const IndexPage = () => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible | Security Management Platform</title>
      <meta
        name="description"
        content="Aptible is the leading trust management platform for B2B SaaS teams that offers compliance monitoring and workflow automation, audit ready hosting, and fast and easy audit prep."
      />
    </Helmet>

    <Hero />

    {primarySections.map(section => (
      <Section key={section.id} title={section.title} body={section.body}>
        {section.module}
      </Section>
    ))}

    <Logos />

    {secondarySections.map(section => (
      <Section key={section.id} title={section.title} body={section.body}>
        {section.module}
      </Section>
    ))}

    <ZeroTo />
  </AptibleLayout>
);

export default IndexPage;
