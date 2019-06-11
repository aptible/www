import React from 'react';
import { Link } from 'gatsby';
import styles from './ProductCarousel.module.css';
import { Grid, Row } from '../grid/Grid';
import Arrow from '../shared/Arrow';

const ALL_PRODUCTS = [
  {
    id: 'comply',
    url: '/comply/',
    name: 'Aptible Comply',
    description: 'Pass your next security audit, guaranteed.'
  },
  {
    id: 'deploy',
    url: '/deploy/',
    name: 'Aptible Deploy',
    description: 'Deploy audit-ready apps<br/> and databases.'
  }
];

class ProductCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProduct: this.props.startPosition === 'right' ? 'deploy' : 'comply'
    };

    this.carouselRef = React.createRef();
    this.gridRef = React.createRef();
    this.scrollWatcher = null;
  }

  componentDidMount() {
    const container = this.carouselRef.current.children[0];

    const gridWidth = this.gridRef.current.offsetWidth;
    const windowWidth = window.outerWidth;
    const carouselPadding = (windowWidth - gridWidth) / 2;

    container.style.padding = `0 ${carouselPadding}px`;

    if (this.props.startPosition && this.props.startPosition === 'right') {
      this.carouselRef.current.scrollLeft = container.offsetWidth;
    }

    this.scrollWatcher = setInterval(() => {
      if (this.carouselRef.current.scrollLeft > carouselPadding) {
        this.setState({ activeProduct: 'deploy' });
      } else {
        this.setState({ activeProduct: 'comply' });
      }
    }, 500);
  }

  componentWillUnmount = () => {
    clearInterval(this.scrollWatcher);
  }

  scrollTo = (product) => {
    if (product === 'comply') {
      this.carouselRef.current.scrollLeft = 0;
    } else {
      this.carouselRef.current.scrollLeft = 999;
    }
  }

  render() {
    return (
      <div>
        <div className={styles.productSelector} ref={this.carouselRef}>
          <div className={styles.carouselContainer}>
            {ALL_PRODUCTS.map((product, idx) =>
              <Link key={idx} to={product.url} className={`${styles.product} ${styles[product.id]}`}>
                <div className={styles.productArrow}><Arrow /></div>
                <h5 dangerouslySetInnerHTML={{ __html: product.name }}></h5>
                <h2 dangerouslySetInnerHTML={{ __html: product.description }}></h2>
              </Link>
            )}
          </div>
        </div>
        <Grid>
          <Row>
            <div className={styles.circles} ref={this.gridRef}>
              <span
                onClick={() => this.scrollTo('comply')}
                className={`${styles.circle} ${this.state.activeProduct === 'comply' ? styles.active : ''}`}>
              </span>
              <span
                onClick={() => this.scrollTo('deploy')}
                className={`${styles.circle} ${this.state.activeProduct === 'deploy' ? styles.active : ''}`}>
              </span>
            </div>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ProductCarousel;
