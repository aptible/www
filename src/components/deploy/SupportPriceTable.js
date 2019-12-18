import React from 'react';
import classNames from 'classnames';
import { Grid } from '../grid/Grid';
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
    <h4>{title}{footnote && <sup>{footnote}</sup>}</h4>
    {items.map(item => (
      <div key={item} aria-hidden="true">{item}</div>
    ))}
  </div>
);

const DataBlock = ({ title, tier, rows, items, className }) => (
  <div className={classNames(styles.block, styles.tierBlock, styles.dataBlock, className)}>
    <h4><span className={styles.hiddenLabel}>{tier} </span>{title}</h4>
    {items.map((item, index) => (
      <div
        className={classNames(item === 'N/A' && styles.na)}
        key={item}
      >
        <span className={styles.hiddenLabel}>{rows[index]} – </span>
        {item}
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
      />
    </>
  );
};

const MaintenanceRow = () => {
  const title = "Maintenance Operations";
  const rows = [
    "Pricing",
    "Available Hours",
    "Weekday Extended Hours",
    "Weekend Extended Hours"
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
          "$299/hour",
          "9am-9pm ET, M-F",
          "6am-9am or 9pm-12am ET, M-F",
          "6am-12am ET, Su Sa",
        ]}
      />

      <DataBlock
        tier="Premium"
        className={styles.premiumMaintenanceBlock}
        title={title}
        rows={rows}
        items={[
          "$299/hour",
          "9am-9pm ET, M-F",
          "6am-9am or 9pm-12am ET, M-F",
          "6am-12am ET, Su Sa",
        ]}
      />

      <DataBlock
        tier="Enterprise"
        className={styles.enterpriseMaintenanceBlock}
        title={title}
        rows={rows}
        items={[
          "$299/hour",
          "9am-9pm ET, M-F",
          "6am-9am or 9pm-12am ET, M-F",
          "6am-12am ET, Su Sa"
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

export default () => (
  <Container>
    <TierHeading />
    <Divider className={styles.supportDivider} />
    <SupportRow />
    <Divider className={styles.maintenanceDivider} />
    <MaintenanceRow />
    <Divider className={styles.beyondDivider} />
    <BeyondRow />
  </Container>
);