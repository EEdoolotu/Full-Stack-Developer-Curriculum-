function repeatStringNumTimes (word, num) {
  let repeatedString = "";

  while (num > 0) {
  repeatedString += word;
  num -- ;
  } 
  return repeatedString;
  
  if (num <=  0) {
    return ""
  } 
}
 console.log(repeatStringNumTimes("*", 3))



