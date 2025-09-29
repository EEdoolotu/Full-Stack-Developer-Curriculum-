function fearNotLetter(letters) {
  for (let i = 0; i < letters.length; i++) {
    const current = letters.charCodeAt(i);
    const next = letters.charCodeAt(i + 1);

    if (next - current > 1) {
      return String.fromCharCode(current + 1)
    }
    
  }
  return undefined
}
console.log(fearNotLetter("abcdefghjklmno"))