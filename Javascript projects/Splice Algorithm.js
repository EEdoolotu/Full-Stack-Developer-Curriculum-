function frankenSplice (arr1, arr2, index) {
  let copy2 = [...arr2];
  copy2.splice(index, 0, ...arr1);

  return copy2;
}