import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import { initCanvas } from './flowBuilder';

class App extends React.Component<{}> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    initCanvas('canvas');
  }

  render() {
    return (
      <div id="app" className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <canvas id="canvas"></canvas>
      </div>
    );
  }
}

export default App;
