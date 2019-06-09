import React from 'react';
import styles from './NewsletterSignup.module.css';
import Arrow from '../shared/Arrow';

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
    window.MktoForms2.loadForm('//app-ab35.marketo.com', '620-GAP-535', 1073);
    window.MktoForms2.whenReady((marketoForm) => {
      marketoForm.addHiddenFields({
        Email: this.state.email,
        LeadSource: 'Website Signup'
      });

      marketoForm.onSuccess(() => {
        this.setState({ finished: true });
        return false;
      });

      marketoForm.submit();
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
