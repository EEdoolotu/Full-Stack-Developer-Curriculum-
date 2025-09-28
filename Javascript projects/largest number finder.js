function largestOfAll(arr) {
  let result = [-100, -100, -100, -100];
  for (let i = 0; i < arr.length; i++) {
    for (let sub_i = 0; sub_i < arr[i].length; sub_i++) {
      if (arr[i][sub_i] > result[i]) {
        result[i] = arr[i][sub_i];
      }
    }
  }
  return result;
}