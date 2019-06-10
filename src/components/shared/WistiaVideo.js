import React from 'react';

class WistiaVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    if (typeof (window) === 'undefined') {
      return
    }

    const script1 = window.document.createElement('script');
    const script2 = window.document.createElement('script');

    script1.src = `https://fast.wistia.com/embed/medias/${this.props.videoId}.jsonp`;
    script1.async = true;

    script2.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    script2.async = true;

    window.document.body.appendChild(script1);
    window.document.body.appendChild(script2);
  }

  render() {
    return (
      <div>
        <div className={`wistia_embed wistia_async_${this.props.videoId} videoFoam=true ${this.props.autoPlay ? 'autoPlay=true' : ''}`} />
      </div>
    );
  }
}

export default WistiaVideo;
