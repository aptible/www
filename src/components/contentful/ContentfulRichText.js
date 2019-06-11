import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './RichText.module.css';

const renderAssetBlock = (node) => {
  const { title, description, file } = node.data.target.fields;
  return <img class={styles.image} src={file['en-US'].url} />
}

const options = {
  renderNode: {
    'embedded-asset-block': renderAssetBlock
  }
}

export default ({ json }) => {
  return documentToReactComponents(json, options);
};
