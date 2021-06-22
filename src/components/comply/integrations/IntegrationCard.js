import React from 'react';
import { Link } from 'gatsby';
import Arrow from '../../shared/Arrow';
import AssetsList from './AssetsList';
import ControlsList from './ControlsList';
import Logo from './Logo';
import styles from './IntegrationCard.module.css';

export default ({ integration }) => {
  const { name, shortDescription, slug, logo, assets, controls } = integration;

  return (
    <Link className={styles.link} to={`/comply/integrations/${slug}/`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Logo
            src={logo.file.url}
            width={logo.file.details.image.width / 4}
            alt={`${name} integration logo`}
          />

          <div className={styles.arrow}>
            <Arrow />
          </div>
        </div>
        <div className={styles.body}>
          <h4>{name}</h4>
          <p>{shortDescription}</p>
          <div className={styles.footer}>
            <div className={styles.assets}>
              <AssetsList assets={assets} />
            </div>
            <ControlsList controls={controls} />
          </div>
        </div>
      </div>
    </Link>
  );
};
