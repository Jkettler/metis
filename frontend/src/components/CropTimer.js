import React, { Component } from 'react';

class CropTimer extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentTime: 0,
      interval: undefined
    };
    this.handleButtonStart = this.handleButtonStart.bind(this);
    this.currentTimeTick = this.currentTimeTick.bind(this);
  }


  handleButtonStart(){
    let { interval } = this.state;

    if(interval === undefined){
      let intervalID = window.setInterval(this.currentTimeTick, 500);
      this.setState({interval: intervalID});
    } else {
      window.clearInterval(interval);
      this.setState({interval: undefined});
    }
  }

  currentTimeTick() {
    let { currentTime } = this.state;
    this.setState({currentTime: currentTime + 1})
  }

  render() {

    let { currentTime, interval } = this.state;

    return (
      <div>
        <button onClick={this.handleButtonStart}>
          Press To Start Time
        </button>
        <div>{ currentTime }</div>
      </div>
    )
  }
}export default CropTimer;