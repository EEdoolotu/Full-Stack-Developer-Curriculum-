function confirmEnding (string, sentence) {
  if (string.slice(-sentence.length) === sentence) {
    return true;
  } else {
    return false
  }
}
console.log(confirmEnding("Bastian", "n"))
