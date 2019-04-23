import React from 'react';
import { Grid, Row } from '../grid/Grid';
import { Link } from 'gatsby';
import Arrow from '../shared/Arrow';
import styles from './Accordion.module.css';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openIdx: 0
    };
  }

  toggleItem = (idx) => {
    if (this.state.openIdx === idx) {
      this.setState({ openIdx: null });
    } else {
      this.setState({ openIdx: idx });
    }
  }

  render () {
    return (
      <Row>
        <Grid>
          <div className={styles.sidebar}>
            <h1>{this.props.title}</h1>
            <p className="L">{this.props.description}</p>

            {this.props.linkText && this.props.linkTo &&
              <Link to={this.props.linkTo} className={styles.link}>
                {this.props.linkText}
                <div className={styles.arrowContainer}>
                  <Arrow theme="outline" />
                </div>
              </Link>
            }
          </div>

          <div className={styles.container}>
            {this.props.items.map((item, idx) =>
              <div
                key={idx}
                onClick={() => this.toggleItem(idx)}
                className={`${styles.item} ${this.state.openIdx === idx ? styles.open : ''}`}
              >
                <div className={styles.circle}></div>
                <h4>{item.title}</h4>
                <div className={styles.content}>
                  {item.content}
                </div>
              </div>
            )}
          </div>
        </Grid>
      </Row>
    )
  }
}

export default Accordion;
