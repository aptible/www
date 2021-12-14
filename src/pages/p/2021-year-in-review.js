import React from 'react';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';
import AptibleLayout from '../../components/layouts/AptibleLayout';
import reviewVideoStyles from './ReviewVideo.module.css'
import Video from './components/Video';
import styles from './VideoLandingPage.module.css';
import Markdown from '../../components/blog/Markdown';
export default () => {
  return (
    <AptibleLayout>
      <Helmet>
        <title>Aptible | 2021 Year in Review</title>
        <meta
          name="description"
          content="Go from zero to HITRUST-compliant Docker deployment in minutes"
        />
        <meta
          property="og:image"
          content="https://aptible.com/assets/2021-year-in-review.png"
        />
      </Helmet>
      <div className={styles.layout}>
        <div className={classnames(styles.container, styles.textCenter)}>
          <div className={reviewVideoStyles.intro}>
            <h1 className="hero">2021 Year in Review</h1>
            <p className="XL">
            2021 has brought a lot of change and growth for Aptible. At the end of a
            busy year, we bring you a message from our Founder and CEO, Frank Macreery, recapping this year and looking ahead to 2022.
            </p>
          </div>
          <Video videoId='rkkz1ahq2q' />

          <div className={reviewVideoStyles.transcript}>
            <h5>Links mentioned in the video</h5>
            <ul className={reviewVideoStyles.links}>
              <li><a href='https://www.aptible.com/customers/project-beacon/'>Project Beacon Customer Story</a></li>
              <li><a href='https://docs.aptible.com/docs/comply-grc-sunset-frequently-asked-questions'>Aptible Split + Comply GRC Sunset</a></li>
              <li><a href='https://www.conveyor.com/'>Conveyor</a></li>
              <li><a href='https://community.aptible.com/'>Join our Community!</a></li>
            </ul>
            <h5>Video Transcript</h5>
            <Markdown>
          {`0:12
Frank Macreery: Hello. I'm Frank Macreery and I'm CEO of Aptible. As we approach the end of what's been a busy and eventful year for Aptible and I'm sure for you, our team wanted to put together a short video highlighting the growth that we and our customers have experienced, the changes that have led us to where we are today, and a preview of the future of Aptible. Not to spoil too much, but in 2022 Aptible’s going to start supporting more and more services in AWS, GCP and Azure directly to be able to secure more of your cloud use cases.

We're really excited to share more about that today and in the coming months. Here's a brief agenda of what I'll cover in this video. Please skip ahead to whatever is most interesting to you.

0:57
I wanted to start by sharing a story from one of our customers. We built Aptible eight years ago with the goal of making security easy for every developer, and we've been so grateful for those of you who have caught that vision and have been along for the journey. Whether it's been for years or if you're just getting started, we're always inspired to see what you build on Aptible.
I asked our customer Project Beacon if we could share their story today, because what they've built on Aptible has really blown us away.

With the rise of COVID-19 in 2020, Massachusetts, like many states, was in great need of a reliable, affordable testing system to serve their communities across the state. Backed by F-Prime Capital, GV and the Broad Institute of MIT and Harvard, Project Beacon answered this call. They needed to get up and running quickly, while complying with HIPAA privacy standards and the main roadblock they hit in going live was doing all this on a secure and affordable platform that they didn't have to build from scratch.

Project Beacon found Aptible in the Spring of 2020 and launched their first testing site in Massachusetts shortly thereafter. By August of last year, they administered over 900,000 tests and today they have four free testing sites in the state. Instead of enduring the hundreds of steps traditionally required to get code from development into production, Project Beacon was able to boil all this down to a handful of checklist items and, ultimately, a single action.

The Project Beacon team told us that Aptible has led to hundreds of hours saved in the course of bringing their app and testing sites to the community all at an affordable price, thanks to Aptible’s ability to flexibly scale to their needs. But what we're most excited about is that Project Beacon's work has been attributed to a steep drop in testing prices across New England since their sites opened, because they've put pressure on the rest of the industry to deliver high quality testing at low cost amidst this public health emergency.

While we all hope that the pandemic is in the rearview mirror as quickly as possible, Project Beacon's hope is that their infrastructure and tooling, which includes Django on the backend, React on the frontend, Postgre for databases, as well as S3 and Cloudflare, has laid a roadmap that may help other projects get online just as quickly. Their CTO Jackson Wilkinson says, “The key goal has been to get us through COVID-19, but we’d love to see the impact of our work well into the future.”

Thank you Project Beacon for letting us share this story today and for taking this journey with us. You can read more about Project Beacon and their story on our website, linked below this video.

3:40
As most of you likely know, 2021 brought a lot of change for Aptible. I haven't always been the CEO, but that change and many others came out of the difficult decision that our leadership made over the summer to split the company in two, retaining Aptible and launching a new company called Conveyor. As a result of this transition, we also made the difficult decision to sunset Comply GRC, our compliance automation product. The short reason for this is that after pursuing a GRC product for over three years, it became clear to us that what we were building just didn't have enough demand in the market. We had many customers who passed audits using Comply and really enjoyed using the product, but unfortunately the decision to keep investing in Comply or sunset it, came down to us making a decision about what was best for our business and our team. Ultimately, we felt the best and most responsible choice was to sunset Comply and focus our efforts on really building the product that has always had a strong product market fit, Deploy.

A question that we've gotten a lot over the past few months since the split has been, “What does this mean for Deploy?” I can very confidently say, now that we’re a few months out, that the refocusing of our time, effort and money, means that we have more resources than ever to invest in the Deploy product, which we're now just referring to as Aptible. This has allowed us to grow in new and exciting ways. If you'd like to learn more about the split we've linked our FAQs below along with more information about Conveyor, as they create a trust network using what they learned from Comply.

5:21
For those of you who did use Comply and relied on it heavily to get through your audits, we wanted to take elements of that product and apply them to Aptible in a new way. With your feedback, we created the Compliance and Visibility Dashboard.

This new dashboard provides a view of all the security controls Aptible provides and allows you to compare your setup to compliance frameworks that you're targeting. We’ll show you which controls Aptible enforces automatically, which controls you've already addressed and which controls need to be reviewed or implemented. So far, we've already had a few customers use this dashboard to successfully complete HIPAA and HITRUST audits. We'd love your feedback as you use this new feature, so please don't hesitate to contact us with questions or requests.

We've also introduced a number of core platform improvements and features along the way this year. This includes re-architecting our logging engine for more reliable log delivery, support for multi-stage docker image builds, and GP3 database volumes that give improved performance and flexible configuration of IOPS, independent of desk size.

In the next month will also be releasing changes to greatly improve release times when new instance capacity is required to support your apps and databases, as well as to allow more compute profiles for your containers, CPU optimized, memory optimized and economy containers, in addition to our baseline general purpose instance container profile. If any of these features are interesting to you, our product team would love to hear your feedback.

6:55
As I mentioned earlier, we knew that if we wanted Aptible to continue to succeed, we needed a renewed focus on our main product that has grown us to where we are today. At the beginning of 2021 we had just five members of our team focused on Deploy, what we now know as Aptible. We're finishing the year as a team of 16, which is the largest team we've ever had focused on this product. I know, it's surprisingly lean.

Our customer retention has always been high, thanks to the ease of use of the product, the good faith of our customers and our stellar Support Team. We will always continue to focus on providing an excellent experience for our existing customers, but we've also finally had the bandwidth to expand our outreach and grow our customer base.

Though we've been able to operate with such a lean team for so long, we want to start putting our resources to growing the team thoughtfully, hiring for positions that will ultimately help us make the next phase of Aptible’s growth achievable. That next phase I'm talking about is our vision of expanding Aptible into supporting Any-Cloud.

Our vision is to empower any and every developer to employ best in class security when deploying cloud services, regardless of their infrastructure, application stack, architecture, industry or skill level. We want to start by helping secure the infrastructure you run outside of our managed platform on AWS, GCP, Azure and other cloud platforms. With our new Any-Cloud approach, developers will gain flexibility to use the best cloud resources for any job with easy resource provisioning and security monitoring, as well as the confidence that your infrastructure is meeting best-in-class security and compliance controls.

If you're one of our hundreds of existing customers, I want you to know that nothing will change about the managed platform, and we’ll continue to provide you with the same level of service support and product development that we’ve provided to our customers since 2014. However, we hope that in 2022, our Any-Cloud approach will provide a compelling new way for you to securely provision and manage resources you might want to use outside of our managed platform and I look forward to sharing more with you on that in the coming months.

We also anticipate this shift opening up more opportunities for our customers to find new solutions to problems thanks to our vast community of Aptible users. We've revamped our developer Community site, because we believe that knowledge-sharing is what will allow all of us to grow faster and better. When you ask our support team a question, there's a very good chance that another Aptible user has thought the exact same thing, so we prioritized a more focused effort on connecting you to the right answer and other users with creative solutions as quickly as possible. We invite you to join us on the Community, linked below.

9:49
Finally, we wanted to say thank you. Many of you have been with us through many phases of growth and change for Aptible, and I wanted to take a moment to let you know how grateful I am that you've trusted Aptible with your deployment, your security and compliance, whatever the case may be. We're so thankful that you've joined us as we pursue our mission of making cloud security easy for every Developer. As always, if you have questions or feedback for our team, please don't hesitate to reach out or create a post in the new Community.

From the Aptible Team to yours, we wish you a safe and happy holiday season and we'll see you in the New Year. Thank you.`}

          </Markdown>
          </div>
        </div>
      </div>
    </AptibleLayout>
  );
};
