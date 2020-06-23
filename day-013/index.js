/*

Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

*/

const withLog = fn => (...args) => console.log(fn(...args));

// const cakesCalc = (required, have) => {
//   let result = Infinity;
//   const reqKeys = Object.keys(required);
//   for (let i = 0, len = reqKeys.length; i < len; i++) {
//     const reqAmount = required[reqKeys[i]];
//     const haveAmount = have[reqKeys[i]] || 0;
//     let currentResult = 0;
//     if (!haveAmount) {
//       result = 0;
//       break;
//     }
//     currentResult = Math.floor(haveAmount / reqAmount);
//     result = Math.min(currentResult, result);
//   }

//   return result;
// };

const cakesCalc = (required, have) =>
  Object.entries(required).reduce(
    (result, [ingredient, amount]) =>
      !result || !amount || !have[ingredient]
        ? 0
        : Math.min(Math.floor(have[ingredient] / amount), result),
    Infinity
  );

const cakes = withLog(cakesCalc);
// must return 2
cakes(
  {flour: 500, sugar: 200, eggs: 1},
  {flour: 1200, sugar: 1200, eggs: 5, milk: 200}
);
// must return 0
cakes(
  {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100},
  {sugar: 500, apples: 6, milk: 1000, water: 80}
);
