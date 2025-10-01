function getIndexToIns(arr, num) {
  const sorted = arr.sort((a , b) => a - b);

  const index = sorted.findIndex(x => x >= num)

  return index;

}