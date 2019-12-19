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
    const Component = this.props.to ? Link : "a";
    return (
      <Component
        to={this.props.to}
        href={this.props.href}
        className={styles.link}
        onMouseEnter={() => this.setHover(true)}
        onMouseLeave={() => this.setHover(false)}
      >
        {this.props.text}
        <div className={styles.arrowContainer}>
          <Arrow theme={this.state.hover ? '' : 'outline'} />
        </div>
      </Component>
    )
  }
}

export default ArrowButton;
