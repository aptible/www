import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './GreatCompany.module.css';

import healthCatalystLogo from '../../images/customers/logos/health-catalyst.png';
import ableHealthLogo from '../../images/customers/logos/able-health.png';
import healthifyLogo from '../../images/customers/logos/healthify.svg';
import mdsaveLogo from '../../images/customers/logos/mdsave.svg';
import pathaiLogo from '../../images/customers/logos/pathai.png';
import medicalMemoryLogo from '../../images/customers/logos/medical-memory-logo.png';
import pagerLogo from '../../images/customers/logos/pager-logo.png';
import rightwayLogo from '../../images/customers/logos/rightway-logo.png';
import aidinLogo from '../../images/customers/logos/aidin-logo.png';
import glidianLogo from '../../images/customers/logos/glidian-logo.png';
import projectBeaconLogo from '../../images/customers/logos/project-beacon-logo.png';
import himsHersLogo from '../../images/customers/logos/hims-hers-logo.png';
import careportLogo from '../../images/customers/logos/careport-logo.png';
import dorsataLogo from '../../images/customers/logos/dorsata.png';
import greenspaceLogo from '../../images/customers/logos/greenspace.png';
import stellarLogo from '../../images/customers/logos/stellar-health.png';
import aliceLogoLogo from '../../images/customers/logos/alice-logo.png';
import canvasLogo from '../../images/customers/logos/canvas-logo.png';
import workItLogo from '../../images/customers/logos/workit-logo.png';
import epionLogo from '../../images/customers/logos/epion-logo.png';
import ginkoLogo from '../../images/customers/logos/ginko-logo.png';
import healthieLogo from '../../images/customers/logos/healthie-logo.png';
import spectrumLogo from '../../images/customers/logos/spectrum-ai-logo.png';
import klaraLogo from '../../images/customers/logos/klara-logo.png';

const CustomerLogo = ({logo}) => (
  <div className={styles.logoContainer}>
    <img src={logo} />
  </div>
)

export default ({ showIntro = true }) => (
  <div className={styles.container}>
    <Grid>
      {showIntro &&
        <div className={styles.content}>
          <h2>You're in Great Company</h2>
          <p className="XL">
            We help hundreds of the most innovative companies to protect sensitive
            data when the stakes matters most.
          </p>
        </div>
      }

      <div className={styles.logos}>
        <CustomerLogo logo={ginkoLogo} />
        <CustomerLogo logo={himsHersLogo} />
        <CustomerLogo logo={careportLogo} />
        <CustomerLogo logo={rightwayLogo} />
        <CustomerLogo logo={healthCatalystLogo} />
        <CustomerLogo logo={ableHealthLogo} />
        <CustomerLogo logo={aidinLogo} />
        <CustomerLogo logo={projectBeaconLogo} />
        <CustomerLogo logo={pathaiLogo} />
        <CustomerLogo logo={workItLogo} />
        <CustomerLogo logo={canvasLogo} />
        <CustomerLogo logo={stellarLogo} />
        <CustomerLogo logo={healthifyLogo} />
        <CustomerLogo logo={healthieLogo} />
        <CustomerLogo logo={dorsataLogo} />
        <CustomerLogo logo={mdsaveLogo} />
        <CustomerLogo logo={pagerLogo} />
        <CustomerLogo logo={glidianLogo} />
        <CustomerLogo logo={aliceLogoLogo} />
        <CustomerLogo logo={epionLogo} />
        <CustomerLogo logo={medicalMemoryLogo} />
        <CustomerLogo logo={greenspaceLogo} />
        <CustomerLogo logo={spectrumLogo} />
        <CustomerLogo logo={klaraLogo} />

      </div>
    </Grid>
  </div>
);
