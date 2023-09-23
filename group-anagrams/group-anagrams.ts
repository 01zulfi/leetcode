function groupAnagrams(strs: string[]): string[][] {
  // space: strs.length + (sum of each string) ??
  const counts = new Map<number, Map<string, number>>();

  // time: strs.length ^ 2 ??
  for (let i = 0; i < strs.length; i += 1) {
    counts.set(i, new Map());
    if (strs[i] === "") {
      counts.get(i)?.set(strs[i][""], 1);
    }
    for (let j = 0; j < strs[i].length; j += 1) {
      const ithCountOfString = counts.get(i)?.get(strs[i][j]);
      counts
        .get(i)
        ?.set(
          strs[i][j],
          ithCountOfString !== undefined ? ithCountOfString + 1 : 1
        );
    }
  }

  // space: strs.length
  const traversed = {};
  // space: ??
  const groups: string[][] = [];

  // time: strs.length ^ 3
  for (let i = 0; i < counts.size; i += 1) {
    if (!traversed[i]) {
      groups[i] = [strs[i]];
      traversed[i] = true;
    }
    label: for (let j = 0; j < counts.size; j += 1) {
      if (counts.get(i)!.size !== counts.get(j)!.size) {
        continue label;
      }
      for (const [key, value] of counts.get(i)!) {
        if (counts.get(j)?.get(key) !== value) {
          continue label;
        }
      }
      if (!traversed[j]) {
        groups[i].push(strs[j]);
        traversed[j] = true;
      }
    }
  }
  return groups.filter(Boolean);
}

// neetcode
// time: O(m.n.26) ~ O(m.n)
function groupAnagramsN(strs: string[]): string[][] {
  const a = "a".charCodeAt(0);
  const result = new Map<string, string[]>();

  for (let i = 0; i < strs.length; i += 1) {
    const count = new Array(26).fill(0);
    for (let j = 0; j < strs[i].length; j += 1) {
      count[strs[i][j].charCodeAt(0) - a] += 1;
    }
    const key = count.join(",");
    const cur = result.get(key);
    if (cur) {
      result.set(key, cur.concat([strs[i]]));
    } else {
      result.set(key, [strs[i]]);
    }
  }

  return Array.from(result.values());
}

console.log(groupAnagramsN(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagramsN([""]));
console.log(groupAnagramsN(["", "b"]));
console.log(groupAnagramsN(["tea", "and", "ace", "ad", "eat", "dans"]));
console.log(groupAnagramsN(["", ""]));
console.log(groupAnagramsN(["a"]));
console.log(groupAnagramsN(["bdddddddddd", "bbbbbbbbbbc"]));
