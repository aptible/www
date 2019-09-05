import React from 'react';
import ContentfulRichText from '../contentful/ContentfulRichText';

export default ({ resource }) => (
  <div>
    <ContentfulRichText json={resource.body.json} />

    {resource.webinarYoutubeLink &&
      <iframe
        width="560"
        height="315"
        src={resource.webinarYoutubeLink}
        title={resource.title}
        frameBorder="0"
        allowFullScreen="allowfullscreen" />
    }

    {resource.webinarSlidesLink &&
      <p>
        <a href={resource.webinarSlidesLink}>View Slides</a>
      </p>
    }
  </div>
);
