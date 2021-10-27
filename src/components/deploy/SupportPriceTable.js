import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import ArrowButton from '../buttons/ArrowButton';
import Footnotes, { FootnoteMarker } from '../shared/Footnotes';
import styles from './SupportPriceTable.module.css';

const tiers = [
  { name: 'Standard', showPrice: true, price: 0, description: 'Recommended for production workloads' },
  { name: 'Premium', showPrice: true, price: 499, description: 'Recommended for production workloads, with same day Support for tickets submitted before 3PM during the work week.' },
  { name: 'Enterprise', showPrice: true, price: 1499, description: 'Recommended for critcal production workloads that require 24/7 support' }
];

const footnotes = [
  {
    marker: 1,
    note:(
    <>
      Regardless of support plan, Aptible is committed to best-in-class uptime for all customers.
      Aptible will use commercially reasonable efforts to make your Aptible Containerized Services running
      in Dedicated Environments available with a Monthly Uptime Percentage of at least 99.95% during any
      monthly billing cycle. A Monthly Uptime Percentage of 99.95% means that we guarantee you will
      experience no more than 21.56 min/month of Unavailability. Unavailability, for app services and
      databases, is when your service or database is not running or not reachable due to Aptible's fault.
      ou can find details on our commitment to uptime and company level SLAs
      <Link to="/legal/service-level-agreement">here</Link>. The Support plans and their associated target
      response times are for roadblocks that customers run into while Aptible Services are up and running
      as expected.
    </>)
  }
];

const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

const Divider = ({ className }) => (
  <hr className={classNames([styles.divider, className])} />
);

const TierHeading = () =>
  tiers.map(tier => (
    <div
      key={tier.name}
      className={classNames([
        styles.tierBlock,
        styles.tierHeading,
        styles[`tierHeading${tier.name}`],
      ])}
    >
      <p className={classNames(styles.tierName, 'L')}>{tier.name}</p>

      {tier.showPrice && (
        <>
          <p className={classNames(styles.tierPrice, 'h3')}>
            ${tier.price}
            <span className="h6">
              /mo
            </span>
          </p>
          {tier.price !== 0 && (
            <p className={styles.priceSubtext}>+3% of Monthly Invoice</p>
          )}
        </>
      )}

      {!tier.showPrice && (
        <p className={classNames(styles.tierPrice, 'h3')}>
          Contact Us
        </p>
      )}

      {tier.description && (
        <p className={styles.tierDescription}>{tier.description}</p>
      )}

    </div>
  ));

const HeadingBlock = ({ title, items, footnote, footnoteRow, className }) => (
  <div className={classNames(styles.block, styles.headingBlock, className)}>
    <h4>
      {title}
      {footnote && !footnoteRow && <FootnoteMarker>{footnote}</FootnoteMarker>}
    </h4>
    {items.map((item, index) => (
      <div key={item} aria-hidden="true">
        {item}
        {footnote && footnoteRow === index + 1 && (
          <FootnoteMarker>{footnote}</FootnoteMarker>
        )}
      </div>
    ))}
  </div>
);

const DataBlock = ({
  title,
  tier,
  rows,
  items,
  footnote,
  footnoteRow,
  className,
}) => (
  <div
    className={classNames(
      styles.block,
      styles.tierBlock,
      styles.dataBlock,
      className,
    )}
  >
    <h4 className={styles.smallHeading}>
      <span className={styles.hiddenLabel}>{tier} </span>
      {title}
    </h4>
    {items.map((item, index) => (
      <div
        className={classNames(styles.dataBlockRow, item === 'N/A' && styles.na)}
        key={`${rows[index]}:${item}`}
      >
        <div className={styles.dataBlockMobileLabel}>{rows[index]}</div>
        {item}
        {footnote && footnoteRow === index + 1 && (
          <FootnoteMarker>{footnote}</FootnoteMarker>
        )}
      </div>
    ))}
  </div>
);


const TRTRow = () => {
  const title = 'Target Response Times'
  const rows = [
    'Low Priority', 'Normal Priority', 'High Priority', 'Urgent Priority'
  ]
  return (
    <>
      <HeadingBlock
        className={styles.trtHeadingBlock}
        title={title}
        items={rows}
        footnote={1}
        footnoteRow={0}
      />
       <DataBlock
        tier="Standard"
        className={styles.standardTrtBlock}
        title={title}
        rows={rows}
        items={[
          '2 Business Days', '1 Business Day', '1 Business Day', '1 Business Day'
        ]}
      />
      <DataBlock
        tier="Premium"
        className={styles.premiumTrtBlock}
        title={title}
        rows={rows}
        items={[
          '2 Business Days', '1 Business Day', '3 Business Hours', '3 Business Hours'
        ]}
      />

      <DataBlock
        tier="Enterprise"
        className={styles.enterpriseTrtBlock}
        title={title}
        rows={rows}
        items={[
          '2 Business Days', '1 Business Day', '3 Business Hours', '1 Calendar Hour'
        ]}
        footnote={null}
        footnoteRow={null}
      />
    </>
  );
}

