#!/usr/bin/env node

/*

another codewars (https://www.codewars.com/dashboard)

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

cmd+alt+0 then 1

*/

const clamp = (val, min = -Infinity, max = Infinity) => {
  val = val <= max ? val : max;
  val = val >= min ? val : min;
  return val;
};

const rgbClamp = d => clamp(d, 0, 255);

const decimalToHex = d => (d < 16 ? d.toString(16).repeat(2) : d.toString(16));

const rgb = (...rgbArr) => rgbArr.map(rgbClamp).map(decimalToHex).join('');

const result1 = rgb(255, 255, 255); // returns FFFFFF
const result2 = rgb(255, 255, 300); // returns FFFFFF
const result3 = rgb(15, 0, 0); // returns 000000
const result4 = rgb(148, 0, 211); // returns 9400D3

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
