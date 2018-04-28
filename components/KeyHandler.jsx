import React from 'react';

import key from 'keymaster';

const mapping = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
};

class KeyHandler extends React.Component {


  componentDidMount() {
    for (let k in this.props) {
      if (this.props.hasOwnProperty(k)) {
        let keyCode = k;

        // Some values can't be react props so translate them here.
        if (typeof mapping[k] !== 'undefined') {
          keyCode = mapping[k];
        }

        console.log("Binding event for", keyCode);
        requestAnimationFrame(() => {key(keyCode, this.props[k])});
      }
    }
  }

  componentWillUnmount() {
    for (let k in this.props) {
      if (this.props.hasOwnProperty(k)) {
        // Some values can't be react props so translate them here.
        if (typeof mapping[k] !== 'undefined') {
          k = mapping[k];
        }

        console.log("Unbinding event for", k);
        key.unbind(k);
      }
    }
  }

  render () {
    return '';
  }
}

export default KeyHandler;