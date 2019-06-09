import React from 'react';

class WistiaVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const script1 = document.createElement('script');
    const script2 = document.createElement('script');

    script1.src = `https://fast.wistia.com/embed/medias/${this.props.videoId}.jsonp`;
    script1.async = true;

    script2.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);
  }

  render() {
    return (
      <div>
        <div className={`wistia_embed wistia_async_${this.props.videoId} videoFoam=true`} />
      </div>
    );
  }
}

export default WistiaVideo;
