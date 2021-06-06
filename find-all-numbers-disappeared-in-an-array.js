/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let numbers = {};

  for (let index = 0; index < nums.length; index++) {
    numbers[nums[index]] = true;
  }

  let result = [];

  for (let index = 1; index < nums.length + 1; index++) {
    if (numbers[index] === undefined) {
      result.push(index);
    }
  }

  return result;
};

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
