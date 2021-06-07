/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
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
    if (data[key] === 1) {
      result = key;
      return;
    }
  });

  return result;
};

singleNumber([2, 2, 1]);
