import React, { Component } from 'react';

class ProfitCalculator extends Component {
  constructor(props){
    super(props);
    this.state = {
      total: {},
      cropInfo: []
    };
  }

  // componentDidMount(){
  //   this.setState({
  //     cropInfo: this.props,
  //     total: this.props
  //   })
  // }

  countCrops(total){
    let values = Object.values(total);
    let result = {};

    values.map((k) => {
      if(result[k] === undefined) {
        result[k] = 1;
      } else {
        result[k] += 1;
      }
    });
    return result;
  }

  calculateProfits(quantity, targetCrop) {
    const { grow_cycle_days, daily_cost, sell_price } = targetCrop;
    return ((sell_price * quantity) - (grow_cycle_days * daily_cost))
  }

  render() {

    let { cropInfo, total } = this.props;
    let counts = this.countCrops(total);
    let profit = 0;

    if(counts) {
      Object.entries(counts).forEach(([cropId, count]) => {
        let current;
        cropInfo.forEach((crop) => {
          if(String(crop.id) === cropId) {
            current = crop;
          }
        });
        if(current){
            profit += this.calculateProfits(count, current);
          }

      });
    }

    return (
      <div className="Metis-profit-info">
        {`Expected profit: $${profit}`}
      </div>
    )
  }
}export default ProfitCalculator;