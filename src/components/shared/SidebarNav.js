import React from 'react';
import styles from './SidebarNav.module.css';
import itemStyles from './SidebarNavItem.module.css';

const hamburgerIcon = (
  <svg width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line y1="1" x2="32" y2="1" stroke="#33C69F" strokeWidth="2" />
    <line y1="9" x2="19.5556" y2="9" stroke="#33C69F" strokeWidth="2" />
    <line y1="17" x2="27.5556" y2="17" stroke="#33C69F" strokeWidth="2" />
  </svg>
);

const xIcon = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.11513 17L16.9398 1.00001" stroke="#33C69F" strokeWidth="2" />
    <path d="M1 1.00037L16.9294 16.9931" stroke="#33C69F" strokeWidth="2" />
  </svg>
);

class SidebarNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  componentDidMount = () => {
    const path = window.location.pathname;
    for (let node of document.querySelectorAll(`a[href='${path}']`)) {
      if (node.parentNode.classList.contains(itemStyles.item)) {
        node.parentNode.classList.add(itemStyles.active);
      }
    }
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  }

  title = () => {
    if (!this.state.open && this.props.shortTitle) {
      return this.props.shortTitle;
    } else {
      return this.props.title;
    }
  }

  icon = () => {
    if (this.state.open) {
      return <React.Fragment>{xIcon}</React.Fragment>
    } else {
      return <React.Fragment>{hamburgerIcon}</React.Fragment>
    }
  }

  render() {
    return (
      <div className={`${styles.container} ${this.state.open ? '' : styles.closed}`}>
        <div className={styles.titleBar}>
          <div className={styles.icon} onClick={this.toggleOpen}>
            {this.icon()}
          </div>

          {this.title()}
        </div>
        {this.state.open &&
          <ul>
            {this.props.children}
          </ul>
        }
      </div>
    )
  }
}

export default SidebarNav;
