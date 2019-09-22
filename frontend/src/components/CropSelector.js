import React, { Component } from 'react';
import axios from 'axios';

class CropSelector extends Component {
  constructor(props){
    super(props);
    this.state = {
      crops: [],
      selected: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({selected: event.target.value});
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/crops')
      .then(response => {
        console.log(response);
        this.setState({
          crops: response.data
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    let { crops } = this.state;

    return (
        <label>
          Pick a crop to plant:
          {crops && <select value={this.state.selected} onChange={this.handleChange}>
            {crops.map(crop =>
              <option key={crop.id} value={crop.id}>{crop.name}</option>
            )};
          </select>}
        </label>
    )
  }
}export default CropSelector;