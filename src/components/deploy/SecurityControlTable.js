import React, { useState } from 'react';
import cn from 'classnames';
import { Grid } from '../grid/Grid';
import styles from './SecurityControlTable.module.css';
import securityControls from '../../data/security-controls.json';
import aptibleFavicon from '../../images/aptible-favicon-32.png';
import aptibleFavicon100 from '../../images/aptible-favicon-100.png';
import awsFavicon from '../../images/aws-badge.png';

const Control = ({
  headline,
  body,
  category = 'Host Security',
  provider = 'Aptible',
}) => {
  return (
    <div className={styles.control}>
      <h5 className="h55">{headline}</h5>
      <p>{body}</p>
      <div className={styles.providedBy}>
        {provider === 'Aptible' && (
          <img src={aptibleFavicon} className={styles.providedByImage} />
        )}
        {provider === 'AWS' && (
          <img src={awsFavicon} className={styles.providedByImage} />
        )}
        <p className="S">
          {category} provided by {provider}
        </p>
      </div>
    </div>
  );
};

const ControlList = ({ category }) => {
  return (
    <div className={styles.controlList}>
      {Object.keys(securityControls).map(f => (
        <>
          {(!category || category === f) && (
            <>
              {securityControls[f].map((control, idx) => (
                <Control
                  {...control}
                  category={getCategoryName(f)}
                  provider={APTIBLE_CATEGORIES[f] ? 'Aptible' : 'AWS'}
                  key={`${f}-${idx}`}
                />
              ))}
            </>
          )}
        </>
      ))}
    </div>
  );
};

const Category = ({ id, name, count, setCategory, currentCategory }) => {
  const isActive = currentCategory === id;
  const onClick = () => {
    setCategory(isActive ? null : id);
  };
  return (
    <li
      className={cn('S', styles.category, {
        [styles.activeCategory]: isActive,
      })}
      onClick={onClick}
    >
      <span className={cn('bold', styles.categoryBadge)}>{count}</span>
      <span className={styles.categoryName}>{name}</span>
      <span className={styles.closeCategory}>&times;</span>
    </li>
  );
};

const APTIBLE_CATEGORIES = {
  access: 'Access Management',
  auditing: 'Auditing',
  availability: 'Availability',
  encryption: 'Encryption',
  network: 'Network Protection',
  vulnerability: 'Vulnerability Management',
};

const AWS_CATEGORIES = {
  infra: 'Infrastructure Security',
};

const getCategoryName = category => {
  return (
    APTIBLE_CATEGORIES[category] || AWS_CATEGORIES[category] || 'Not Found'
  );
};

