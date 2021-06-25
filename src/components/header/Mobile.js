import React from 'react';
import cn from 'classnames';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './Mobile.module.css';
import Button from '../buttons/Button';
import SignupButton from '../signup/SignupButton';
import HeaderContext from './HeaderContext';
import { RESOURCES_NAV } from './Resources';
import { COMPANY_NAV } from './Company';

const Mobile = () => (
  <HeaderContext.Consumer>
    {context => (
      <div>
        <Grid>
          <div className={styles.mainItems}>
            <div className={styles.mainItem}>
              <Link className={cn(styles.heading, 'h4')} to="/features/">
                Features
              </Link>
            </div>
            <div className={styles.mainItem}>
              <Link
                className={cn(styles.heading, 'h4')}
                to="/pricing-plans/#deploy"
              >
                Pricing
              </Link>
            </div>

            <div className={styles.mainItem}>
              <Link className={cn(styles.heading, 'h4')} to="/customers/">
                Customers
              </Link>
            </div>

            <div className={styles.mainItem}>
              <Link className={cn(styles.heading, 'h4')} to="/resources/">
                Resources
              </Link>
              {RESOURCES_NAV.map(link => {
                if (link.external) {
                  return (
                    <div className={styles.subItem} key={link.url}>
                      <a
                        className="h6"
                        href={link.url}
                        target={link.newDomain ? '_blank' : null}
                        rel={link.newDomain ? 'noopener noreferrer' : null}
                      >
                        {link.title}
                      </a>
                    </div>
                  );
                }

                return (
                  <div className={styles.subItem} key={link.url}>
                    <Link className="h6" to={link.url}>
                      {link.title}
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className={styles.mainItem}>
              <Link className={cn(styles.heading, 'h4')} to="/company/">
                Company
              </Link>
              {COMPANY_NAV.map(link => (
                <div className={styles.subItem} key={link.url}>
                  <Link className="h6" to={link.url}>
                    {link.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.login}>
            <Button href="https://account.aptible.com/login">Log In</Button>
          </div>

          <div className={styles.cta}>
            <SignupButton text="Sign up for free" product="deploy" />
          </div>
        </Grid>
      </div>
    )}
  </HeaderContext.Consumer>
);

export default Mobile;
