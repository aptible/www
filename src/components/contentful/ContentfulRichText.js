import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import WistiaVideo from '../shared/WistiaVideo';
import styles from './RichText.module.css';

const renderAssetBlock = (node) => {
  const { file } = node.data.target.fields;
  return <img className={styles.image} src={file['en-US'].url} alt="contentful" />
}

const renderWistiaBlockquote = (node, children) => {
  if (node.content.length === 1 && node.content[0].content.length === 1) {
    if (node.content[0].content[0].value.startsWith('wistia:')) {
      const videoId = node.content[0].content[0].value.replace('wistia:', '');

      return (
        <div className={styles.video}>
          <WistiaVideo videoId={videoId} />
        </div>
      )
    }
  }

  return <blockquote>{children}</blockquote>;
}

const options = {
  renderNode: {
    'embedded-asset-block': renderAssetBlock,
    'blockquote': renderWistiaBlockquote
  }
}

export default ({ json }) => {
  return documentToReactComponents(json, options);
};
