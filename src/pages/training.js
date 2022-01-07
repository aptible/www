import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Introduction from '../components/training/Introduction';
import TrainingCards from '../components/training/TrainingCards';
import training from '../data/training.json';

export default ({ data }) => {
  return (
    <AptibleLayout>
      <Helmet>
        <title>Aptible | Training Library</title>
        <meta
          name="description"
          content="Free and open source security and compliance training"
        />
      </Helmet>
      <Introduction />
      <TrainingCards training={training} />
    </AptibleLayout>
  );
};

