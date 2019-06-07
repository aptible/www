import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Features.module.css';
import screenshot from '../../images/deploy/screenshot.svg';
import console from '../../images/deploy/console.png';

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
                  <h6>Data Encryption</h6>
                  <p>
                    Deploy provides everything you need to meet encryption
                    requirements so your Databases, traffic, and certificates
                    are secure.
                  </p>
                </div>
                <div className={styles.featureBullet}>
                  <h6>Business Continuity Procedures</h6>
                  <p>
                    You get automatic backups of your data every 24 hours. You
                    can trigger a manual backup at any time, and restore in a
                    few clicks.
                  </p>
                </div>
                <div className={styles.featureBullet}>
                  <h6>Audit Logging</h6>
                  <p>
                    Logs are generated and backed up for every depoly, config
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
                  <h6>PaaS for Dockerized Apps</h6>
                  <p>
                    Deploy provisions a VPC for you and hosts your containers
                    and databases in it. Run any code on Deploy that runs inside
                    Docker.
                  </p>
                </div>
                <div className={styles.featureBullet}>
                  <h6>SRE Team Monitoring & Response</h6>
                  <p>
                    The Aptible SRE Team monitors your infrastructure 24/7 and
                    responds to host and network incidents on your behalf.
                  </p>
                </div>
                <div className={styles.featureBullet}>
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
                  <h6>Twelve-factor App Deployment</h6>
                  <p>
                    Deploy natively supports 12-factor apps so you can use your
                    existing developer workflow.
                  </p>
                </div>
                <div className={styles.featureBullet}>
                  <h6>Use what you know</h6>
                  <p>
                    Deploy supports many languages, tools, and database
                    technologies, so you can be secure and still work the way
                    you're used to.
                  </p>
                </div>
                <div className={styles.featureBullet}>
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
