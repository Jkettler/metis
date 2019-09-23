import React, { Component } from 'react';
import CropSelector from './components/CropSelector';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <div>
              <a href="https://www.theoi.com/Titan/TitanisMetis.html">Metis</a>
            </div>
          </header>
          <CropSelector/>
        </div>
    );
  }
}

export default App;