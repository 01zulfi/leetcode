/**
 * @param {string} s
 * @return {number}
 */

const longestPalindrome = function(s) {
  const count = letterCountMap(s);

  let ans = 0;
  let centre = false

  for (const c of count.values()) {
    ans += Math.floor(c / 2) * 2;

    if (c % 2 !== 0) {
      // return here because there can only be one centre
      if (centre) continue

      ans += 1;
      centre = true
    }
  }

  return ans
};

const letterCountMap = (s) =>  {
  const map = new Map();

  for (let i = 0; i< s.length; i ++) {
    let letter = s[i]
    if (map.get(letter)) {
      map.set(letter, map.get(letter) + 1)
    } else {
      map.set(letter, 1)
    }
  }

  return map
}

console.log(longestPalindrome("abccccddeeee")) // 11
console.log(longestPalindrome("ccc")) // 3 