/**
 * @param {number[]} nums
 * @return {number}
 */

// This solution is correct but gives time limited exceeded error on leetcode
// const maxSubArray = function (nums) {
//   let max = -Infinity;

//   for (let i = 0; i < nums.length; i++) {
//     let subArraySum = 0;
//     for (let j = i; j < nums.length; j++) {
//       subArraySum += nums[j];
//       max = Math.max(max, subArraySum);
//     }
//   }

//   return max;
// };

// https://medium.com/swlh/maximum-subarray-sum-in-javascript-eee107d6c3d6
const maxSubArray = function (nums) {
  let max = -Infinity;
  let subArraySum = 0;

  for (let i = 0; i < nums.length; i++) {
    subArraySum = Math.max(nums[i], subArraySum + nums[i]);
    max = Math.max(max, subArraySum);
  }

  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // [4,-1,2,1], 6
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([-2, 1])); // 1
console.log(maxSubArray([-1, -2])); // -1
console.log(maxSubArray([-1, -2, 0, 1, -9, 10, -1, 2])); // 11
