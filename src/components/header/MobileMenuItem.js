import React from 'react';
import styles from './MobileMenuItem.module.css';

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleMenu = () => {
    this.props.onClickFn('mobile')
  }

  menuItemText = () => {
    return this.props.navOpen ? 'Close' : 'Menu';
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={`${styles.menuItem} ${this.props.navOpen ? styles.menuItemOpen : ''}`} onClick={this.toggleMenu}>
          {this.menuItemText()}
          <span className={`${styles.arrow} ${this.props.navOpen ? styles.up : styles.down}`}></span>
        </div>
      </div>
    );
  }
}

export default MobileMenu;
