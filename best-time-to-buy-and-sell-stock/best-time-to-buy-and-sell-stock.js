/**
 * @param {number[]} prices
 * @return {number}
 */

// const maxProfit = function (prices) {
//   const profits = [];

//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i; j < prices.length; j++) {
//       profits.push(prices[j] - prices[i]);
//     }
//   }

//   return profits.reduce((max, profit) => Math.max(max, profit), 0);
// };

const maxProfit = function (prices) {
  let minPrice = Infinity;
  let _maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (_maxProfit + minPrice < prices[i]) {
      _maxProfit = prices[i] - minPrice;
    }
  }
  return _maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
