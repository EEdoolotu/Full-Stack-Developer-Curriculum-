function uniteUnique (...arr) {
  const combined = [].concat(...arr);
  const result = []

  for (let value of combined) {
    if (!result.includes(value)) {
      result.push(value)
    }
  }
  return result;

}