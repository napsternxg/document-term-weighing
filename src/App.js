import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Corpus} from "./Document.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">NIPS 2017 poster titles TF-IDF scores</h1>
        </header>
        <p className="App-intro">
          TF-IDF scores for <a href="https://nips.cc/Conferences/2017/Schedule?type=Poster">NIPS 2017 poster titles</a>.<br/>
          <strong>TF:</strong> - Term Frequency<br/>
          <strong>IDF:</strong> - Inverse Document Frequency<br/>
        </p>
        <div>
          <Corpus/>
        </div>
      </div>
    );
  }
}

export default App;
