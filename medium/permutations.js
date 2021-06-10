/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];
  if (nums.length < 2) {
    result.push([...nums]);
    return result;
  }

  for (let i = 0; i < nums.length; i++) {
    let temp = [...nums];
    temp.splice(i, 1);
    const splitArr = permute(temp);
    for (let split of splitArr) {
      result.push([nums[i], ...split]);
    }
  }
  return result;
};

// console.log(permute([5, 4, 6, 2]));
console.log(permute([1, 2, 3]));
