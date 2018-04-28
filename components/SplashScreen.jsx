import React from 'react';
import dynamic from "next/dynamic";
const KeyHandler = dynamic(import('./KeyHandler'));

class SplashScreen extends React.Component {

  render () {
    const containerStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    };

    const textStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      borderRadius: '20px',
      fontSize: '6em',
    };

    return (
      <div style={containerStyle}>
        <KeyHandler return={this.props.goToNextScreen} />
        <img src={'/static/images/logo.png'} style={{width: '60%'}}/>
      </div>
    )
  }
}

export default SplashScreen;