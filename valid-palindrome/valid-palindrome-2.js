/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let leftIndex = 0;
  let rightIndex = s.length - 1;

  while (leftIndex < rightIndex) {
    while (leftIndex < rightIndex && !isAlphaNumeric(s[leftIndex])) {
      leftIndex += 1;
    }
    while (rightIndex > leftIndex && !isAlphaNumeric(s[rightIndex])) {
      rightIndex -= 1;
    }
    if (s[leftIndex].toLowerCase() !== s[rightIndex].toLowerCase()) {
      return false;
    }
    leftIndex += 1;
    rightIndex -= 1;
  }
  return true;
};

const isAlphaNumeric = function (s) {
  return !s.match(/[^a-z0-9]/gi);
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
