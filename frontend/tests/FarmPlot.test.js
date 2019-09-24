import React from 'react';
import FarmPlot from '../src/components/FarmPlot';
import renderer from 'react-test-renderer';

test('does a render', () => {
  const allCrops = [{}];
  const crop = {};

  const component = renderer.create(
    <FarmPlot allCrops={allCrops} crop={crop}/>
  );
  let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});