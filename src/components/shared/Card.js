import React from 'react';
import { Link } from 'gatsby';
import styles from './Card.module.css';
import Arrow from '../shared/Arrow';
import videoPlayIcon from '../../images/video-play.svg';

export default ({ logo, headline, bigHeadline, text, author, tags, image, videoLength, readMore, to }) => {
  const ContainerElement = to ? Link : 'div';

  return (
    <ContainerElement to={to} className={`${styles.container} ${to ? styles.linkedContainer : ''}`}>
      {image &&
        <div className={styles.imageContainer}>
          {videoLength && 
            <div className={styles.videoLength}>
              <div className={styles.videoPlayIcon}>
                <img src={videoPlayIcon} alt="Video" />
              </div>
              <p className="L-bold">{videoLength}</p>
            </div>
          }
          <img src={image} className={styles.image} alt="Customer" />
        </div>
      }

      <div className={styles.card}>
        <div className={`${styles.arrow} ${image ? styles.withImage: ''}`}><Arrow /></div>

        {logo &&
          <img src={logo} className={styles.logo} alt="Customer logo" />
        }

        {headline &&
          <h5>{headline}</h5>
        }

        {bigHeadline &&
          <h3>{bigHeadline}</h3>
        }

        {text &&
          <p>{text}</p>
        }

        {author &&
          <p className={styles.author}>{author}</p>
        }

        {readMore &&
          <div className={styles.readMore}>
            <p>Read More</p>
          </div>
        }

        {tags &&
          <div className={styles.tags}>
            {tags.split(',').map((tag, idx) => {
              return <span key={idx} className={styles.tag}>{tag}</span>
            })}
          </div>
        }

      </div>
    </ContainerElement>
  )
};
