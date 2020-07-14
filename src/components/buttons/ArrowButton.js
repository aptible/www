import React from 'react';
import { Link } from 'gatsby';
import Arrow from '../shared/Arrow';
import styles from './ArrowButton.module.css';

class ArrowButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  setHover = hover => {
    this.setState({ hover: hover });
  };

  render() {
    if (this.props.to) {
      return (
        <Link
          to={this.props.to}
          className={styles.link}
          onMouseEnter={() => this.setHover(true)}
          onMouseLeave={() => this.setHover(false)}
          title={this.props.title}
        >
          {this.props.text}
          <div className={styles.arrowContainer}>
            <Arrow theme={this.state.hover ? '' : 'outline'} />
          </div>
        </Link>
      );
    }

    if (this.props.onClickFn) {
      return (
        <div
          className={styles.link}
          onMouseEnter={() => this.setHover(true)}
          onMouseLeave={() => this.setHover(false)}
          onClick={this.props.onClickFn}
          role="button"
          tabIndex={0}
          title={this.props.title}
        >
          {this.props.text}
          <div className={styles.arrowContainer}>
            <Arrow theme={this.state.hover ? '' : 'outline'} />
          </div>
        </div>
      );
    }

    return (
      <a
        href={this.props.href}
        className={styles.link}
        onMouseEnter={() => this.setHover(true)}
        onMouseLeave={() => this.setHover(false)}
        title={this.props.title}
      >
        {this.props.text}
        <div className={styles.arrowContainer}>
          <Arrow theme={this.state.hover ? '' : 'outline'} />
        </div>
      </a>
    );
  }
}

export default ArrowButton;
