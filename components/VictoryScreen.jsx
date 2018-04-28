import React from 'react';
import Team from "./Team";

class VictoryScreen extends React.Component {

  render () {
    const containerStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      height: '100%',
      fontSize: '3em',
    };

    console.log("Victory screen for", this.props.winner);

    return (
      <div style={containerStyle}>
        <h1>Congratulations</h1>
        <Team {...this.props.winner} />
      </div>
    )
  }
}

export default VictoryScreen;