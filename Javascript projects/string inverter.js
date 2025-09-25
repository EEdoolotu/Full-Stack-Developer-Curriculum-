function reverseString(word) {
  let splitword = word.split("");
  let reversed = splitword.reverse()
  return reversed.join("")
  
}

console.log(reverseString("hello"))
