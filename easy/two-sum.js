/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result = [];
  let i = 0;
  while (result.length === 0) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push.apply(result, [i, j]);
      }
    }
    i++;
  }
  return result;
};

console.log(twoSum([3, 2, 4], 6));
