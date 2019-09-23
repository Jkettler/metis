import React, { Component } from 'react';
import axios from 'axios';
import FarmPlot from './FarmPlot';
import CropInfo from './CropInfo';

class CropSelector extends Component {
  constructor(props){
    super(props);
    this.state = {
      crops: [],
      selected: {}
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({selected: this.state.crops[event.target.value -1]});
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/crops')
      .then(response => {
        this.setState({
          crops: response.data,
          selected: response.data[0]
        });
      })
      .catch(error => console.log(error))
  }

  render() {
    let { crops, selected } = this.state;

    return (
      <div className="Metis-game">
        <div className="Metis-crop-selector">
          Pick a crop to plant:
          {crops &&
            <select value={selected.id} onChange={this.handleChange}>
              {crops.map(crop =>
                <option key={crop.id} value={crop.id}>{crop.name}</option>
              )};
            </select>}
        </div>
        <div className="Metis-view-row">
          <FarmPlot allCrops={crops} crop={selected}/>
          <div className="Metis-side-infos">
            <CropInfo infos={selected} cropInfo={crops}/>
          </div>
        </div>
      </div>
    )
  }
}export default CropSelector;