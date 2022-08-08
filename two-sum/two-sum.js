/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// function twoSum(nums, target) {
//     for (let i = 0; i < nums.length; i ++) {
//         for (let j = i+1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
// };

// function twoSum(nums, target) {
//     let hash = {}
//     for (let i = 0; i < nums.length; i++) {
//         hash[nums[i]] = i
//     }
//     for (let i = 0; i < nums.length; i ++) {
//         let complement = target - nums[i]
//         if (hash[complement] && hash[complement] != i) {
//             return [i, hash[complement]]
//         }
//     }
// }

function twoSum(nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (hash[complement] >= 0) {
      return [i, hash[complement]];
    }
    hash[nums[i]] = i;
  }
  return null;
}

console.log(twoSum([2, 7, 11, 15], 9));