const SecurityControlTable = () => {
  const [category, setCategory] = useState(null);

  return (
    <Grid>
      <div className={styles.securityControlTable}>
        <div className={styles.index}>
          <div className={cn(styles.indexPanel, styles.aptible)}>
            <div className={styles.indexPanelImage}>
              <img src={aptibleFavicon100} alt="Aptible Logo" />
            </div>
            <h6>
              Security &amp; Availability Controls <br />
              Provided by Aptible
            </h6>
            <ul className={styles.categoryList}>
              {Object.keys(APTIBLE_CATEGORIES).map(id => (
                <Category
                  name={getCategoryName(id)}
                  key={id}
                  id={id}
                  count={securityControls[id].length}
                  currentCategory={category}
                  setCategory={setCategory}
                />
              ))}
            </ul>
          </div>

          <div className={styles.indexPanel}>
            <div className={styles.indexPanelImage}>
              <img src={awsFavicon} alt="AWS Logo" />
            </div>
            <h6>
              Security Controls Provided by <br />
              Amazon Web Services
            </h6>
            <ul className={styles.categoryList}>
              {Object.keys(AWS_CATEGORIES).map(id => (
                <Category
                  name={getCategoryName(id)}
                  id={id}
                  count={3}
                  currentCategory={category}
                  setCategory={setCategory}
                />
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.table}>
          <h5>
            {category && <>{getCategoryName(category)} Controls</>}
            {!category && 'All Controls'}
          </h5>
          <ControlList category={category} />
        </div>
      </div>
    </Grid>
  );
};

export default SecurityControlTable;

// function FeatureCard({ filters, headline, body }) {
//   return (
//     <div className={styles.card}>
//       <div className={styles.pills}>
//         {filters.map((filter, idx) => (
//           <span
//             key={idx}
//             className={`${styles.pill} ${styles[filter + 'Pill']}`}
//           />
//         ))}
//       </div>
//       <h5>{headline}</h5>
//       <p dangerouslySetInnerHTML={{ __html: body }} />
//     </div>
//   );
// }

// class FeaturesGrid extends React.Component {
//   constructor(props) {
//     super(props);
//     const initialFeatures = this.assignFeaturesToColumns(deployFeatures);

//     this.state = {
//       allFeatures: deployFeatures,
//       featuresLeft: initialFeatures.left,
//       featuresMiddle: initialFeatures.middle,
//       featuresRight: initialFeatures.right,
//       security: true,
//       auditReady: true,
//       flexible: true,
//       reliability: true,
//       convenience: true,
//     };
//   }

//   toggleFilter = filter => {
//     const filters = {
//       security: this.state.security,
//       auditReady: this.state.auditReady,
//       flexible: this.state.flexible,
//       reliability: this.state.reliability,
//       convenience: this.state.convenience,
//     };
//     filters[filter] = !this.state[filter];

//     const filteredFeatures = this.filterFeatures(filters);

//     this.setState({
//       [filter]: !this.state[filter],
//       featuresLeft: filteredFeatures.left,
//       featuresMiddle: filteredFeatures.middle,
//       featuresRight: filteredFeatures.right,
//     });
//   };

//   filterFeatures = filters => {
//     const activeFilters = Object.keys(filters).filter(k => filters[k]);
//     const filtered = this.state.allFeatures.filter(feature => {
//       for (let filter of activeFilters) {
//         if (feature.filters.indexOf(filter) !== -1) {
//           return true;
//         }
//       }

//       return false;
//     });

//     return this.assignFeaturesToColumns(filtered);
//   };

//   assignFeaturesToColumns = features => {
//     const numEachCol = Math.ceil(features.length / 3);

//     return {
//       left: features.slice(0, numEachCol),
//       middle: features.slice(numEachCol, numEachCol * 2),
//       right: features.slice(numEachCol * 2, numEachCol * 3),
//     };
//   };

//   switchClassNames = filter => {
//     const filterState = this.state[filter];

//     return classNames({
//       [styles.switch]: true,
//       [styles.switchActive]: filterState,
//       [styles[`${filter}SwitchActive`]]: filterState,
//     });
//   };

//   render() {
//     return (
//       <div className={styles.container}>
//         <Grid>
//           <div className={styles.filters}>
//             <div
//               className={styles.filter}
//               onClick={() => this.toggleFilter('security')}
//             >
//               <span className={this.switchClassNames('security')}>
//                 <span className={styles.switchCircle} />
//               </span>
//               Security
//             </div>

//             <div
//               className={styles.filter}
//               onClick={() => this.toggleFilter('auditReady')}
//             >
//               <span className={this.switchClassNames('auditReady')}>
//                 <span className={styles.switchCircle} />
//               </span>
//               Audit-ready
//             </div>

//             <div
//               className={styles.filter}
//               onClick={() => this.toggleFilter('flexible')}
//             >
//               <span className={this.switchClassNames('flexible')}>
//                 <span className={styles.switchCircle} />
//               </span>
//               Flexible + Scalable
//             </div>

//             <div
//               className={styles.filter}
//               onClick={() => this.toggleFilter('reliability')}
//             >
//               <span className={this.switchClassNames('reliability')}>
//                 <span className={styles.switchCircle} />
//               </span>
//               DevOps: Reliability
//             </div>

//             <div
//               className={styles.filter}
//               onClick={() => this.toggleFilter('convenience')}
//             >
//               <span className={this.switchClassNames('convenience')}>
//                 <span className={styles.switchCircle} />
//               </span>
//               DevOps: Convenience
//             </div>
//           </div>

//           <div className={styles.leftColumn}>
//             {this.state.featuresLeft.map((feature, idx) => (
//               <FeatureCard
//                 key={idx}
//                 filters={feature.filters}
//                 headline={feature.headline}
//                 body={feature.body}
//               />
//             ))}
//           </div>

//           <div className={styles.middleColumn}>
//             {this.state.featuresMiddle.map((feature, idx) => (
//               <FeatureCard
//                 key={idx}
//                 filters={feature.filters}
//                 headline={feature.headline}
//                 body={feature.body}
//               />
//             ))}
//           </div>

//           <div className={styles.rightColumn}>
//             {this.state.featuresRight.map((feature, idx) => (
//               <FeatureCard
//                 key={idx}
//                 filters={feature.filters}
//                 headline={feature.headline}
//                 body={feature.body}
//               />
//             ))}
//           </div>
//         </Grid>
//       </div>
//     );
//   }
// }
