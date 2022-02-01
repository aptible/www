import React from 'react';
import Accordion from '../shared/Accordion';
import styles from './Values.module.css';

const items = [
  {
    title: 'Own',
    content: (
      <>
        <p className="L">360º accountability</p>
        <ul>
          <li>We accomplish a lot that’s valuable to Aptible and its customers</li>
          <li>We are reliable to your colleagues and to our customers</li>
          <li>We seek what is best for Aptible, not just yourself or your team</li>
          <li>We make decisions collaboratively and communicate progress transparently</li>
          <li>We improve Aptible by asking questions of and providing timely feedback to colleagues, managers, executives</li>
          <li>We seek to achieve the desired outcome, not just task completion</li>
          <li>We take your “seat at the table” by contributing to strategic decisions</li>
          <li>Our managers lead with context, not control</li>
          <li>Our managers <a href="https://www.youtube.com/watch?v=w19IBxDu2Y4&t=200s" target="_blank">seek to edit, not write, and edit less over time</a></li>
          <li>Our managers educate, not just inform</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Grow',
    content: (
      <>
        <p className="L">Risk taking, experimentation, feedback</p>
        <ul>
          <li>We seek alternatives and think outside the box for ways to improve Aptible, its products, and yourself</li>
          <li>We learn quickly, especially from mistakes</li>
          <li>We are good at making decisions with data</li>
          <li>We use strong intuition to take thoughtful, calculated risks</li>
          <li>We <a href="https://blog.x.company/tackle-the-monkey-first-90fd6223e04d" target="_blank">tackle the monkey first</a></li>
          <li>We know stepping out of your comfort zone is the best way to grow</li>
          <li>We provide, solicit, and welcome feedback, especially tough feedback, because it's the best way to learn</li>
          <li>We <a href="https://www.bringthedonuts.com/essays/10x-not-10-percent.html" target="_blank">focus on 10x, not 10% optimizations</a></li>
          <li>We continuously self reflect</li>
          <li>Our managers support team members in calculated risk taking in search of growth, even when resulting in failure</li>
          <li>Our managers support team members in meeting personal and professional growth goals</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Understand',
    content: (
      <>
        <p className="L">Show empathy to colleagues and customers</p>
        <ul>
          <li>We care deeply about the success of your colleagues, our customers, and Aptible</li>
          <li>We trust your colleagues to make the right decisions and to request support and feedback when needed</li>
          <li>We seek first to understand</li>
          <li>We adapt your communication style to the needs of those you are communicating to</li>
          <li>We collaborate even when you’re disagreeing (disagree and commit)</li>
          <li>We find solutions that work for customers, not just those that work</li>
          <li>Our managers hear and consider their team members’ suggestions and help solve their problems</li>
          <li>Our managers help team members achieve balance</li>
        </ul>
      </>
    ),
  }
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
