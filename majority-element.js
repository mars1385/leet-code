/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let data = {};

  nums.forEach((number) => {
    if (!data[number]) {
      data[number] = 1;
    } else {
      data[number] = data[number] + 1;
    }
  });

  let result;
  Object.keys(data).forEach((key) => {
    if (data[key] > nums.length / 2) {
      result = key;
      return;
    }
  });

  return result;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
