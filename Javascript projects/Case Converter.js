function titleCase (sentence) {
  let new_s = sentence.split(" ");
  let mapped_s = new_s.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  let final = mapped_s.join(" ")
  return final

}

console.log(titleCase("I'm a little tea pot"))


  