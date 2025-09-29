function pairElement (letter) {
  let words = letter.split("");
  let final = [];

  for (let word of words) {
    if (word === "A") {
    final.push(["A", "T"])
  } else if (word === "T") {
    final.push(["T", "A"])
  } else if (word === "C") {
    final.push(["C", "G"])
  } else if (word === "G") {
    final.push(["G", "C"])
  }

  }
  return final;
  
}