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
    this.state = {};
    this.carouselRef = React.createRef();
    this.gridRef = React.createRef();
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
              <span className={styles.circle}></span>
              <span className={styles.circle}></span>
            </div>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ProductCarousel;
