import React from 'react';
import Head from 'next/head';
import Tile from '../components/Tile';
import dynamic from "next/dynamic";

const KeyHandler = dynamic(import('./KeyHandler'));

const maxDots = 5;

class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dots: 0,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      800
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((prevState, props) => ({
      dots: ((prevState.dots + 1) % (maxDots + 1))
    }));
  }

  render () {

    const containerStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    };

    const textStyle = {
      fontFamily: 'sans-serif',
      fontSize: '6em',
    };

    const text = 'Loading' + '.'.repeat(this.state.dots) + '\u00A0'.repeat(maxDots - this.state.dots);

    return (
      <div style={containerStyle}>
        <KeyHandler return={this.props.goToNextScreen} />
        <h1 style={textStyle}>
          {text}
        </h1>
      </div>
    )
  }
}

export default LoadingScreen;