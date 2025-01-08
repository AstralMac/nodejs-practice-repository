'use strict';
/**
 * Author: Professor Krasso
 * Date: 13 September 2024
 * File: factorial.spec.js
 * Description: This script tests the factorial function.
 */


const calculateArea = require('../../src/utils/Area-Circle'); // Import the calculateArea function from the Area-Circle.js file

// Suite of tests following the TDD principles. Testing a function that calculates the area of a circle
describe('Area Function', () => {
  //This test will ensure that the input is a number.
  it('Make sure the input is valid',()=>{
    const radius =5;
    const getArea = Math.PI * radius * radius;
    expect(calculateArea(radius)).toBeCloseTo(getArea);

  });
//Throws error if input is a negative number.
  it('Throw an error when input is a negative number',()=>{
    const radius = -13848534580380503458;
    expect(()=> calculateArea(radius)).toThrow("Radius can't be a negative number");
  });
//Ensures that if the radisus is zero taht the area is also zero.
  it('Radius is zero',()=>{
    const radius = 0;
    expect(calculateArea(radius)).toBe(0);
  });
});