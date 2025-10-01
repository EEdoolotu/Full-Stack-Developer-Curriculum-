function steamrollArray (arr) {
  return arr.reduce((acc, curr) => Array.isArray(curr) ? acc.concat(steamrollArray(curr)) : acc.concat(curr), []);
}

console.log(steamrollArray([[["a"]], [["b"]]]))