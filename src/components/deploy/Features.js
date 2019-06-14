import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Features.module.css';
import screenshot from '../../images/deploy/screenshot.svg';
import console from '../../images/deploy/console.png';

const icons = {
  dataEncryption: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 12H8V17H16V12Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M10 12V9C10.0016 8.47005 10.2128 7.96227 10.5875 7.58753C10.9623 7.2128 11.4701 7.00158 12 7V7C12.5299 7.00158 13.0377 7.2128 13.4125 7.58753C13.7872 7.96227 13.9984 8.47005 14 9V12" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M21 14C21 16.3869 20.0518 18.6761 18.364 20.364C16.6761 22.0518 14.3869 23 12 23C9.61305 23 7.32387 22.0518 5.63604 20.364C3.94821 18.6761 3 16.3869 3 14V4L12 2L21 4V14Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    </svg>
  ),
  continuity: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 7V12L16 16" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C8.1 2 4.7 4.2 3.1 7.5" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M2.26416 2.57007L3.10016 7.50007L8.03016 6.66407" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    </svg>
  ),
  logging: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 1H21V23H3V1Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
      <path d="M17 14H12" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
      <path d="M8 14H7" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
      <path d="M14 18H12" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
      <path d="M8 18H7" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
      <path d="M15 10H12" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
      <path d="M8 10H7" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
      <path d="M17 6H12" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
      <path d="M8 6H7" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
    </svg>
  ),

  paas: (
    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 5H2L4 1H22L20 5Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M20 13H2L4 9H22L20 13Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M20 21H2L4 17H22L20 21Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    </svg>
  ),
  sre: (
    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 11C2 11 6 5 12 5C18 5 22 11 22 11C22 11 18 17 12 17C6 17 2 11 2 11Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M2 5V1H6" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M22 5V1H18" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M2 17V21H6" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M22 17V21H18" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    </svg>
  ),
  database: (
    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 4V20C1 21.7 5 23 10 23C15 23 19 21.7 19 20V4" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M10 7C14.9706 7 19 5.65685 19 4C19 2.34315 14.9706 1 10 1C5.02944 1 1 2.34315 1 4C1 5.65685 5.02944 7 10 7Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M19 12C19 13.7 15 15 10 15C5 15 1 13.7 1 12" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    </svg>
  ),

  twelve: (
    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 1H1V5H9V1Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M9 17H1V21H9V17Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M5 8V14" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M12 3H16V5" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M12 19H16V17" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M11 11L16 8L21 11L16 14L11 11Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    </svg>
  ),
  whatYouKnow: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1V23" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1 12H23" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 23C15.0376 23 17.5 18.0751 17.5 12C17.5 5.92487 15.0376 1 12 1C8.96243 1 6.5 5.92487 6.5 12C6.5 18.0751 8.96243 23 12 23Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  scalability: (
    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 4H9V12H15V4Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M5 2V14" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M19 2V14" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M1 0V16" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M23 0V16" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    </svg>
  )
};

