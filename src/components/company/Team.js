import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Team.module.css';
import TeamMember from './TeamMember';

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openIdx: null
    };
  }

  toggleItem = (idx) => {
    if (this.state.openIdx === idx) {
      this.setState({ openIdx: null });
    } else {
      this.setState({ openIdx: idx });
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <Grid>
          <div className={styles.sidebar}>
            <h5>Our Team</h5>
          </div>
          <div className={styles.list}>

            {this.props.members.map((member, idx) => {
              return <TeamMember
                      key={idx}
                      member={member.node}
                      open={this.state.openIdx === idx}
                      clickFn={(_) => this.toggleItem(idx)} />
            })}

          </div>
        </Grid>
      </div>
    )
  }
}

export default Team;
