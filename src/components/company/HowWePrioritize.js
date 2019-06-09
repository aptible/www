import React from 'react';
import Accordion from '../shared/Accordion';
import styles from './Values.module.css';

const items = [
  {
    title: 'Long-Term Customer Empowerment Over Short Term Gratification',
    content: <p className="L">
      We think of customer success in terms of empowerment and growth through
      self-improvement, which makes it easy to have a deep passion for that
      success and be deeply invested in it. We want to see our customers grow
      into mature teams that excel at protecting data. That said, the customer
      is not always right. Sometimes we tell customers things they don't want
      to hear, to help them improve. We think and talk about empowerment across
      the entire team, not just product: In our marketing, we're more likely
      to give away knowledge than swag. In sales, we always try to answer
      substantive questions and provide a roadmap for prospects, even if they
      don't buy.
    </p>
  },
  {
    title: 'Experience and Opinion Over Flexibility',
    content: <p className="L">
      Empowerment and growth as self-improvement also deeply inform our design
      for customer experiences, like product and support. We help our customers
      by solving hard problems in multiple domains. Our customers look to us as
      guides, and we weave our deep legal and technical experience into our
      software and services. Our products teach you how to get better as you use
      them. To do this well, we often choose to sacrifice flexibility first.
    </p>
  },
  {
    title: 'Leverage Over Effort',
    content: <p className="L">
      Our customers value leverage&mdash;doing more with less time and money,
      and fewer people. Our products give them leverage by making complex
      processes simple and safe. With Comply, our customers can launch an
      enterprise-grade compliance program without a CISO or security department.
      With Deploy, our customers get the benefits of a secure, highly-available,
      fault-tolerant infrastructure without having to recruit, run, and retain
      a DevOps team. We build products and experiences that give customers more
      value as they invest more into them.
    </p>
  },
];

export default () => (
  <div className={styles.container} id="values">
    <Accordion
      title="How We Prioritize"
      linkText="See Careers at Aptible"
      linkTo="/careers/"
      items={items} />
  </div>
);
