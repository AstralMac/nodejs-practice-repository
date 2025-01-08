'use strict';
/**
 * Author: Malcolm Abdullah
 * Date: January 7th, 2025
 * File: Area-Circle.js
 * Description: This script calculates the area of a circle
 */


// This function calculates the area of a circle
function calculateArea(radius){
  if (typeof radius !== 'number'){
    throw new Error ('Radius must be a number');
  }

  if (radius < 0){
    throw new Error("Radius can't be a negative number");
  }
  
  return Math.PI * radius * radius;
  }

  module.exports = calculateArea;
