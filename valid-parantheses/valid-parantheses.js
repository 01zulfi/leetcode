/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = function (s) {
  if (s.length === 0) return true;

  const originalLength = s.length;
  const array = s.split("");

  for (let i = 0; i < s.length - 1; i++) {
    if (array[i] === undefined) continue;
    if (array.length === 0) break;
    if (array[i] === "(" && array[i + 1] === ")") {
      array.splice(i, 2);
    }
    if (array[i] === "[" && array[i + 1] === "]") {
      array.splice(i, 2);
    }
    if (array[i] === "{" && array[i + 1] === "}") {
      array.splice(i, 2);
    }
  }

  if (originalLength === array.length) {
    return false;
  } else {
    return isValid(array.join(""));
  }
};

console.log(isValid("{{}[][[[]]]}"));
console.log(isValid("{]{]"));
