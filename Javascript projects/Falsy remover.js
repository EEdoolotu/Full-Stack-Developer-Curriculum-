function bouncer (arr) {
  const falseValues = [false, null, 0, "", undefined, NaN]

  return arr.filter(item => !falseValues.includes(item));

}