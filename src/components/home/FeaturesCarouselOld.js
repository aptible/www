import React from 'react';
import cn from 'classnames';
import { Link } from 'gatsby';
import auditsIllustration from '../../images/home/illustrations/audits.svg';
import complianceManagementIllustration from '../../images/home/illustrations/compliance-management.svg';
import sourceOfTruthIllustration from '../../images/home/illustrations/source-of-truth.svg';
import vendorsIllustration from '../../images/home/illustrations/vendors.svg';
import { Grid, Row } from '../grid/Grid';
import Arrow from '../shared/Arrow';
import Button from '../buttons/Button';
import styles from './FeaturesCarousel.module.css';

const ITEMS = [
  {
    id: '1',
    title: 'Create a single source of truth',
    image: sourceOfTruthIllustration,
    body: 'Simplify compliance management with all of your controls, risks, documents, vendors, assets, evidence, and more connected together.',
    url: '/',
  },
  {
    id: '2',
    title: 'Automate Compliance Management',
    image: complianceManagementIllustration,
    body: 'Intelligent automations remove tedious work and automated processes make manual work easier to simplify managing compliance.',
    url: '/',
  },
  {
    id: '3',
    title: 'Streamline Audits',
    image: auditsIllustration,
    body: 'Speed through audits with less stress with purpose-built features that make it easy to manage auditor’s requests and export evidence.',
    url: '/',
  },
  {
    id: '4',
    title: 'Determine Vendors Trustworthiness',
    image: vendorsIllustration,
    body: 'Understand and manage third-party risk throughout the vendor lifecycle with a suite of powerful vendor management tools.',
    url: '/',
  },
];

class FeaturesCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0,
    };

    this.carouselRef = React.createRef();
    this.gridRef = React.createRef();
    this.scrollWatcher = null;
    this.carouselPadding = 0;
  }

  componentDidMount() {
    this.padCarouselToScreenSize();

    // this.scrollWatcher = setInterval(() => {
    //   if (this.carouselRef.current.scrollLeft > this.carouselPadding) {
    //     console.log('11');
    //     this.setState({ activeItem: '1' });
    //   } else {
    //     console.log('22');
    //     this.setState({ activeItem: '2' });
    //   }
    // }, 500);

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.padCarouselToScreenSize);
    }
  }

  // componentWillUnmount = () => {
  //   clearInterval(this.scrollWatcher);
  // };

  padCarouselToScreenSize = () => {
    const container = this.carouselRef.current.children[0];
    const gridWidth = this.gridRef.current.offsetWidth;
    const windowWidth = window.innerWidth;
    this.carouselPadding = (windowWidth - gridWidth) / 2;
    container.style.paddingLeft = `${this.carouselPadding}px`;
    container.style.paddingRight = `${this.carouselPadding}px`;
    this.carouselRef.current.scrollLeft = 0;
  };

  // scrollTo = id => {
  //   console.log(id);
  //   if (id === '1') {
  //     this.carouselRef.current.scrollLeft = 0;
  //   } else {
  //     this.carouselRef.current.scrollLeft = 999;
  //   }
  // };

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <div className={styles.container}>
          <div className={styles.productSelector} ref={this.carouselRef}>
            <div className={styles.carouselContainer}>
              {ITEMS.map(item => {
                const { url, id, title, body, image } = item;
                return (
                  <Link
                    className={styles.product}
                    style={{
                      backgroundImage: `url(${image})`,
                    }}
                    key={id}
                    to={url}
                  >
                    <div className={styles.productArrow}><Arrow /></div>
                    <div className={styles.content}>
                      {/* <img src={image} /> */}
                      <h3>{title}</h3>
                      <p>{body}</p>

                      <div className={styles.button}>
                        <Button>
                          Learn More <span className={styles.arrow}>&rarr;</span>
                        </Button>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <Grid>
          <Row>
            <div className={styles.circles} ref={this.gridRef}>
              {ITEMS.map(item => (
                <span
                  key={item.id}
                  // onClick={() => this.scrollTo(item.id)}
                  className={cn([
                    styles.circle,
                    activeItem === item.id && styles.active,
                  ])}
                />
              ))}
            </div>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default FeaturesCarousel;
