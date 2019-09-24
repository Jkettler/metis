import React from 'react';
import FarmPlot from '../src/components/FarmPlot';
import renderer from 'react-test-renderer';

test('does a render', () => {
  const allCrops = [
      {"id":1,"name":"Tomato","grow_cycle_days":55,"daily_cost":"1.0","sell_price":"200.0","ui_color":"#a84832","created_at":"2019-09-22T20:20:43.324Z","updated_at":"2019-09-22T20:20:43.324Z"},
      {"id":2,"name":"Squash","grow_cycle_days":50,"daily_cost":"1.5","sell_price":"250.0","ui_color":"#a8a432","created_at":"2019-09-22T20:20:43.331Z","updated_at":"2019-09-22T20:20:43.331Z"},
      {"id":3,"name":"Lettuce","grow_cycle_days":45,"daily_cost":"0.5","sell_price":"150.0","ui_color":"#32a857","created_at":"2019-09-22T20:20:43.336Z","updated_at":"2019-09-22T20:20:43.336Z"}
    ];
  const crop = allCrops[0];

  const component = renderer.create(
    <FarmPlot allCrops={allCrops} crop={crop}/>
  );
  let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});