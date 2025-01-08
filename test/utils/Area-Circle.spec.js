'use strict';
/**
 * Author: Professor Krasso
 * Date: 13 September 2024
 * File: factorial.spec.js
 * Description: This script tests the factorial function.
 */


const calculateArea = require('../../src/utils/Area-Circle'); // Import the factorial function from the factorial.js file

// The describe() function is a test suite that contains one or more tests
describe('Area Function', () => {
  it('Make sure the input is valid',()=>{
    const radius =5;
    const getArea = Math.PI * radius * radius;
    expect(calculateArea(radius)).toBeCloseTo(getArea);

  });

  it('Throw an error when input is a negative number',()=>{
    const radius = -13848534580380503458;
    expect(()=> calculateArea(radius)).toThrow("Radius can't be a negative number");
  });

  it('Radius is zero',()=>{
    const radius = 0;
    expect(calculateArea(radius)).toBe(0);
  });
});