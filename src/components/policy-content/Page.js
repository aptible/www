import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './Page.module.css';
import Subnav from './Subnav';
import ShareIcons from '../shared/ShareIcons';

const titleForPage = (context) => {
  if (context.title === 'Controls') {
    return 'Control Library';
  } else {
    return context.title;
  }
}

export default ({ pageContext, pages }) => {
  return (
    <div className={styles.container}>
      <Grid>
        <div className={styles.meta}>
          <ShareIcons />

          <h1>Open Source {titleForPage(pageContext)}</h1>
        </div>

        <div className={styles.sidebar}>
          <Subnav pages={pages} />
        </div>

        <div className={styles.content}>
          <div className={styles.warning}>
            <strong>Note: </strong> Aptible is providing this content as open 
            source for you to use in your own ISMS. The content is also available
            on <a href="https://github.com/aptible/policy-content">Github</a>.
            
            <br /><br />
            
            <u>This is not Aptible's {titleForPage(pageContext)}</u>. For a complete
            list of all of our policies, please visit
            our <Link to="/legal/terms-of-service/">Legal Section</Link>.
          </div>

          <div dangerouslySetInnerHTML={{ __html: pageContext.html }} />
        </div>
      </Grid>
    </div>
  );
};
