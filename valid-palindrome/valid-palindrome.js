/**
 * @param {string} s
 * @return {boolean}
 */

const isPalindrome = function (s) {
  const stripped = s.toLowerCase().replace(/[^0-9a-z]/gi, "");
  const reversed = stripped.split("").reverse().join("");
  return stripped === reversed;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("")); // true
console.log(isPalindrome("ab_a")); // true
