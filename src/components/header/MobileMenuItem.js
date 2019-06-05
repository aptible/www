import React from 'react';
import styles from './MobileMenuItem.module.css';

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false
    };
  }

  toggleMenu = () => {
    this.setState({ navOpen: !this.state.navOpen });
    this.props.onClickFn('mobile')
  }

  menuItemText = () => {
    return this.state.navOpen ? 'Close' : 'Menu';
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={`${styles.menuItem} ${this.state.navOpen ? styles.menuItemOpen : ''}`} onClick={this.toggleMenu}>
          {this.menuItemText()}
          <span className={`${styles.arrow} ${this.state.navOpen ? styles.up : styles.down}`}></span>
        </div>
      </div>
    );
  }
}

export default MobileMenu;
