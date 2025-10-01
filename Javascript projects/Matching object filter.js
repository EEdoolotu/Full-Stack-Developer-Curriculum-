function whatIsInAName(arr, collection) {
  return arr.filter(obj => Object.keys(collection).every(key => obj[key] === collection[key]));

}
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))