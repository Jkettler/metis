import React, { Component } from 'react';
import Plot from './Plot';
import ProfitCalculator from './ProfitCalculator';

class FarmPlot extends Component {
  constructor(props){
    super(props);
    this.state = {
      crop: {},
      planted: {},
      allCrops: {}
    };
  }

  componentDidMount(){
    this.setState({
      crop: this.props.crop,
      allCrops: this.props.allCrops
    });
  }

  onChange(child_props){

    let { planted } = this.state;
    let { x, y, id } = child_props;

    let key = `${x}${y}`;

    if(planted[key] === undefined){
      planted[key] = id;
    } else {
      planted[key] = undefined;
    }

    this.setState({
      planted: planted
    });
  }

  render() {
    let dimension_x = 5;
    let dimension_y = 5;
    let { crop, allCrops } = this.props;
    let { planted } = this.state;

    return (
      <div>
        {new Array(dimension_y).fill(-1).map((el, i) =>
          <div className="Metis-game-row" key={i}>
            {new Array(dimension_x).fill(-1).map((el, j) =>
              <div className="Metis-game-column" key={j}>
                <Plot onChange={this.onChange.bind(this)} y={i} x={j} color={crop.ui_color} id={crop.id}/>
              </div>
            )}
          </div>
        )}
        <ProfitCalculator cropInfo={allCrops} total={planted}/>
      </div>
    )
  }
}export default FarmPlot;