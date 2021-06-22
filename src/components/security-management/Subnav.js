import React from 'react';
import SidebarNav from '../shared/SidebarNav';
import SidebarNavItem from '../shared/SidebarNavItem';
import SignupButton from '../signup/SignupButton';
import styles from './Subnav.module.css';

class Subnav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      navItems: this.formatNavItems(),
    };
  }

  formatNavItems = () => {
    const sortFn = (a, b) =>
      a.node.contentfulid > b.node.contentfulid
        ? 1
        : b.node.contentfulid > a.node.contentfulid
        ? -1
        : 0;
    return this.props.edges.sort(sortFn);
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  chapterNum = edge => {
    return edge.node.contentfulid.replace('security-management-chapter-', '');
  };

  render() {
    return (
      <SidebarNav title="Chapters">
        {this.state.navItems.map(e => (
          <SidebarNavItem
            key={e.node.contentfulid}
            to={e.node.slug}
            text={`0${this.chapterNum(e)}: ${e.node.pageTitle}`}
          />
        ))}

        <div className={styles.cta}>
          <SignupButton text="Learn More" product="comply" />
        </div>
      </SidebarNav>
    );
  }
}

export default Subnav;
