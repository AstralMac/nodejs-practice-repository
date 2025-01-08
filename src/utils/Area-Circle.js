'use strict';
/**
 * Author: Malcolm Abdullah
 * Date: January 7th, 2025
 * File: Area-Circle.js
 * Description: This script calculates the area of a circle
 */


// This function calculates the area of a circle
function calculateArea(radius){
  //Enures that the input is a number and throws an error if it is not.
  if (typeof radius !== 'number'){
    throw new Error ('Radius must be a number');
  }

  //Throws an error if the input is less than zero
  if (radius < 0){
    throw new Error("Radius can't be a negative number");
  }

  //Calculates the area of a circle by mutlplying the radius twice by PI
  return Math.PI * radius * radius;
  }

  module.exports = calculateArea;
