/**
 * @param {number[]} nums
 * @return {number}
 */

// TIME LIMIT EXCEEDED
// const majorityElement = function(nums) {
//   let max = [];

//   for (let i = 0; i < nums.length; i++) {
//     const filter = nums.filter(n => n === nums[i])
//     if (max.length < filter.length) {
//       max = filter 
//     }
//   }

//   return max.length > (nums.length / 2) ? max[0] : -1
// };

const majorityElement = function(nums) {
  const sorted = nums.sort()
  return getMid(sorted) 
}

const getMid = function(array) {
  return array[Math.floor(array.length / 2)]
}

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))
