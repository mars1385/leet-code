/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let bits = [];
  for (let index = 0; index < n + 1; index++) {
    const bit = index.toString(2);
    const add = bit.split('').reduce((acc, val) => {
      return acc + parseInt(val);
    }, 0);
    bits.push(add);
  }
  return bits;
};

console.log(countBits(5));
