import React from 'react';

class CharacterPicture extends React.Component {

  render () {
    return (
      <img style={{width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%', ...this.props.style}} src={`/static/images/avatars/${this.props.character}.gif`} />
    )
  }
}

export default CharacterPicture;