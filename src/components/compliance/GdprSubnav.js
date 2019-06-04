import React from 'react';
import { Link } from 'gatsby';
import SidebarNav from '../shared/SidebarNav';
import styles from './Subnav.module.css';

class GdprSubnav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    const path = window.location.pathname;
    for (let node of document.querySelectorAll(`a[href='${path}']`)) {
      if (node.classList.contains(styles.articleLink)) {
        const subpart = node.parentNode.parentNode;
        const section = subpart.parentNode;

        node.classList.add(styles.articleActive);
        subpart.classList.add(styles.subpartOpen);
        section.classList.add(styles.sectionOpen);
      }
    }
  }

  openSection = (e) => {
    e.target.parentNode.classList.toggle(styles.sectionOpen);
  }

  openSubpart = (e) => {
    e.target.parentNode.classList.toggle(styles.subpartOpen);
  }

  render() {
    return (
      <SidebarNav title="GDPR Compliance Guide" shortTitle="GDPR Guide">
        {this.props.regulation.name === 'HIPAA' &&
          <div className={styles.regulationTitle}>
            {this.props.regulation.nav.regulations_title}
          </div>
        }

        {this.props.regulation.regulation.map((section, sectionIdx) => (
          <div className={styles.section} key={sectionIdx}>
            <div className={styles.sectionTitle} onClick={this.openSection}>
              {section.title}
            </div>

            {section.subparts.map((subpart, subpartIdx) => (
              <div className={styles.subpart} key={subpartIdx}>
                <div
                  className={styles.subpartTitle}
                  onClick={this.openSubpart}
                  dangerouslySetInnerHTML={{ __html: `${subpart.id}: ${subpart.title}` }}>
                </div>

                <div className={styles.articleList}>
                  {subpart.subparts.map((article, articleIdx) => (
                    <Link
                      className={styles.articleLink}
                      to={`/${this.props.regulation.slugs.site}/${this.props.regulation.slugs.regulations}/${article.url}/`}
                      key={articleIdx}>
                      <span className={styles.articleId}>Article {article.id}</span>
                      <span className={styles.articleTitle}>{article.title}</span>
                      <div className={styles.circle} />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </SidebarNav>
    )
  }
}

export default GdprSubnav;
