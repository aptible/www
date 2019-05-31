import React from 'react';
import styles from './QuotesCarousel.module.css';
import { Grid, Row } from '../grid/Grid';

const ALL_QUOTES = [
  {
    author: 'Ashley Mathew, Engineering Team',
    authorSlug: 'ashley-mathew',
    quote: "I'm proud that we have a product that provides a clear value to our customers, and our customers are excited about it! And that we're continuing to grow that product in a rapid, but thoughtful way."
  },
  {
    author: 'Christopher Gomes, Product Management Team',
    authorSlug: 'chris-gomes',
    quote: "I admire my colleagues' thoughtfulness, energy, and grit. Folks here are thoughtful in their approach to things, from 'How will what I say land on the other person?' to 'How will this architectural decision limit the flexibility of our product a year from now?'. And yet, we're still biased toward action: My teammates have an amazing energy around getting stuff done. Lastly, I admire my colleagues' grit: When we set our mind to something, nothing gets in our way."
  },
  {
    author: 'Christian Pearson, Data Protection Advisory Team',
    authorSlug: 'christian-pearson',
    quote: "I admire my colleagues commitment to each other. Everyone makes a sincere effort to help and support their coworkers."
  },
  {
    author: 'Elyssa May Cendana, Sales Team',
    authorSlug: 'elyssa-cendana',
    quote: "Aptible is always looking for ways to improve, both externally and internally. I appreciate that we encourage both our customers and employees to share feedback — and that we actually take that feedback into account."
  },
  {
    author: 'David Wen, Engineering Team',
    authorSlug: 'david-wen',
    quote: "I'm proud that our products enable other organizations to tackle problems they otherwise might not have the resources to tackle. This makes me feel like we have an outsized, positive effect on others."
  },
  {
    author: 'Mia Lopez, Growth Team',
    authorSlug: 'mia-lopez',
    quote: "It makes me proud that Aptible offers a product that helps tackle an issue as important as data security. I think the information a company collects is one of its greatest assets. And because that information holds so much power, keeping it safe is paramount."
  },
  {
    author: 'Sarah Veirs, Customer Success Team',
    authorSlug: 'sarah-veirs',
    quote: "I admire the commitment to the mission in my colleagues. Everyone is very much a team player and are dedicated to going above and beyond not just for our customers, but for each other. We love winning together and you can feel it."
  },
  {
    author: 'Zachary Starr-Glasser, People Operations Team',
    authorSlug: 'zachary-starr-glasser',
    quote: "I really admire that everyone lifts one another up. Being remote, I think it would be easy to be siloed and only interact during meetings, but everyone at Aptible really cares about supporting each other. I love how much people participate in our #Victory and #Thanks Slack Channels."
  },
];

class QuotesCarousel extends React.Component {
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
  }

  photoForEmployee = (authorSlug) => {
    const author = this.props.quotedEmployees.find((employee) => {
      return employee.node.slug === authorSlug;
    });

    if (author) {
      return author.node.professionalPhoto.file.url;
    }
  }

  render() {
    return (
      <div>
        <div className={styles.quoteSelector} ref={this.carouselRef}>
          <div className={styles.carouselContainer}>
            {ALL_QUOTES.map((quote, idx) =>
              <div key={idx} className={styles.quote}>
                <div className={styles.authorPhoto}>
                  <img src={this.photoForEmployee(quote.authorSlug)} alt={quote.author} />
                </div>
                <h4>
                  <span>&ldquo;</span>
                  {quote.quote}
                  &rdquo;
                </h4>
                <h6 className="small">{quote.author}</h6>
              </div>
            )}
          </div>
        </div>
        <Grid>
          <Row>
            <div className={styles.circles} ref={this.gridRef}></div>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default QuotesCarousel;
