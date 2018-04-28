import React from 'react';
import dynamic from "next/dynamic";
const KeyHandler = dynamic(import('./KeyHandler'));

class TeamAdd extends React.Component {

  constructor(props) {
    super(props);

    this.state =  {
      value: ''
    };
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    // Handle return
    if (e.keyCode === 13) {
      this.addTeam();
    }
  }

  addTeam() {
    console.log('Adding team');
    if (this.state.value.length > 2) {
      this.props.addTeam(this.state.value);
    }
  }

  render () {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    };

    const inputStyle = {
      fontSize: '3em',
      backgroundColor: 'black',
      color: 'white',
      padding: '20px',
      border: 'none',
      borderBottom: '2px solid rgba(75, 174, 231, 0.8)',
      outline: 'none',
    };

    return (
      <div style={containerStyle}>
        <KeyHandler return={this.addTeam.bind(this)} />
        <input type={'text'} autoFocus={true} placeholder={'Team name'} value={this.state.value} onChange={this.handleChange.bind(this)} onKeyUp={this.handleSubmit  .bind(this)} style={inputStyle} />
      </div>
    )
  }
}

export default TeamAdd;