import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import ArrowButton from '../buttons/ArrowButton';
import styles from './Culture.module.css';

export default () => (
  <div>
    <Grid>
      <div className={styles.intro}>
        <p className="XL">
          We’re a team of mission-driven experts and learners who are committed
          to making security a strength for every startup. We’ve already helped
          hundreds of innovative companies succeed at becoming trustworthy
          custodians of sensitive data. And we’re just getting started.
        </p>

        <ArrowButton to="/company/" text="Learn More About Aptible" />
      </div>

      <div className={styles.cultureGrid}>
        <div className={styles.culture}>
          <h4>We’re Remote First</h4>
          <p className="L">
            We’ve been fully distributed since Employee #1. We have teammates
            across North America — from Vancouver to San Francisco to Dallas to
            Detroit to New York — who have the flexibility to work from home or
            the co-working space of their choice. We’re passionate about
            building a diverse team of talented people who accomplish great
            things together, regardless of where they are.
          </p>
        </div>

        <div className={styles.culture}>
          <h4>We’re Values Focused</h4>
          <p className="L">
            We’re intentional about the culture we’re trying to create, and take
            the time to articulate what we mean by “us”. Early on, we
            co-authored <Link to="/company/">Our Values</Link> to clearly
            communicate how we work together as a team. The more these values
            sound like you&mdash;and describe people you want to work
            with&mdash;the more likely you’ll thrive at Aptible.
          </p>
        </div>

        <div className={styles.culture}>
          <h4>We Support Taking Risks</h4>
          <p className="L">
            We care deeply about fostering an environment where teammates feel
            safe taking risks&mdash;asking questions, offering new ideas, making
            mistakes&mdash;and bringing their full emotional selves to work. We
            encourage each other to share our personal and work style
            preferences, and talk openly about the things we know to be true and
            unique about ourselves.
          </p>
        </div>

        <div className={styles.culture}>
          <h4>We Invest in Clarity</h4>
          <p className="L">
            We regularly communicate our goals and our strategy for achieving
            them. Like many successful companies, we use Objectives & Key
            Results (OKRs) to organize our work. Throughout each week, we come
            together for 1:1s, Team Syncs, and All-Hands to ensure focus on OKRs
            and empower teammates to make progress towards them.
          </p>
        </div>

        <div className={styles.culture}>
          <h4>We Strive for Impact</h4>
          <p className="L">
            We regularly reflect on the work we’re doing and how it impacts
            others. We establish strong relationships with our customers, and
            routinely engage with them to ensure that we’re developing products
            that resonate and deliver value. Internally, we create space to give
            each other feedback, express gratitude, and celebrate our wins.
          </p>
        </div>
      </div>

      <div className={styles.cta}>
        <ArrowButton
          to="/handbook/"
          text="Read the Aptible Handbook"
        />
      </div>
    </Grid>
  </div>
);
