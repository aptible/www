import React from 'react';
import cn from 'classnames';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './Mobile.module.css';
import Button from '../buttons/Button';
import SignupButton from '../signup/SignupButton';
import HeaderContext from './HeaderContext';
import { PRODUCTS_NAV } from './Products';
import { USE_CASES_NAV } from './UseCases';
import { RESOURCES_NAV } from './Resources';
import { COMPANY_NAV } from './Company';

const Mobile = () => (
  <HeaderContext.Consumer>
    {context => (
      <div>
        <Grid>
          <div className={styles.mainItems}>
            {PRODUCTS_NAV.map((product) => (
              <div key={product.title} className={styles.mainItem}>
                <Link className={cn(styles.heading, "h4")} to={product.url}>{product.title}</Link>
                {product.links.map((link) => (
                  <div className={styles.subItem} key={link.url}>
                    <Link className="h6" to={link.url}>{link.title}</Link>
                  </div>
                ))}
              </div>
            ))}
            
            <div className={styles.mainItem}>
              <div className={cn(styles.heading, "h4")}>Use Cases</div>
              {USE_CASES_NAV.map((link) => (
                <div className={styles.subItem} key={link.url}>
                  <Link className="h6" to={link.url}>{link.title}</Link>
                </div>
              ))}
            </div>
            
            <div className={styles.mainItem}>
              <Link className={cn(styles.heading, "h4")} to="/customers/">Customers</Link>
            </div>
            
            <div className={styles.mainItem}>
              <Link className={cn(styles.heading, "h4")} to="/resources/">Resources</Link>
              {RESOURCES_NAV.map((link) => {
                if (link.external) {
                  return (
                    <div className={styles.subItem} key={link.url}>
                      <a
                        className="h6"
                        href={link.url}
                        target={link.newDomain ? "_blank" : null}
                        rel={link.newDomain ? "noopener noreferrer": null}
                      >
                        {link.title}
                      </a>
                    </div>
                  );
                }

                return (
                  <div className={styles.subItem} key={link.url}>
                    <Link className="h6" to={link.url}>{link.title}</Link>
                  </div>
                );
              })}
            </div>
            
            <div className={styles.mainItem}>
              <Link className={cn(styles.heading, "h4")} to="/company/">Company</Link>
              {COMPANY_NAV.map((link) => (
                <div className={styles.subItem} key={link.url}>
                  <Link className="h6" to={link.url}>{link.title}</Link>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.login}>
            <Button href="https://account.aptible.com/login">Log In</Button>
          </div>

          <div className={styles.cta}>
            {context.isDeployPage ? (
              <SignupButton text="Start with Deploy" product="deploy" />
            ) : (
                <SignupButton text="Get a demo" product="comply" />
              )}
          </div>
        </Grid>
      </div>
    )}
  </HeaderContext.Consumer>
);

export default Mobile;
