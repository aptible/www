import React from 'react';
import styles from './NewsletterSignup.module.css';
import Arrow from '../shared/Arrow';
import { submitMarketoForm, NEWSLETTER_FORM } from '../../lib/marketo';

class NewsletterSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      finished: false
    };
  }

  emailChanged = (e) => {
    this.setState({ email: e.target.value });
  }

  keyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.submit();
    }
  }

  submit = () => {
    if (this.state.email.length < 1 || this.state.email.indexOf('@') === -1) {
      return;
    }

    const payload = {
      Email: this.state.email,
      LeadSource: 'Content Signup'
    };

    submitMarketoForm(NEWSLETTER_FORM, payload, () => {
      this.setState({ finished: true });
    });
  }

  render() {
    return (
      <form className={styles.form}>
        {!this.state.finished &&
          <React.Fragment>
            <input
              className={styles.input}
              type="email"
              placeholder="youremail@address.com"
              value={this.state.email}
              onChange={this.emailChanged}
              onKeyDown={this.keyPress} />
            <div className={styles.arrow} onClick={this.submit}>
              <Arrow theme="noCircle" />
            </div>
          </React.Fragment>
        }

        {this.state.finished &&
          <p>You are subscribed!</p>
        }
      </form>
    );
  }
}

export default NewsletterSignup;
