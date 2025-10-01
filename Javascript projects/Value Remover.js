function destroyer (arr, ...rest) {
  return arr.filter(value => !rest.includes(value))
}