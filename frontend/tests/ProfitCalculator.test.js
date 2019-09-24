import React from 'react';
import { countCrops, calculateProfits } from '../src/components/ProfitCalculator';

test('countCrops counts crops', () => {
  let total = {
    '10': 1,
    '22': 2,
    '44': 1
  };

  expect(countCrops(total)).toEqual({"1": 2, "2": 1 });
});

test('calculateProfits calculates profits', () => {
  let quantity = 3;
  let target = {
    "id":1,
    "name":"Tomato",
    "grow_cycle_days":55,
    "daily_cost":"1.0",
    "sell_price":"200.0",
    "ui_color":"#a84832",
    "created_at":"2019-09-22T20:20:43.324Z",
    "updated_at":"2019-09-22T20:20:43.324Z"
  };

  expect(calculateProfits(quantity, target)).toBe(545);
});
