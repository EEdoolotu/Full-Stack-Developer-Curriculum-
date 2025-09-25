function truncateString (string, num) {
  const strlong = string.length
  if (strlong > num) {
    const sliced = string.slice(0, num)
    return `${sliced}...`;
  } else (strlong <= num); {
    return string;
  }
}

console.log(truncateString("Absolutely Longer", 2))
