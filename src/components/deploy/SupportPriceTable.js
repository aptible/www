import React from 'react';
import classNames from 'classnames';
import ArrowButton from '../buttons/ArrowButton';
import styles from './SupportPriceTable.module.css';

const tiers = [
  { name: 'Standard', price: 0 },
  { name: 'Premium', price: 499 },
  { name: 'Enterprise', price: 1499 }
];

const Container = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);

const Divider = ({ className }) => (
  <hr className={classNames([styles.divider, className])} />
);

const TierHeading = () => tiers.map(tier => (
  <div
    className={classNames([
      styles.tierBlock,
      styles.tierHeading,
      styles[`tierHeading${tier.name}`]
    ])}
  >
    <p className={classNames(styles.tierName, "L")}>
      {tier.name}
    </p>

    <p className={classNames(styles.tierPrice, "h3")}>
      ${tier.price}
      <span className="h6">/mo</span>
    </p>
  </div>
));

const HeadingBlock = ({ title, items, footnote, className}) => (
  <div className={classNames(styles.block, styles.headingBlock, className)}>
    <h4>{title}{footnote && <sup className={styles.footnoteMarker}>{footnote}</sup>}</h4>
    {items.map(item => (
      <div key={item} aria-hidden="true">{item}</div>
    ))}
  </div>
);

const DataBlock = ({ title, tier, rows, items, footnote, footnoteRow, className }) => (
  <div className={classNames(styles.block, styles.tierBlock, styles.dataBlock, className)}>
    <h4 className={styles.smallHeading}><span className={styles.hiddenLabel}>{tier} </span>{title}</h4>
    {items.map((item, index) => (
      <div
        className={classNames(styles.dataBlockRow, item === 'N/A' && styles.na)}
        key={item}
      >
        <div className={styles.dataBlockMobileLabel}>{rows[index]}</div>
        {item}
        {footnote && footnoteRow === index + 1 && (
          <sup className={styles.footnoteMarker}>{footnote}</sup>
        )}
      </div>
    ))}
  </div>
);

const SupportRow = () => {
  const title = "Support";
  const rows = [
    "Supported Ticket Severities",
    "Available Hours for Support",
    "Available Channels"
  ];
      
  return (
    <>
      <HeadingBlock
        className={styles.supportHeadingBlock}
        title={title}
        items={rows}
      />

      <DataBlock
        tier="Standard"
        className={styles.standardSupportBlock}
        title={title}
        rows={rows}
        items={[
          "Low, Normal",
          "9am-6pm ET, M-F",
          "Email, Zendesk"
        ]}
      />

      <DataBlock
        tier="Premium"
        className={styles.premiumSupportBlock}
        title={title}
        rows={rows}
        items={[
          "Low, Normal, High",
          "9am-6pm ET, M-F",
          "Email, Zendesk"
        ]}
      />
      
      <DataBlock
        tier="Enterprise"
        className={styles.enterpriseSupportBlock}
        title={title}
        rows={rows}
        items={[
          "Low, Normal, High, Urgent",
          "24/7 (for Urgent tickets)",
          "Email, Zendesk, Slack"
        ]}
        footnote={1}
        footnoteRow={3}
      />
    </>
  );
};

const MaintenanceRow = () => {
  const title = "Maintenance Operations";
  const rows = [
    "Normal Hours",
    "Normal Hours Pricing",
    "Weekday Extended Hours",
    "Weekend Extended Hours",
    "Extended Hours Pricing",
  ];

  return (
    <>
      <HeadingBlock
        className={styles.maintenanceHeadingBlock}
        title={title}
        footnote={2}
        items={rows}
      />

      <DataBlock
        tier="Standard"
        className={styles.standardMaintenanceBlock}
        title={title}
        rows={rows}
        items={[
          "9am-9pm ET, M-F",
          "Included",
          "6am-9am or 9pm-12am ET, M-F",
          "6am-12am ET, Su Sa",
          "$299/hour",
        ]}
      />

      <DataBlock
        tier="Premium"
        className={styles.premiumMaintenanceBlock}
        title={title}
        rows={rows}
        items={[
          "9am-9pm ET, M-F",
          "Included",
          "6am-9am or 9pm-12am ET, M-F",
          "6am-12am ET, Su Sa",
          "$299/hour",
        ]}
      />

      <DataBlock
        tier="Enterprise"
        className={styles.enterpriseMaintenanceBlock}
        title={title}
        rows={rows}
        items={[
          "9am-9pm ET, M-F",
          "Included",
          "6am-9am or 9pm-12am ET, M-F",
          "6am-12am ET, Su Sa",
          "$299/hour",
        ]}
      />
    </>
  );
};

