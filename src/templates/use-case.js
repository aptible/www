import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Section from '../components/shared/Section';
import Hero from '../components/use-cases/Hero';
import Blocks from '../components/use-cases/Blocks';
import ZeroTo from '../components/footer/ZeroTo';

const UseCaseTemplate = ({ pageContext }) => {
  const { title, body, sections, illustrationKey } = pageContext;

  const description = Array.isArray(body) ? body[0] : body;

  return (
    <AptibleLayout>
      <Helmet>
        <title>Aptible | Use Cases | {title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <Hero title={title} body={body} illustrationKey={illustrationKey} />

      {sections.map(section => (
        <Section key={section.title} title={section.title} body={section.body}>
          <Blocks blocks={section.blocks} />
        </Section>
      ))}

      <ZeroTo />
    </AptibleLayout>
  );
};

export default UseCaseTemplate;
