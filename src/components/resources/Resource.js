import React from 'react';
import ContentfulRichText from '../contentful/ContentfulRichText';

export default ({ resource }) => (
  <div>
    <ContentfulRichText json={resource.body.json} />
  </div>
);
