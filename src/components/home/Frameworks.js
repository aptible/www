import React from 'react';
import twoFaBadge from '../../images/home/badges/2fa.svg';
import dataEncryptionBadge from '../../images/home/badges/data-encryption.svg';
import gdprBadge from '../../images/home/badges/gdpr.svg';
import hipaaBadge from '../../images/home/badges/hipaa.svg';
import isoBadge from '../../images/home/badges/iso.svg';
import socBadge from '../../images/home/badges/soc.svg';
import ssoBadge from '../../images/home/badges/sso.svg';
import Container from '../container/Container';
import styles from './Frameworks.module.css';

const CARDS = [
  {
    name: 'SOC 2 Type 2',
    image: socBadge,
  },
  {
    name: 'ISO 27001:2013',
    image: isoBadge,
  },
  {
    name: 'HIPAA',
    image: hipaaBadge,
  },
  {
    name: 'GDPR',
    image: gdprBadge,
  },
  {
    name: 'Data Encryption',
    image: dataEncryptionBadge,
  },
  {
    name: '2FA',
    image: twoFaBadge,
  },
  {
    name: 'SSO',
    image: ssoBadge,
  },
];

const Frameworks = () => {
  return (
    <Container>
      <div className={styles.cards}>
        {CARDS.map(card => (
          <div className={styles.card} key={card.name}>
            <img className={styles.image} src={card.image} alt="" />
            <div className={styles.name}>{card.name}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Frameworks;
