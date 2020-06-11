import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../../grid/Grid';
import ContentfulRichText from '../../contentful/ContentfulRichText';
import Button from '../../buttons/Button';
import AssetsList from './AssetsList';
import ControlsList from './ControlsList';
import EvidenceChecks from './EvidenceChecks';
import CustomerQuote from './CustomerQuote';
import Logo from './Logo';
import styles from './Detail.module.css';

export default ({ post }) => {
  const {
    name,
    logo,
    description,
    installUrl,
    documentationUrl,
    body,
    customerQuote,
    assets,
    controls,
    evidenceChecks,
    scopes,
  } = post;

  return (
    <div className={styles.container}>
      <Grid>
        <div className={styles.link}>
          <Link to="/comply/integrations">&#8592; Back to all integrations</Link>
        </div>

        <div className={styles.header}>
          <h1>{name} integration</h1>
          <Logo
            src={logo.file.url}
            width={logo.file.details.image.width / 2}
            alt={`${name} integration logo`}
          />
          <p>{description}</p>

          <div className={styles.button}>
            <Button href={installUrl}>Install</Button>
          </div>
        </div>

        <div className={styles.content}>
          <h2>Integration Details</h2>
          <div className={styles.body}>
            <ContentfulRichText json={body.json} />
          </div>
        </div>

        <aside className={styles.sidebar}>
          {assets && (
            <div className={styles.sidebarSection}>
              <h4>Assets Synced</h4>
              <AssetsList assets={assets} stacked />
            </div>
          )}

          {controls && (
            <div className={styles.sidebarSection}>
              <h4>Controls Automated</h4>
              <ControlsList controls={controls} stacked />
            </div>
          )}

          {evidenceChecks && (
            <div className={styles.sidebarSection}>
              <h4>Evidence Checks Performed</h4>
              <EvidenceChecks evidenceChecks={evidenceChecks} />
            </div>
          )}

          {scopes && (
            <div className={styles.sidebarSection}>
              <h4>Integration Scopes</h4>
              <ul className={styles.scopes}>
                {scopes.map(scope => {
                  const tag = scope.substring(0, scope.indexOf(':'));
                  return (
                    <li key={scope}>
                      {tag && <b>{tag}:{' '}</b>}
                      {tag ? scope.replace(`${tag}:`, '') : scope}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <div className={styles.sidebarSection}>
            <h4>Learn More</h4>
            <p className={styles.documentationUrl}>
              <a href={documentationUrl}>{`${name} Integration Documentation`}</a>
            </p>
          </div>
        </aside>

        {customerQuote && (
          <div className={styles.quote}>
            <CustomerQuote customerQuote={customerQuote} />
          </div>
        )}
      </Grid>
    </div>
  );
};
