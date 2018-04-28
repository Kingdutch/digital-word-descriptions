import React from 'react';
import dynamic from 'next/dynamic';
import PlayBoard from "./PlayBoard";
import LoadingScreen from "./LoadingScreen";
import SplashScreen from "./SplashScreen";
import CharacterSelection from "./CharacterSelection";
import Head from 'next/head';
import TeamOverview from "./TeamOverview";
import TeamAdd from "./TeamAdd";
import VictoryScreen from "./VictoryScreen";

const TILE_COUNT = 29;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      screen: 'loading',
      teams: [],
      activeTeam: null
    };
  }

  advanceScreen() {
    this.setState((prevState, props) => {
      let screen = null;
      switch (prevState.screen) {
        case 'loading':
          screen = 'splash';
          break;
        case 'splash':
          screen = 'team_overview';
          break;
        case 'team_add':
          screen = 'team_select_character';
          break;
      }

      if (screen) {
        return { screen };
      }
    });
  }
  
  addTeamScreen() {
    this.setState({ screen: 'team_add' });
  }

  addTeam(name) {
    console.log("Adding team", name);
    this.setState((prevState, props) => {
      let teams = prevState.teams;
      let team = {
        name: name,
        character: null,
        tile: 0,
      };

      teams.push(team);

      return {
        teams: teams,
        screen: 'team_select_character',
        activeTeam: teams.indexOf(team),
      };
    });
  }

  setCharacter(character) {
    this.setState((prevState, props) => {
      let teams = prevState.teams;
      teams[this.state.activeTeam].character = character;

      return {
        teams: teams,
        screen: 'team_overview',
        activeTeam: null,
      };
    });
  }

  start() {
    this.setState((prevState, props) => {
      return {
        screen: 'play',
        teams: prevState.teams.reverse(),
        activeTeam: 0
      }
    });
  }

  addScore(score) {
    this.setState((prevState, props) => {
      let teams = prevState.teams;
      teams[prevState.activeTeam].tile += score;

      // You can't go past the final tile (first tile = 0)
      if (teams[prevState.activeTeam].tile >= TILE_COUNT) {
        teams[prevState.activeTeam].tile = TILE_COUNT - 1;
      }

      // If this team has reached the end we have a winner!
      if (teams[prevState.activeTeam].tile === (TILE_COUNT - 1)) {
        return {
          screen: 'winner'
        };
      }

      // If we're not done we update the team score and advance the active team.
      let activeTeam = (prevState.activeTeam + 1) % teams.length;

      return {
        teams: teams,
        activeTeam: activeTeam
      };
    });
  }

  render () {
    const sharedProps = {
      goToNextScreen: this.advanceScreen.bind(this),
    };

    let component;

    switch(this.state.screen) {
      case 'splash':
        component = <SplashScreen {...sharedProps} />;
        break;
      case 'team_overview':
        component = <TeamOverview addTeam={this.addTeamScreen.bind(this)} play={this.start.bind(this)} teams={this.state.teams} />;
        break;
      case 'team_add':
        component = <TeamAdd addTeam={this.addTeam.bind(this)} {...sharedProps} />;
        break;
      case 'team_select_character':
        component = <CharacterSelection team={this.state.teams[this.state.activeTeam]} setCharacter={this.setCharacter.bind(this)} {...sharedProps} />;
        break;
      case 'play':
        component = <PlayBoard teams={this.state.teams} activeTeam={this.state.activeTeam} addScore={this.addScore.bind(this)} />;
        break;
      case 'winner':
        component = <VictoryScreen winner={this.state.teams[this.state.activeTeam]} />;
        break;
      default:
        component = <LoadingScreen {...sharedProps} />;
    }

    return (
      <div className="fullscreen">
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" />
          <title>GG Partner Game</title>
        </Head>
        <style type={'text/css'}>{`
            body {
              margin: 0;
              background: black;
              overflow: hidden;
              font-family: sans-serif;
              color: white;
            }

            html, body, #__next, .fullscreen {
              height: 100%;
            }

            .fullscreen {
              overflow: hidden;
            }

            @keyframes pulse
            {
              0% {background: rgba(0,0,0,0.95);}
              50%   {background: rgba(0,0,0,0.2);}
              100%   {background: rgba(0,0,0,0.2);}
            }

            * {
              box-sizing: border-box;
            }
          `}
        </style>
        {component}
      </div>
    )
  }
}

export default App;