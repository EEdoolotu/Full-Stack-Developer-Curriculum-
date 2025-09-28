function mutation([arr1, arr2]) {
  let lower = arr1.toLowerCase();
  let lower2 = arr2.toLowerCase();

  for (let char of lower2) {
    if (!lower.includes(char)) {
      return false;
    } 
  }
  return true;
}