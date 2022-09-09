/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

const addBinary = function(a, b) {
  let ans = ''
  let carry = 0;

  const aReverse = reverseString(a)
  const bReverse = reverseString(b)

  for (let i = 0; i < Math.max(aReverse.length, bReverse.length); i++) {
    const aBit = aReverse[i] || 0
    const bBit = bReverse[i] || 0

    const sum = Number(aBit) + Number(bBit) + carry
    carry = sum > 1 ? 1 : 0 
    ans = String(sum % 2) + ans
  }

  if (carry) {
    ans = '1' + ans
  }

  return ans
};

const reverseString = (s) => s.split('').reverse().join('')

console.log(addBinary('11', '1')) // 100
console.log(addBinary('1010', '1011')) // 10101
console.log(addBinary('11', '11')) // 110
