import React from 'react';
import { Helmet } from 'react-helmet';
import shareImage from '../../images/logos/aptible-logo-social.png';

export default ({
  title,
  titlePrefix = 'Aptible',
  description,
  image,
  section,
  slug,
}) => {
  const urlPrefix = 'https://www.aptible.com';
  const url = `${urlPrefix}${section ? `/${section}` : ''}${slug ? `/${slug}` : ''}`;

  return (
    <Helmet>
      <title>{titlePrefix} | {title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* OpenGraph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || `${urlPrefix}${shareImage}`} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Aptible" />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@aptible" />
      <meta name="twitter:creator" content="@aptible" />
      <meta name="twitter:title" content={title} />
    </Helmet>
  );
};
