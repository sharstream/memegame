import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import withBorder from './components/HOC/withBorder';

class App extends Component {
  state = {
    show: false
  }

  showModal = () => {
    this.state({
      ...this.state,
      show: !this.state.show
    });
  }
  render() {
    let WithBorderInput = withBorder(InputTag);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Clicky Game</h1>
        </header>
        <p className="App-intro">
          To get started, click on any image and try to guess your selection.
        </p>
        <WithBorderInput placeholder="press enter/space to + tag" />

        <input type="button"
          onClick={this.showModal}
          value="Show Modal" />

        <Modal
          onClose={this.showModal}
          show={this.state.show}>
          This message is from Modal!
        </Modal>

      </div>
    );
  }
}

export default App;
