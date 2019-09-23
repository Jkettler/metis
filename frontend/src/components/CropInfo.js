import React, { Component } from 'react';

class CropInfo extends Component {
  render() {

    let { infos } = this.props;
    let { created_at, updated_at, ui_color, id, ...rest } = infos;

    return (
      <div className="Metis-crop-info">
        {Object.entries(rest).map((key, value) => {
          return <div key={value}>{key[0]}: {key[1]}</div>
        })}
      </div>
    )
  }
}export default CropInfo;