const SupportRow = () => {
  const title = 'Support Options';
  const rows = [
    '24/7 Support (for Urgent)',
    'Email and Zendesk Support',
    'Slack Support (for Low/Normal)',
    'Production Readiness Reviews',
    'Architectural Reviews',
    'Technical Account Manager',
    'Quarterly Reviews'
  ];

  return (
    <>
      <HeadingBlock
        className={styles.supportHeadingBlock}
        title={title}
        items={rows}
        footnote={null}
        footnoteRow={null}
      />

      <DataBlock
        tier="Standard"
        className={styles.standardSupportBlock}
        title={title}
        rows={rows}
        items={[
          'N/A', '✔ Included', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A'
        ]}
      />

      <DataBlock
        tier="Premium"
        className={styles.premiumSupportBlock}
        title={title}
        rows={rows}
        items={[
          'N/A', '✔ Included', 'N/A', '✔ Included', 'N/A', '✔ Included', 'N/A'
        ]}
      />

      <DataBlock
        tier="Enterprise"
        className={styles.enterpriseSupportBlock}
        title={title}
        rows={rows}
        items={[
          '✔ Included', '✔ Included', '✔ Included', '✔ Included', '✔ Included', '✔ Included', '✔ Included'
        ]}
        footnote={null}
        footnoteRow={null}
      />
    </>
  );
};

const BeyondRow = () => {
  const title = 'Beyond Support';
  const rows = ['Hours', 'Pricing: Scheduled', 'Pricing: Urgent'];

  return (
    <>
      <HeadingBlock
        className={styles.beyondHeadingBlock}
        title={title}
        footnote={null}
        items={rows}
      />

      <DataBlock
        tier="Standard"
        className={styles.standardBeyondBlock}
        title={title}
        rows={rows}
        items={['N/A', 'N/A', 'N/A']}
      />

      <DataBlock
        tier="Premium"
        className={styles.premiumBeyondBlock}
        title={title}
        rows={rows}
        items={['9am-6pm ET, M-F', '$299/hour', 'N/A']}
      />

      <DataBlock
        tier="Enterprise"
        className={styles.enterpriseBeyondBlock}
        title={title}
        rows={rows}
        items={['24/7', '$299/hour', '$599/hour']}
      />
    </>
  );
};

const ResponseTimes = () => (
  <div className={styles.responseTimes}>
    <h5>Target Response Times by Ticket Severity</h5>
    <div className={styles.responseTimesTable}>
      <div className={styles.responseTime}>
        <span>Low</span>
        <span className={styles.responseTimePeriod}>2 business days</span>
      </div>

      <div className={styles.responseTime}>
        <span>Normal</span>
        <span className={styles.responseTimePeriod}>1 business day</span>
      </div>

      <div className={styles.responseTime}>
        <span>High</span>
        <span className={styles.responseTimePeriod}>3 business hours</span>
      </div>

      <div className={styles.responseTime}>
        <span>Urgent</span>
        <span className={styles.responseTimePeriod}>1 hour</span>
      </div>
    </div>
  </div>
);

const GetStarted = () => (
  <div className={styles.getStarted}>
    <h3>Ready to get started with Premium Support?</h3>
    <ArrowButton
      href="https://aptible.zendesk.com/hc/en-us/requests/new"
      text="Contact us to get started"
    />
  </div>
);

const Details = () => (
  <div className={styles.details}>
    <div className={styles.detailsLeft}>
      <h5>In-scope Support</h5>
      <p>In-Scope support requests are included in all support plans. Examples include:</p>
      <ul>
        <li>Answering questions about Aptible services and features</li>
        <li>
          Advice regarding best practices for app deployment and architecture
        </li>
        <li>Troubleshooting Aptible services and products</li>
        <li>
          Limited support of third-party applications, services and frameworks
        </li>
        <li>
          VPC, TGW, VPN initial setup, configuration verification and update
        </li>
      </ul>
    </div>
    <div className={styles.detailsRight}>
      <h5>
        Maintenance Operations
      </h5>
      <p>
        Maintenance operations are operations that require more downtime than a
        traditional “restart” operation and are not self-service. Example maintenance operations:
      </p>

      <ul>
        <li>Major database version upgrades</li>
        <li>VPN tunnel replacements</li>
        <li>Environment migrations (shared-tenancy to dedicated-tenancy)</li>
      </ul>
    </div>
  </div>
);

export default () => (
  <Container>
    <TierHeading />
    <Divider className={styles.supportDivider} />
    <TRTRow />
    <Divider className={styles.supportDivider} />
    <SupportRow />
    <Footnotes footnotes={footnotes} />
    <GetStarted />
    <Details />
  </Container>
);
