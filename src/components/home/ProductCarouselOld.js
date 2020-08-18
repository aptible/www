import React from 'react';
import cn from 'classnames';
import { Link } from 'gatsby';
import { Grid, Row } from '../grid/Grid';
import Button from '../buttons/Button';
import Arrow from '../shared/Arrow';
import styles from './ProductCarousel.module.css';

const PRODUCTS = [
  {
    id: 'comply',
    url: '/comply/',
    name: 'Aptible Comply',
    title: 'Compliance Management',
    body:
      'The end-to-end compliance management platform that uses intelligent automations to simplify compliance work.',
  },
  {
    id: 'deploy',
    url: '/deploy/',
    name: 'Aptible Deploy',
    title: 'Container Security',
    body:
      'The container orchestration platform that automates the data security controls required for software in regulated industries.',
  },
];

class ProductCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProduct: this.props.startPosition === 'right' ? 'deploy' : 'comply',
    };

    this.carouselRef = React.createRef();
    this.gridRef = React.createRef();
    this.scrollWatcher = null;
    this.carouselPadding = 0;
  }

  componentDidMount() {
    this.padCarouselToScreenSize();

    this.scrollWatcher = setInterval(() => {
      if (this.carouselRef.current.scrollLeft > this.carouselPadding) {
        this.setState({ activeProduct: 'deploy' });
      } else {
        this.setState({ activeProduct: 'comply' });
      }
    }, 500);

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.padCarouselToScreenSize);
    }
  }

  componentWillUnmount = () => {
    clearInterval(this.scrollWatcher);
  };

  padCarouselToScreenSize = () => {
    const container = this.carouselRef.current.children[0];
    const gridWidth = this.gridRef.current.offsetWidth;
    const windowWidth = window.innerWidth;
    this.carouselPadding = (windowWidth - gridWidth) / 2;
    container.style.paddingLeft = `${this.carouselPadding}px`;
    container.style.paddingRight = `${this.carouselPadding}px`;

    if (this.props.startPosition && this.props.startPosition === 'right') {
      this.carouselRef.current.scrollLeft = container.offsetWidth;
    } else {
      this.carouselRef.current.scrollLeft = 0;
    }
  };

  scrollTo = product => {
    if (product === 'comply') {
      this.carouselRef.current.scrollLeft = 0;
    } else {
      this.carouselRef.current.scrollLeft = 999;
    }
  };

  render() {
    const { activeProduct } = this.state;

    return (
      <div>
        <div className={styles.container}>
          <div className={styles.productSelector} ref={this.carouselRef}>
            <div className={styles.carouselContainer}>
              {PRODUCTS.map(product => {
                const { url, id, name, title, body } = product;
                return (
                  <Link
                    className={cn(styles.product, styles[id])}
                    key={url}
                    to={url}
                  >
                    <div role="presentation" className={styles.productArrow}><Arrow /></div>
                    <h5>{name}</h5>
                    <h2>{title}</h2>
                    <p>{body}</p>

                    <div className={styles.button}>
                      <Button>
                        Explore {name} <span className={styles.arrow}>&rarr;</span>
                      </Button>
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
              {PRODUCTS.map(product => (
                <span
                  key={product.id}
                  onClick={() => this.scrollTo(product.id)}
                  className={cn([
                    styles.circle,
                    activeProduct === product.id && styles.active,
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

export default ProductCarousel;
