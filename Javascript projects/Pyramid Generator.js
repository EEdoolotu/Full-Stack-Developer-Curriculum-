function pyramid (char, rows, what) {
  const lines = [];
  const maxWidth = 2 * rows - 1;

  if (what === false) {
    for (let i = 1; i <= rows; i++) {
      const count = 2 * i - 1;
      const spaces = (maxWidth - count) / 2;
      lines.push(" ".repeat(spaces) + char.repeat(count))
    }
  } else {
    for (let i = rows; i >= 1; i--){
      const count = 2 * i - 1;
      const spaces = (maxWidth - count) / 2;
      lines.push(" ".repeat(spaces) + char.repeat(count))

    }
  }
  return "\n" + lines.join("\n") + "\n";

}