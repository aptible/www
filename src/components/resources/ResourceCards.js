import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './ResourceCards.module.css';
import ResourceCard from './ResourceCard';
import resources from '../../data/resources.json';

class ResourceCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilter: "All",
    };
  }

  filterResources = (event) => {
    this.setState({
      activeFilter: event.target.textContent,
    });
  }

  render() {
    const { activeFilter } = this.state;

    const filteredResources = activeFilter === "All" ?
      resources :
      resources.filter(resource => resource.type === activeFilter.replace(/s$/, ""));
    
    const halfwayThrough = Math.ceil(filteredResources.length / 2)
    const leftResources = filteredResources.slice(0, halfwayThrough);
    const rightResources = filteredResources.slice(halfwayThrough, filteredResources.length);

    return (
      <div className={styles.container}>
        <Grid>
          <div className={styles.left}>
            <div className={styles.navigationContainer}>
              <Grid>
                <div className={styles.navigation}>
                  <h6 className="small">Resources</h6>

                  {["All", "Guides", "Webinar"].map(filter => (
                    <button
                      key={filter}
                      onClick={this.filterResources}
                      className={activeFilter === filter ? styles.active : ""}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </Grid>
            </div>

            {leftResources.map(resource => (
              <ResourceCard key={resource.url} resource={resource} />
            ))}
          </div>

          <div className={styles.right}>
            {rightResources.map(resource => (
              <ResourceCard key={resource.url} resource={resource} />
            ))}
          </div>
        </Grid>
      </div>
    );
  }
}

export default ResourceCards;
