function diffArray (arr1, arr2) {

  return [
    ...arr1.filter(value => !arr2.includes(value)),
    ... arr2.filter(value => !arr1.includes(value))
  ]

}

