function generatePassword(num) {
  let result = "";
  let p_words = ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()")
  let ready_words = p_words.split("");

  for (let i = 0; i < num; i ++) {
    const index = Math.floor(Math.random() * ready_words.length)
    result += ready_words[index]
  }
  return result;
    
let password = generatePassword()
console.log(`Generated password: ${password}`)
}
let password = generatePassword(12)
console.log(`Generated password: ${password}`)
