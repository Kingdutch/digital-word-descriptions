import React from 'react';
import Head from 'next/head';
import Tile from '../components/Tile';
import Team from "./Team";
import dynamic from "next/dynamic";
const KeyHandler = dynamic(import('./KeyHandler'));

class PlayBoard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      action: 'waiting',
    };
  }

  enterScore(correctWords) {
    let score = correctWords - this.state.dieCount;

    // You can't go backwards.
    if (score < 0) {
      score = 0;
    }

    console.log("Received", correctWords, "correct words with discount", this.state.dieCount, "for total", score);

    this.setState({
      action: 'waiting',
    });

    this.props.addScore(score);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  roll(reset) {
    const die = ['0', '0', '1', '1', '2', '2'];

    if (reset || this.state.bounces > 0) {
      this.setState((prevState, props) => ({
        action: 'rolling',
        // Generate number [0..2]
        dieCount: parseInt(die[Math.floor(Math.random() * die.length)], 10),
        bounces: reset ? 17 : prevState.bounces - 1,
      }));
    }
    else {
      clearInterval(this.timerID);
      this.setState({ action: 'ready' });
    }
  }

  countDown(reset) {
    if (reset || this.state.bounces > 1) {
      this.setState((prevState, props) => ({
        action: 'counting',
        bounces: reset ? 30 : prevState.bounces - 1,
      }));
    }
    else {
      clearInterval(this.timerID);
      this.setState({ action: 'score' });
    }
  }

  returnHandler() {
    // After waiting we roll the die.
    if (this.state.action === 'waiting') {
      this.timerID = setInterval(
        () => this.roll(false),
        100
      );
      this.roll(true);
    }
    else if (this.state.action === 'ready') {
      this.countDown(true);
      this.timerID = setInterval(
        () => this.countDown(),
        1000
      );
    }
  }

  renderStatus() {
    const centerStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      // Center of the board.
      gridColumn: '2 / span 7',
      gridRow: '3 / span 2',
      fontSize: '4em',
    };

    const statusStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      // Top middle of the board.
      gridColumn: '4 / span 3',
      gridRow: 1,
      fontSize: '4em',
    };

    switch (this.state.action) {
      case 'waiting':
        return (<div key={'announcement'} style={centerStyle}>Roll Dice</div>);
      case 'rolling':
        return (<div key={'announcement'} style={centerStyle}>{this.state.dieCount}</div>);
      case 'ready':
        return [
          <div key={'discount'} style={statusStyle}>Rolled: {this.state.dieCount}</div>,
          <div key={'announcement'} style={centerStyle}>Ready?</div>
        ];
      case 'counting':
        return [
          <div key={'discount'}style={statusStyle}>Rolled: {this.state.dieCount}</div>,
          <div key={'announcement'} style={centerStyle}>{this.state.bounces}</div>
        ];
      case 'score':
        return [
          <div key={'discount'}style={statusStyle}>Rolled: {this.state.dieCount}</div>,
          <div key={'announcement'} style={centerStyle}>Time's Up! <br />Enter amount of correct words</div>,
          <KeyHandler
            key={'inputHandler'}
            zero={this.enterScore.bind(this, [0])}
            one={this.enterScore.bind(this, [1])}
            two={this.enterScore.bind(this, [2])}
            three={this.enterScore.bind(this, [3])}
            four={this.enterScore.bind(this, [4])}
            five={this.enterScore.bind(this, [5])}
            />
        ];
    }

    return '';
  }

  getTeamsOnTiles() {
    let teamsOnTiles = [];

    // Iterate over teams to group them by tile
    for (let i=0; i<this.props.teams.length;i++) {
      let team = this.props.teams[i];

      if (typeof teamsOnTiles[team.tile] === 'undefined') {
        teamsOnTiles[team.tile] = [];
      }

      teamsOnTiles[team.tile].push(<Team key={'team-' + i} pictureOnly={true} name={team.name} character={team.character}  />);
    }

    return teamsOnTiles;
  }

  renderBoard(teamsOnTiles) {
    let tiles = [];

    for (let i = 0; i<tilePosition.length;i++) {
      // First tile should be blue (even).
      let type = i % 2 === 0 ? 'even' : 'odd';

      if (typeof teamsOnTiles[i] !== 'undefined') {
        tiles.push(<Tile key={`tile-${i}`} index={i} type={type} position={tilePosition[i]}>{teamsOnTiles[i]}</Tile>)
      }
      else {
        tiles.push(<Tile  key={`tile-${i}`} index={i} type={type} position={tilePosition[i]} />);
      }
    }

    return tiles;
  }

  render () {
    const teamsOnTiles = this.getTeamsOnTiles();
    const tiles = this.renderBoard(teamsOnTiles);
    const status = this.renderStatus();

    const gridStyle = {
      display: 'grid',
      width: '100%',
      height: '100%',
      padding: '20px 20px 20px',
      gridTemplateColumns: 'repeat(9, 1fr)',
      gridTemplateRows: 'repeat(7, 1fr)',
      gridColumnGap: '10px',
      gridRowGap: '10px',
      background: 'rgb(0,0,0)',
      'animation': 'pulse 20s ease-out 10s alternate infinite running',
    };

    const backgroundStyle = {
      width: '100vw',
      height: '100vh',
      background: 'black url("/static/images/background.png") no-repeat top center',
      backgroundSize: 'contain',
      textAlign: 'center',
    };

    return (
      <div className='background' style={backgroundStyle}>
        <KeyHandler return={this.returnHandler.bind(this)} />
        <Head>
          <style type={'text/css'}>{`
            @keyframes pulse
            {
              0% {background: rgba(0,0,0,0.95);}
              50%   {background: rgba(0,0,0,0.2);}
              100%   {background: rgba(0,0,0,0.2);}
            }
          `}
          </style>
        </Head>
        <div className='grid' style={gridStyle}>
          <img src={'/static/images/logo.png'} style={{display: 'block', width: '100%', height: '100%', gridColumn: '1 / span 3', gridRow: '1'}} />
          {status}
          {tiles}
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gridColumn: '7 / span 3', gridRow: '1', color: 'white', fontSize: '4em'}}>
            {this.props.teams[this.props.activeTeam].name}
          </div>
        </div>
      </div>
    )
  }
}

