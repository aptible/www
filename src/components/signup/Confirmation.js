import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Confirmation.module.css';
import done from '../../images/signup/done.svg';
import TextInput from '../forms/TextInput';
import elyssaPhoto from '../../images/company/team/elyssa.jpg';
import mikePhoto from '../../images/company/team/mike.jpg';
import tasiaPhoto from '../../images/company/team/tasia.jpg';
import Button from '../buttons/Button';
import { submitMarketoForm, COMPLY_AFTER_SCHEDULED_FORM } from '../../lib/marketo';

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      company: '',
      mainGoal: '',
      protocols: '',
      complyInterest: '',
      finished: false
    };
  }

  fieldChanged = (field, value) => {
    this.setState({ [field]: value });
  }

  submit = () => {
    const payload = {
      FirstName: this.state.firstName,
      LastName: this.state.lastName,
      Email: this.props.signupState.email,
      Phone: this.state.phone,
      Company: this.state.company,
      Main_Goal_with_Gridiron__c: this.state.mainGoal,
      Compliance_Frameworks_of_Interest__c: this.state.protocols,
      Origin_of_Gridiron_Interest__c: this.state.complyInterest
    };

    submitMarketoForm(COMPLY_AFTER_SCHEDULED_FORM, payload, () => {
      this.setState({ finished: true });
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <img src={done} alt="Checkmark" className={styles.checkmark} />
        <h1>Thanks, your meeting is scheduled</h1>

        <Grid>
          <div className={styles.meetingDetails}>

            <div className={styles.person}>
              <div className={styles.photoContainer}>
                <img src={elyssaPhoto} className={styles.photo} alt="Meeting with" />
                <img src={mikePhoto} className={styles.photo} alt="Meeting with" />
                <img src={tasiaPhoto} className={styles.photo} alt="Meeting with" />
              </div>
            </div>

            {!this.state.finished &&
              <div className={styles.questionsContainer}>
                <h2>Just a few more questions in preparation for your call&hellip;</h2>

                <div className={styles.questions}>
                  <TextInput labelText="First Name" value={this.state.firstName} changeFn={(value) => this.fieldChanged('firstName', value)} />
                  <TextInput labelText="Last Name" value={this.state.lastName} changeFn={(value) => this.fieldChanged('lastName', value)} />
                  <TextInput labelText="Phone Number" value={this.state.phone} changeFn={(value) => this.fieldChanged('phone', value)} />
                  <TextInput labelText="Company Name" value={this.state.company} changeFn={(value) => this.fieldChanged('company', value)} />
                  <TextInput labelText="What is your main goal with Comply?" value={this.state.mainGoal} changeFn={(value) => this.fieldChanged('mainGoal', value)} />
                  <TextInput labelText="What compliance framework are you working with?" value={this.state.protocols} changeFn={(value) => this.fieldChanged('protocols', value)} />
                  <TextInput labelText="How did you hear about Comply?" value={this.state.complyInterest} changeFn={(value) => this.fieldChanged('complyInterest', value)} />

                  <div className={styles.submit}>
                    <Button onClickFn={this.submit}>Submit</Button>
                  </div>
                </div>
              </div>
            }

            {this.state.finished &&
              <div className={styles.questionsContainer}>
                <h2>Thank you</h2>
              </div>
            }
          </div>
        </Grid>
      </div>
    );
  }
}

export default Confirmation;
