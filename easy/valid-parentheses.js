/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stringToArray = s.split('');

  let stackArray = [];

  let closeObj = { '(': ')', '{': '}', '[': ']' };

  stackArray.push(stringToArray[0]);
  for (let index = 1; index < stringToArray.length; index++) {
    if (stringToArray[index] === closeObj[stackArray[stackArray.length - 1]]) {
      stackArray.pop();
    } else {
      stackArray.push(stringToArray[index]);
    }
  }

  return stackArray.length !== 0 ? false : true;
};
