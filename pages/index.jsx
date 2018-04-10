import React from 'react';
import Head from 'next/head';
import Tile from '../components/Tile';

class PlayBoard extends React.Component {
  render () {
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
      { col: 1, row: 1 },
      { col: 2, row: 1 },
      { col: 3, row: 1 },
      { col: 4, row: 1 },
      { col: 4, row: 2 },
      { col: 4, row: 3 },
      { col: 5, row: 3 },
      { col: 6, row: 3 },
      { col: 6, row: 2 },
      { col: 6, row: 1 },
      { col: 7, row: 1 },
      { col: 8, row: 1 },
      { col: 9, row: 1 },
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

    const teams = {
      4: [<img key={'team-1'} style={{maxWidth: '40%', height: 'auto'}} src={'/static/images/avatars/banana.gif'} />,
          <img key={'team-2'} style={{maxWidth: '40%', height: 'auto'}} src={'/static/images/avatars/patrick.gif'} />],
      5: [],
      6: [<img key={'team-3'} style={{maxWidth: '40%', height: 'auto'}} src={'/static/images/avatars/carlton.gif'} />],
    };

    let tiles = [];

    for (let i = 0; i<35;i++) {
      let type = i % 2 === 0 ? 'odd' : 'even';

      if (typeof teams[i] !== 'undefined') {
        tiles.push(<Tile key={`tile-${i}`} index={i} type={type} position={tilePosition[i]}>{teams[i]}</Tile>)
      }
      else {
        tiles.push(<Tile  key={`tile-${i}`} index={i} type={type} position={tilePosition[i]} />);
      }
    }

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
      background: 'black url("/static/images/background.png") no-repeat center center',
      backgroundSize: 'contain',
      textAlign: 'center',
    };

    return (
      <div className='background' style={backgroundStyle}>
        <Head>
          <style type={'text/css'}>{`
            body {
              margin: 0;
              background: black;
              overflow: hidden;
              font-family: sans-serif;
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
        </Head>
        {/*<img src={'/static/images/logo.png'} style={{height: '20vh'}} />*/}
        <div className='grid' style={gridStyle}>
          {/*<div style={{display: 'block', gridColumn: '2 / span 2', gridRow: '2 / span 5'}}>*/}
          <img src={'/static/images/logo-left.png'} style={{display: 'block', width: '100%', height: '100%', gridColumn: '2 / span 2', gridRow: '2 / span 5'}} />
          {/*</div>*/}
          {tiles}
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', gridColumn: '4 / span 3', gridRow: '4', backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white', borderRadius: '20px', fontSize: '6em'}}>
            Banana's
          </div>
          <img src={'/static/images/logo-right.png'} style={{display: 'block', width: '100%', height: '100%', gridColumn: '7 / span 2', gridRow: '2 / span 5'}} />
        </div>
      </div>
    )
  }
}

export default PlayBoard;