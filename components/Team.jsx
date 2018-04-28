import React from 'react';
import dynamic from "next/dynamic";
import CharacterPicture from "./CharacterPicture";
const KeyHandler = dynamic(import('./KeyHandler'));

class Team extends React.Component {

  render () {
    const teamStyle = {
      display: 'flex',
      height: '100px',
      alignItems: 'center',
      padding: '10px',
      fontSize: '2em',
      fontFamily: ['Oswald', 'sans-serif'],
    };

    return (
      <div style={teamStyle}>
        <CharacterPicture character={this.props.character} />
        {!this.props.pictureOnly ? <div style={{ paddingLeft: '20px' }}>{this.props.name}</div> : null}
      </div>
    )
  }
}

export default Team;