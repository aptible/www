import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './RichText.module.css';

const renderAssetBlock = (node) => {
  const { file } = node.data.target.fields;
  return <img className={styles.image} src={file['en-US'].url} alt="contentful" />
}

const options = {
  renderNode: {
    'embedded-asset-block': renderAssetBlock
  }
}

export default ({ json }) => {
  return documentToReactComponents(json, options);
};
