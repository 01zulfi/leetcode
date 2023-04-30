/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// time complexity O(s + t)
// space complexity O(s + t)
// slightly memory efficient by sorting strings, but depends on sort imp
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const mapS = new Map();
  const mapT = new Map();

  for (let i = 0; i < s.length; i++) {
    let getIthCountS = mapS.get(s[i]);
    mapS.set(s[i], getIthCountS ? getIthCountS + 1 : 1);

    let getIthCountT = mapT.get(t[i]);
    mapT.set(t[i], getIthCountT ? getIthCountT + 1 : 1);
  }

  if (mapS.size !== mapT.size) return false;

  for (const [key, value] of mapS) {
    if (mapT.get(key) !== value) return false;
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("aacc", "ccac"));