class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSection: 'auditReadiness'
    };
  }

  openSection = (sectionName) => {
    this.setState({ openSection: sectionName });
  }

  render() {
    return (
      <div className={styles.container} id="features">
        <div className={styles.intro}>
          <Grid>
            <div className={styles.content}>
              <h4>Features</h4>
              <h1>The Security<br /> Question, Solved</h1>
              <p className="L">
                Robust security controls + Platform flexibility =<br /> Progress + Compliance.
                Deploy audit-ready apps and databases and all supporting infrastructure.
              </p>
            </div>
          </Grid>
        </div>

        <div className={styles.features}>
          <Grid>
            <div className={styles.sidebar}>
              <h4
                onClick={() => this.openSection('auditReadiness')}
                className={this.state.openSection === 'auditReadiness' ? styles.active : ''}>
                  Audit-Readiness
                  <div className={styles.circle}></div>
              </h4>
              <h4
                onClick={() => this.openSection('automatedDevOps')}
                className={this.state.openSection === 'automatedDevOps' ? styles.active : ''}>
                  Automated Dev-Ops
                  <div className={styles.circle}></div>
              </h4>
              <h4
                onClick={() => this.openSection('easeOfUse')}
                className={this.state.openSection === 'easeOfUse' ? styles.active : ''}>
                  Ease of Use
                  <div className={styles.circle}></div>
              </h4>
            </div>

            {this.state.openSection === 'auditReadiness' &&
              <div className={styles.feature}>
                <div className={styles.featureTitle}>
                  <h6 className="small">Audit-Readiness</h6>
                </div>
                <h5>
                  Out-of-the-box compliance. Deploy enables you to meet and
                  maintain regulatory compliance and customer audit requirements
                  automatically.
                </h5>

                <div className={styles.featureBullet}>
                  <div className={styles.featureIcon}>{icons.dataEncryption}</div>
                  <h6>Data Encryption</h6>
                  <p>
                    Deploy provides everything you need to meet encryption
                    requirements so your Databases, traffic, and certificates
                    are secure.
                  </p>
                </div>
                <div className={styles.featureBullet}>
                  <div className={styles.featureIcon}>{icons.continuity}</div>
                  <h6>Business Continuity Procedures</h6>
                  <p>
                    You get automatic backups of your data every 24 hours. You
                    can trigger a manual backup at any time, and restore in a
                    few clicks.
                  </p>
                </div>
                <div className={styles.featureBullet}>
                  <div className={styles.featureIcon}>{icons.logging}</div>
                  <h6>Audit Logging</h6>
                  <p>
                    Logs are generated and backed up for every deploy, config
                    change, database tunnel, and console operation, and session.
                  </p>
                </div>
              </div>
            }

            {this.state.openSection === 'automatedDevOps' &&
              <div className={styles.feature}>
                <div className={styles.featureTitle}>
                  <h6 className="small">Automated Dev-Ops</h6>
                </div>
                <h5>
                  Deploying should be easier. Deploy helps you automate your
                  DevOps work as it implements the security controls you need
                  for regulated industries.
                </h5>

                <div className={styles.featureBullet}>
                  <div className={styles.featureIcon}>{icons.paas}</div>
                  <h6>PaaS for Dockerized Apps</h6>
                  <p>
                    Deploy provisions a VPC for you and hosts your containers
                    and databases in it. Run any code on Deploy that runs inside
                    Docker.
                  </p>
                </div>
                <div className={styles.featureBullet}>
                  <div className={styles.featureIcon}>{icons.sre}</div>
                  <h6>SRE Team Monitoring & Response</h6>
                  <p>
                    The Aptible SRE Team monitors your infrastructure 24/7 and
                    responds to host and network incidents on your behalf.
                  </p>
                </div>
                <div className={styles.featureBullet}>
                  <div className={styles.featureIcon}>{icons.database}</div>
                  <h6>Database Management</h6>
                  <p>
                    Easily launch, scale, and deprovision any database without
                    being limited to a single database technology.
                  </p>
                </div>
              </div>
            }

            {this.state.openSection === 'easeOfUse' &&
              <div className={styles.feature}>
                <div className={styles.featureTitle}>
                  <h6 className="small">Ease of Use</h6>
                </div>
                <h5>
                  Security and compliance shouldn't slow you down. Deploy provides
                  you with the access and tools you need while still giving you
                  best-in-class security controls.
                </h5>

                <div className={styles.featureBullet}>
                  <div className={styles.featureIcon}>{icons.twelve}</div>
                  <h6>Twelve-factor App Deployment</h6>
                  <p>
                    Deploy natively supports 12-factor apps so you can use your
                    existing developer workflow.
                  </p>
                </div>
                <div className={styles.featureBullet}>
                  <div className={styles.featureIcon}>{icons.whatYouKnow}</div>
                  <h6>Use what you know</h6>
                  <p>
                    Deploy supports many languages, tools, and database
                    technologies, so you can be secure and still work the way
                    you're used to.
                  </p>
                </div>
                <div className={styles.featureBullet}>
                  <div className={styles.featureIcon}>{icons.scalability}</div>
                  <h6>Scalability</h6>
                  <p>
                    Deploy scales with your business. As you grow, you can
                    resize your container and disk at any time. 
                  </p>
                </div>
              </div>
            }

          </Grid>
        </div>

        <div className={styles.images}>
          <Grid>
            <div className={styles.screenshot}>
              <img src={screenshot} alt="Aptible Deploy" />
            </div>
            <div className={styles.console}>
              <img src={console} alt="Aptible Deploy Console" />
            </div>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Features;