const BeyondRow = () => {
  const title = "Beyond Support";
  const rows = [
    "Hours",
    "Pricing: Scheduled",
    "Pricing: Urgent"
  ];

  return (
    <>
      <HeadingBlock
        className={styles.beyondHeadingBlock}
        title={title}
        footnote={3}
        items={rows}
      />

      <DataBlock
        tier="Standard"
        className={styles.standardBeyondBlock}
        title={title}
        rows={rows}
        items={[
          "N/A",
          "N/A",
          "N/A"
        ]}
      />

      <DataBlock
        tier="Premium"
        className={styles.premiumBeyondBlock}
        title={title}
        rows={rows}
        items={[
          "9am-6pm ET, M-F",
          "$299/hour",
          "N/A"
        ]}
      />

      <DataBlock
        tier="Enterprise"
        className={styles.enterpriseBeyondBlock}
        title={title}
        rows={rows}
        items={[
          "24/7",
          "$299/hour",
          "$599/hour"
        ]}
      />
    </>
  );
};

const Footnotes = () => {
  const footnotes = [
    {
      marker: 1,
      note: "Support via Slack is only offered at the Low and Normal severity levels, 9am-6pm M-F. For High and Urgent severity issues, a ticket must be opened through Zendesk. After the initial ticket is opened, Aptible may communicate to resolve the issue through Slack if that is mutually agreeable."
    }
  ];

  return footnotes.map(footnote => (
    <div className={styles.footnotes} key={footnote.marker}>
      <sup className={styles.footnoteMarker}>{footnote.marker}</sup>
      <div>{footnote.note}</div>
    </div>
  ));
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
        <span className={styles.responseTimePeriod}>6 hours</span>
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
    <ArrowButton href="https://aptible.zendesk.com/" text="Contact us to get started" />
  </div>
);

const Details = () => (
  <div className={styles.details}>
    <div className={styles.detailsLeft}>
      <h5>In-scope Support</h5>
      <p>In-Scope support operations are included in all support plans.</p>
      <p className={styles.smallHeading}>Included in-scope support operations</p>
      <ul>
        <li>Answering questions about Aptible services and features</li> 
        <li>Advice regarding best practices for app deployment and architecture</li>
        <li>Troubleshooting Aptible services and products</li>
        <li>Limited support of third-party applications, services and frameworks</li>
        <li>VPC, TGW, VPN initial setup, configuration verification and update</li>
        <li>Major database version upgrades</li>
        <li>Environment migrations (shared-tenancy to dedicated-tenancy)</li>
      </ul>

      <h5>Maintenance Operations<sup className={styles.footnoteMarker}>2</sup></h5>
      <p>Maintenance operations are operations that require more downtime than a traditional “restart” operation and are not self-service.</p>
      <p className={styles.smallHeading}>Example maintenance operations</p>
      <ul>
        <li>Major database version upgrades</li>
        <li>VPN tunnel replacements</li>
        <li>Environment migrations</li>
      </ul>
    </div>

    <div className={styles.detailsRight}>
      <h5>Beyond Support<sup className={styles.footnoteMarker}>3</sup></h5>
      <p>Beyond Support operations are included in Premium and Enterprise support plans only.</p>
      <p className={styles.smallHeading}>Included Beyond Support Operations</p>
      <ul>
        <li>Developing your application code</li>
        <li>Debugging custom software</li>
        <li>Performing manual system administration tasks</li>
        <li>Architectural review</li>
        <li>Live debugging of VPN connectivity issues with customers or partners</li>
      </ul>
    </div>
  </div>
);

export default () => (
  <Container>
    <TierHeading />
    <Divider className={styles.supportDivider} />
    <SupportRow />
    <Divider className={styles.maintenanceDivider} />
    <MaintenanceRow />
    <Divider className={styles.beyondDivider} />
    <BeyondRow />
    <Footnotes />
    <ResponseTimes />
    <GetStarted />
    <Details />
  </Container>
);
