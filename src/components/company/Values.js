import React from 'react';
import Accordion from '../shared/Accordion';
import styles from './Values.module.css';

const items = [
  {
    title: 'Done is Better than Perfect',
    content: (
      <>
        <p className="L">“The perfect is the enemy of the good.” ― Voltaire</p>
        <p className="L">
          We identify the core value of a project and ship the simple thing
          first. We’re willing to set a goal we’re not sure of because it
          inspires us to act in the spirit of learning, reflect on the results,
          and gather valuable data about what to try next. We fail often and
          early in pursuit of experimentation and risk-taking on novel ideas.
        </p>
        <p className="L">
          We value and respect teaching as the best way to learn, and make time
          to share information openly. We are a team of learners with a growth
          mindset: We talk about improving constantly and challenge each other
          to grow.
        </p>
      </>
    ),
  },
  {
    title: 'Be Hard on Problems, Not People',
    content: (
      <>
        <p className="L">
          “Feedback comes from a place of positive intent.” —{' '}
          <a href="https://medium.com/@michaelterrell/what-is-feedback-anyways-2a803c7f2d59">
            Michael Terrell
          </a>
        </p>
        <p className="L">
          We discuss our questions and concerns openly as a group. We practice
          giving effective feedback, with the intent of helping each other be
          more successful. When we give feedback, we make each other feel big,
          not small.
        </p>
        <p className="L">
          We work to create an environment where it feels completely safe to ask
          for help and take a risk — where we feel valued for our contributions
          and accepted for who we are. We don't attribute mistakes or unexpected
          outcomes to human error: We view them as a starting point for an
          inquiry, not the end. We can resolve difficult issues while supporting
          each other.
        </p>
      </>
    ),
  },
  {
    title: 'Ask Why',
    content: (
      <>
        <p className="L">
          “Is the juice worth the squeeze?” — Source Unknown
        </p>
        <p className="L">
          We seek to understand before we act. We question our assumptions and
          surface differences of opinion, in order to discover gaps in our plans
          and make changes accordingly.
        </p>
        <p className="L">
          By asking “Why?”, we cultivate focus and create leverage: We pick the
          right things to work on and maximize the impact of our efforts. By
          asking “Why?”, we make space for the creative tension between optimism
          and skepticism, and think strategically about what and how we build.
        </p>
      </>
    ),
  },
];

export default () => (
  <div className={styles.container} id="values">
    <Accordion
      title="Our Values"
      linkText="See Careers at Aptible"
      linkTo="/careers/"
      items={items}
    />
  </div>
);
