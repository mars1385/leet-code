/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let cursor = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== 0) {
      nums[cursor] = nums[index];
      cursor++;
    }
  }
  for (let index = cursor; index < nums.length; index++) {
    nums[index] = 0;
  }
  console.log(nums);
};

moveZeroes([0, 1, 0, 3, 12]);
