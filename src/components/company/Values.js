import React from 'react';
import Accordion from '../shared/Accordion';
import styles from './Values.module.css';

const items = [
  {
    title: 'Commitment to the Team',
    content: <p className="L">
      We are building an exceptional team by finding exceptional people that
      care deeply about building exceptional teams, wherever they are. We talk
      a lot about the science of high-performing teams and how to make Aptible
      the best environment to build that kind of team. We reward people who
      contribute ideas and effort to team building. You'd probably fit in if
      you have a track record of being a member of high-performing teams before
      (in work, sports, music, really anything) and love the mutual support and
      camaraderie of a strong team that wins together.
    </p>
  },
  {
    title: 'Commitment to Each Other',
    content: <p className="L">
      We commit to each other as individuals, one on one. We measure our
      commitments carefully and hold each other accountable, which means we’re
      able to deliver more for our colleagues and customers in the long run. We
      set only a few very clear, ambitious goals as a company each quarter, and
      talk about them constantly to reinforce focus. We make time to recognize,
      praise, and reward those who consistently deliver on their promises.
    </p>
  },
  {
    title: 'Commitment to The Mission',
    content: <p className="L">
      Startups are hard, and we expect challenges and missteps. We love winning,
      but most of all, we value getting back up and getting better at what we
      do. We are deeply motivated to build trust on the internet by empowering
      teams, and we respect grit and perseverance in furtherance of that mission.
    </p>
  },
  {
    title: 'Growth Over Perfection',
    content: <p className="L">
      We fail often and early, and learn from it. We talk about improving
      constantly. We praise those who give feedback early and often. We put
      effort into being good at giving feedback: When we give feedback, we make
      each other feel big, not small. This helps create an environment where we
      can take reasonable risks, which in turn helps us make decisions quickly
      and learn fast. We expect managers to delegate a lot, and acknowledge that
      delegation means sometimes letting someone make what you think is the
      wrong decision.
    </p>
  },
  {
    title: 'Teaching as Learning',
    content: <p className="L">
      We are a team of learners. We value and respect teaching - we believe it’s
      the best way to learn, and make time to share information openly. We set
      explicit goals around training, and devote resources to developing and
      improving our internal training. We praise those who share knowledge in
      public, such as asking and answering questions in team chat, writing
      documentation, and writing for our customers.
    </p>
  },
  {
    title: 'Taking vs Giving Responsibility',
    content: <p className="L">
      Identifying problems is a good start, but we love solving them more. We
      think and talk a lot about how we can improve, and work hard at it. We
      value and reward those who take initiative. We don't like meetings where
      we only talk about problems.
    </p>
  },
  {
    title: 'Asking Why',
    content: <p className="L">
      We ask “why?” a lot in order to understand root causes. Asking why helps
      us cultivate focus and make high-quality decisions quickly. We don't
      attributes mistakes to human error - we view it as a starting point for
      an inquiry, not the end.
    </p>
  },
];

export default () => (
  <div className={styles.useCases}>
    <Accordion
      title="Our Values"
      description="We operate according to these values. Sound like something you care about?"
      linkText="See Job Openings"
      linkTo="/use-cases/"
      items={items} />
  </div>
);
