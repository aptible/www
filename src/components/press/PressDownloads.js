import React from 'react';
import styles from './PressDownloads.module.css';
import { Grid } from '../grid/Grid';
import logoWhiteSvg from '../../images/logos/aptible-logo-white.svg';
import logoWhitePng from '../../images/logos/aptible-logo-white.png';
import logoDarkSvg from '../../images/logos/aptible-logo-dark.svg';
import logoDarkPng from '../../images/logos/aptible-logo-dark.png';
import markSvg from '../../images/logos/mark.svg';
import markPng from '../../images/logos/mark.png';

const Download = ({ href, children, fileName}) => (
  <a class={styles.downloadLink} href={href} download={`${fileName}.svg`}>{children}</a>
);

const PressDownload = ({ fileName, title, className, downloads }) => (
  <div className={className}>
    <div className={styles.pressDownload}>
      <img src={downloads[0][1]} alt={title} />
      <h6>{title}</h6>
      <p className={styles.downloadOptions}>
        { downloads.map((d) => (
          <Download href={d[1]} fileName={fileName}>{d[0]}</Download>  
        )) }
      </p>
    </div>
  </div>
)

export default () => (
  <div className={styles.container}>
    <Grid rows="2">
      <h5 className={styles.sectionHeading}>Downloads</h5>
      <PressDownload
        className={styles.first}
        title="Aptible Logo - White"
        fileName='logo-white'
        downloads={[['↓ SVG', logoWhiteSvg], ['↓ PNG', logoWhitePng]]} />

      <PressDownload
        className={styles.middle}
        title="Aptible Logo - Dark"
        fileName='logo-dark'
        downloads={[['↓ SVG', logoDarkSvg], ['↓ PNG', logoDarkPng]]} />

      <PressDownload
        className={styles.last}
        title="Aptible Mark"
        fileName='mark'
        downloads={[['↓ SVG', markSvg], ['↓ PNG', markPng]]} />
    </Grid>
  </div>
)