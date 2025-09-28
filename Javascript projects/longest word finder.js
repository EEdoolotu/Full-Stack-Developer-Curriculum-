function findLongestWordLength (sentence) {
  return Math.max(...sentence.split(" ").map(word => word.length))
}


console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))