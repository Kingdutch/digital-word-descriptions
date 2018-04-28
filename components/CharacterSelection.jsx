import React from 'react';
import dynamic from "next/dynamic";
import CharacterPicture from "./CharacterPicture";
const KeyHandler = dynamic(import('./KeyHandler'));

const rowWidth = 4;
const characters = ['banana', 'carlton', 'coolparrot', 'homer', 'llama', 'patrick', 'pikachu', 'turd'];

class CharacterSelection extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeCharacter: 0,
    }
  }

  selectionRight() {
    this.setState((prevState, props) => {
      // We move right one but wrap on the same row.
      const row = Math.floor(prevState.activeCharacter / rowWidth);
      const selection = (prevState.activeCharacter + 1) % rowWidth + (rowWidth * row);

      return {
        activeCharacter: selection,
      };
    });
  }

  selectionLeft() {
    this.setState((prevState, props) => {
      // We move left one but wrap on the same row.
      const row = Math.floor(prevState.activeCharacter / rowWidth);
      // We subtract one but add rowWidth to esure we do't go below 0
      const selection = (prevState.activeCharacter - 1 + rowWidth) % rowWidth + (rowWidth * row);

      return {
        activeCharacter: selection,
      };
    });
  }

  selectionUp() {
    this.setState((prevState, props) => {
      const rows = characters.length / rowWidth;

      // We move up an entire row but wrap at the top.
      let selection = (prevState.activeCharacter - rowWidth);

      if (selection < 0) {
        selection += characters.length;
      }

      return {
        activeCharacter: selection,
      };
    });
  }

  selectionDown() {
    this.setState((prevState, props) => {
      // We move down an entire row but wrap at the bottom.
      const selection = (prevState.activeCharacter + rowWidth) % characters.length;

      return {
        activeCharacter: selection,
      };
    });
  }

  setCharacter() {
    this.props.setCharacter(characters[this.state.activeCharacter]);
  }

  render () {

    const containerStyle = {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gridTemplateRows: '50% 50%',
      gridGap: "20px",
      margin: '0 20px',
      height: 'calc(100vh - 20em)',
      justifyItems: 'stretch',
      alignItems: 'stretch',
    };

    const selectedStyle = {
      border: '2px solid rgba(75, 174, 231, 0.8)',
    };

    const textStyle = {
      fontSize: '6em',
    };

    let characterPictures = [];

    for (let i in characters) {
      // Array indices (properties) are strings so we must cast for an exact match.
      const style = this.state.activeCharacter.toString() === i ? selectedStyle : null;

      characterPictures.push(<CharacterPicture key={'character' + i} style={style} character={characters[i]} />)
    }

    return (
      <div className='fullscreen' style={{textAlign: 'center'}}>
        <KeyHandler
          left={this.selectionLeft.bind(this)}
          right={this.selectionRight.bind(this)}
          up={this.selectionUp.bind(this)}
          down={this.selectionDown.bind(this)}
          return={this.setCharacter.bind(this)} />

        <h1 style={textStyle}>
          Character Selection
        </h1>
        <div style={containerStyle}>
          {characterPictures}
        </div>
      </div>
    )
  }
}

export default CharacterSelection;