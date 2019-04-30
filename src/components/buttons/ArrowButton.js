import React from 'react';
import { Link } from 'gatsby';
import Arrow from '../shared/Arrow';
import styles from './ArrowButton.module.css';

class ArrowButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  setHover = (hover) => {
    this.setState({ hover: hover });
  }

  render() {
    return (
      <Link
        to={this.props.to}
        className={styles.link}
        onMouseEnter={() => this.setHover(true)}
        onMouseLeave={() => this.setHover(false)}
      >
        {this.props.text}
        <div className={styles.arrowContainer}>
          <Arrow theme={this.state.hover ? '' : 'outline'} />
        </div>
      </Link>
    )
  }
}

export default ArrowButton;
