import React, { Component } from 'react';

class Plot extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: 'white',
      id: undefined,
      x: undefined,
      y: undefined,
    };
    this.baseState = this.state;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let { color, id, x, y } = this.props;

    if(this.state.color === undefined || this.state.color === 'white'){
      this.setState({
        color: color,
        id: id,
        x: x,
        y: y
      });
      this.props.onChange({color, id, x, y});
    } else {
      this.setState(this.baseState);
      this.props.onChange({color: 'white', id: undefined, x: x, y: y});
    }
  }

  render() {
    let { color, contents } = this.state;

    return (
      <span onClick={this.handleChange} className="Metis-plot-square" style={{backgroundColor: color}}>

      </span>
    )
  }
}export default Plot;