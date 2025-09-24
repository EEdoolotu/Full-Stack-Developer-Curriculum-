function maskEmail(email) {
  const indexnumber = email.indexOf("@");
  const mask = "*";
  const sliced = email.slice(1, indexnumber - 1);
  const masked = mask.repeat(sliced.length)
  const replaced = email.replace(sliced, masked);
  return replaced;

}

let email = "apple.pie@example.com";


console.log(maskEmail(email))