// Original Tile Position
// const tilePosition = [
//   { col: 4, row: 5 },
//   { col: 4, row: 6 },
//   { col: 4, row: 7 },
//   { col: 3, row: 7 },
//   { col: 2, row: 7 },
//   { col: 1, row: 7 },
//   { col: 1, row: 6 },
//   { col: 1, row: 5 },
//   { col: 1, row: 4 },
//   { col: 1, row: 3 },
//   { col: 1, row: 2 },
//   { col: 1, row: 1 },
//   { col: 2, row: 1 },
//   { col: 3, row: 1 },
//   { col: 4, row: 1 },
//   { col: 4, row: 2 },
//   { col: 4, row: 3 },
//   { col: 5, row: 3 },
//   { col: 6, row: 3 },
//   { col: 6, row: 2 },
//   { col: 6, row: 1 },
//   { col: 7, row: 1 },
//   { col: 8, row: 1 },
//   { col: 9, row: 1 },
//   { col: 9, row: 2 },
//   { col: 9, row: 3 },
//   { col: 9, row: 4 },
//   { col: 9, row: 5 },
//   { col: 9, row: 6 },
//   { col: 9, row: 7 },
//   { col: 8, row: 7 },
//   { col: 7, row: 7 },
//   { col: 6, row: 7 },
//   { col: 6, row: 6 },
//   { col: 6, row: 5 },
// ];

// Aesthetic tile position
const tilePosition = [
  { col: 4, row: 5 },
  { col: 4, row: 6 },
  { col: 4, row: 7 },
  { col: 3, row: 7 },
  { col: 2, row: 7 },
  { col: 1, row: 7 },
  { col: 1, row: 6 },
  { col: 1, row: 5 },
  { col: 1, row: 4 },
  { col: 1, row: 3 },
  { col: 1, row: 2 },
  { col: 2, row: 2 },
  { col: 3, row: 2 },
  { col: 4, row: 2 },
  { col: 5, row: 2 },
  { col: 6, row: 2 },
  { col: 7, row: 2 },
  { col: 8, row: 2 },
  { col: 9, row: 2 },
  { col: 9, row: 3 },
  { col: 9, row: 4 },
  { col: 9, row: 5 },
  { col: 9, row: 6 },
  { col: 9, row: 7 },
  { col: 8, row: 7 },
  { col: 7, row: 7 },
  { col: 6, row: 7 },
  { col: 6, row: 6 },
  { col: 6, row: 5 },
];

export default PlayBoard;