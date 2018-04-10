import React from 'react';

class Tile extends React.Component {
  render () {
    let tileColor = 'rgba(75, 174, 231, 0.8)';

    let style = {
      // width: '100px',
      // height: '100px',
      backgroundColor: tileColor,
      border: `2px solid ${tileColor}`,
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gridColumn: this.props.position.col,
      gridRow: this.props.position.row,
    };

    if (this.props.type === 'odd') {
      delete style.backgroundColor;
    }

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}

export default Tile;