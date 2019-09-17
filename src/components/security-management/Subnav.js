import React from 'react';
import SidebarNav from '../shared/SidebarNav';
import SidebarNavItem from '../shared/SidebarNavItem';
import Button from '../buttons/Button';
import Download from '../security-management/Download';
import styles from './Subnav.module.css';

class Subnav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  openModal = () => {
    this.setState({ showModal: true });
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <SidebarNav title="Chapters">
        <SidebarNavItem to="/security-management/" text="01: Introduction" />
        <SidebarNavItem to="/security-management/what-it-is/" text="02: What is Security Management" />
        <SidebarNavItem to="/security-management/fundamentals/" text="03: Fundamentals" />
        <div className={styles.cta}>
          <Button onClickFn={this.openModal}>Download the PDF</Button>
        </div>

        {this.state.showModal &&
          <Download closeFn={this.closeModal} />
        }
      </SidebarNav>
    );
  }
}

export default Subnav;
