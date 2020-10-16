import React, { Component } from 'react';
import BG from '../Stormtrooper.svg'
import '../App.css'

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={BG} className="App-logo" alt="BG" />
        <div className='App-header'>
          Star Wars Wiki
          <h2>Explore Star Wars Universe</h2>
        </div>
      </div>
    );
  }
}