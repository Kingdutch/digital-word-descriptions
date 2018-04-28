import React from 'react';
import dynamic from "next/dynamic";
import Team from "./Team";
const KeyHandler = dynamic(import('./KeyHandler'));

class TeamOverview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeButton: 'addTeam',
    };
  }

  toggleButton(e) {
    this.setState((prevState, props) => {
      // With less than 2 teams you can only add teams.
      if (this.props.teams.length < 2) {
        return { activeButton: 'addTeam' };
      }

      return {
        activeButton: prevState.activeButton === 'addTeam' ? 'play' : 'addTeam',
      };
    });

    e.preventDefault();
  }

  nextScreen() {
    if (this.state.activeButton === 'addTeam') {
      this.props.addTeam();
    }
    // Only allow play start with two teams or more.
    else if (this.props.teams.length >= 2) {
      this.props.play();
    }
  }

  render () {
    const containerStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      flexDirection: 'column',
    };

    const buttonContainerStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '20px'
    };

    const buttonStyle = {
      fontSize: '2em',
      color: 'white',
      borderRadius: '5px',
      padding: '10px',
      margin: '10px',
    };

    const highlightBorder = '4px solid rgba(75, 174, 231, 0.8)';
    const normalBorder = '3px solid white';

    let teams = [];

    for (let i = 0; i<this.props.teams.length;i++) {
      const team = this.props.teams[i];

      teams.push(<Team key={`team-${i}`} {...team} />);
    }

    return (
      <div style={containerStyle}>
        <KeyHandler right={this.toggleButton.bind(this)} left={this.toggleButton.bind(this)} return={this.nextScreen.bind(this)} />
        {teams}
        <div style={buttonContainerStyle}>
          <a onClick={this.props.addTeam} style={{...buttonStyle, border: this.state.activeButton === 'addTeam' ? highlightBorder : normalBorder}}>Add Team</a>
          <a onClick={this.props.play} style={{...buttonStyle, border: this.state.activeButton === 'play' ? highlightBorder : normalBorder, display: this.props.teams.length < 2 ? 'none' : 'inherit' }}>Play</a>
        </div>
      </div>
    )
  }
}

export default TeamOverview;