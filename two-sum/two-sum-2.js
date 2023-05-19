/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hash = {};
  for (let i = 0; i < nums.length; i += 1) {
    const complement = target - nums[i];
    if (hash[complement] >= 0) {
      return [i, hash[complement]];
    }
    hash[nums[i]] = i;
  }
};

console.log(twoSum([2, 17, 11, 15, 7], 9)); // [4, 0]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]
