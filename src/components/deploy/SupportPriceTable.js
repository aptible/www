import React from 'react';
import classNames from 'classnames';
import { Grid } from '../grid/Grid';
import styles from './SupportPriceTable.module.css';

const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

const Divider = ({ className }) => (
  <hr className={classNames([styles.divider, className])} />
);

// const PriceHeading = ({ tier, price, className }) => {
const PriceHeading = () => (
  <>
    {[
      { tier: 'Standard', price: 0 },
      { tier: 'Premium', price: 499 },
      { tier: 'Enterprise', price: 1499 }
    ].map(heading => (
      <div
        className={classNames([
          styles.priceBlock,
          styles.priceHeading,
          styles[`priceHeading${heading.tier}`]
        ])}
      >
        <p className={classNames(styles.tier, "L")}>
          {heading.tier}
        </p>

        <p className={classNames(styles.price, "h3")}>
          ${heading.price}
          <span className="h6">/mo</span>
        </p>
      </div>
    ))}
  </>
);

// return (
//   <div className={classNames(styles.priceBlock, styles.priceHeading, className)}>
//     <p className={classNames(styles.tier, "L")}>{tier}</p>
//     <p className={classNames(styles.price, "h3")}>${price}<span className="h6">/mo</span></p>
//   </div>
// );

const HeadingBlock = ({ title, items, footnote, className}) => (
  <div className={classNames(styles.block, styles.headingBlock, className)}>
    <h4>{title}{footnote && <sup>{footnote}</sup>}</h4>
    {items.map(item => (
      <div key={item}>{item}</div>
    ))}
  </div>
);

const DataBlock = ({ title, items, className }) => (
  <div className={classNames(styles.block, styles.priceBlock, styles.dataBlock, className)}>
    <h4>{title}</h4>
    {items.map(item => (
      <div className={classNames(item === 'N/A' && styles.na)} key={item}>{item}</div>
    ))}
  </div>
);

const StandardPricing = () => (
  <>
    <DataBlock
      className={styles.standardSupportBlock}
      title="Support"
      items={[
        "Low, Normal",
        "9am-6pm ET, M-F",
        "Email, Zendesk"
      ]}
    />

    <DataBlock
      className={styles.standardMaintenanceBlock}
      title="Maintenance Operations"
      items={[
        "$299/hour",
        "9am-9pm ET, M-F",
        "6am-9am or 9pm-12am ET, M-F",
        "6am-12am ET, Su Sa",
      ]}
    />
    
    <DataBlock
      className={styles.standardBeyondBlock}
      title="Beyond Support"
      items={[
        "N/A",
        "N/A",
        "N/A"
      ]}
    />
  </>
);

const PremiumPricing = () => (
  <>
    <DataBlock
      className={styles.premiumSupportBlock}
      title="Support"
      items={[
        "Low, Normal, High",
        "9am-6pm ET, M-F",
        "Email, Zendesk"
      ]}
    />

    <DataBlock
      className={styles.premiumMaintenanceBlock}
      title="Maintenance Operations"
      items={[
        "$299/hour",
        "9am-9pm ET, M-F",
        "6am-9am or 9pm-12am ET, M-F",
        "6am-12am ET, Su Sa",
      ]}
    />
    
    <DataBlock
      className={styles.premiumBeyondBlock}
      title="Beyond Support"
      items={[
        "9am-6pm ET, M-F",
        "$299/hour",
        "N/A"
      ]}
    />
  </>
);

const EnterprisePricing = () => (
  <>
    <DataBlock
      className={styles.enterpriseSupportBlock}
      title="Support"
      items={[
        "Low, Normal, High, Urgent",
        "24/7 (for Urgent tickets)",
        "Email, Zendesk, Slack"
      ]}
    />

    <DataBlock
      className={styles.enterpriseMaintenanceBlock}
      title="Maintenance Operations"
      items={[
        "$299/hour",
        "9am-9pm ET, M-F",
        "6am-9am or 9pm-12am ET, M-F",
        "6am-12am ET, Su Sa"
      ]}
    />
    
    <DataBlock
      className={styles.enterpriseBeyondBlock}
      title="Beyond Support"
      items={[
        "24/7",
        "$299/hour",
        "$599/hour"
      ]}
    />
  </>
);

export default () => (
  <Container>
    {/* {[
      { tier: 'Standard', price: 0 },
      { tier: 'Premium', price: 499 },
      { tier: 'Enterprise', price: 1499 }
    ].map(heading => (
      <PriceHeading
        className={styles[`priceHeading${heading.tier}`]}
        {...heading}
      />
    ))} */}
    <PriceHeading />

    <Divider className={styles.supportDivider} />

    <HeadingBlock
      className={styles.supportHeadingBlock}
      title="Support"
      items={[
        "Supported Ticket Severities",
        "Available Hours for Support",
        "Available Channels"
      ]}
    />

    <Divider className={styles.maintenanceDivider} />

    <HeadingBlock
      className={styles.maintenanceHeadingBlock}
      title="Maintenance Operations"
      footnote={2}
      items={[
        "Pricing",
        "Available Hours",
        "Weekday Extended Hours",
        "Weekend Extended Hours"
      ]}
    />

    <Divider className={styles.beyondDivider} />

    <HeadingBlock
      className={styles.beyondHeadingBlock}
      title="Beyond Support"
      footnote={3}
      items={[
        "Hours",
        "Pricing: Scheduled",
        "Pricing: Urgent"
      ]}
    />

    <StandardPricing />

    <PremiumPricing />

    <EnterprisePricing />
  </Container>
);