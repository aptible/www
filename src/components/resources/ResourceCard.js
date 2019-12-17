import React from 'react';
import { Link } from 'gatsby';
import styles from './ResourceCard.module.css';
import Arrow from '../shared/Arrow';

const ResourceCard = ({ resource }) => {
  const to = resource.url;
  const ContainerElement = to ? Link : 'div';

  return (
    <ContainerElement to={to} className={`${styles.container} ${to ? styles.linkedContainer : ''}`}>
      <div className={styles.card}>
        <div className={styles.arrow}><Arrow /></div>

        {resource.title &&
          <h5 dangerouslySetInnerHTML={{ __html: resource.title }}></h5>
        }

        {to &&
          <div className={styles.readMore}>
            <p>Read More</p>
          </div>
        }

        {resource.type &&
          <div className={styles.tags}>
            <span className={styles.tag}>{resource.type}</span>
          </div>
        }
      </div>
    </ContainerElement>
  );
}

export default ResourceCard;
