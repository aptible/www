import React from 'react';

const Background = ({
  children,
  attachment = null,
  clip = null,
  color = null,
  image = null,
  origin = null,
  position = null,
  repeat = null,
  size = null,
}) => {
  const backgroundStyle = {
    backgroundAttachment: attachment,
    backgroundClip: clip,
    backgroundColor: color,
    backgroundImage: image ? `url(${image})` : null,
    backgroundOrigin: origin,
    backgroundPosition: position,
    backgroundRepeat: repeat,
    backgroundSize: size,
  };

  return <div style={backgroundStyle}>{children}</div>;
};

export default Background;
