let lunches = [];

function getRandomItem(arraise) {
  let index = Math.floor(Math.random() * arraise.length)
  return arr[index];
}

function addLunchToEnd(arr, string) {
  arr.push(string)
  console.log(`${string} added to the end of the lunch menu.`)
  return arr;
}
function addLunchToStart (arr, string) {
  arr.unshift(string)
  console.log(`${string} added to the start of the lunch menu.`)
  return arr;
}
function removeLastLunch (arr) {
  if (arr.length === 0){
    console.log("No lunches to remove.")
  } else {
    console.log(`${arr.pop()} removed from the end of the lunch menu.`)
  }
  return arr;
}
function removeFirstLunch (arr) {
  const newlunch = arr.shift();
  if (arr.length === 0){
    console.log("No lunches to remove.")
  } else { console.log(`${newlunch} removed from the start of the lunch menu.`)
  }
  return arr;
}
function getRandomLunch  (arr) {
  const randomIndex = Math.floor(Math.random() * arr.length)
  if (arr.length === 0){
    console.log("No lunches available.")
  }else {
    console.log(`Randomly selected lunch: ${arr[randomIndex]}`)
  }
}
function showLunchMenu  (arr) {
  if (arr.length !== 0){
    console.log(`Menu items: ${arr.join(", ")}`)
  } else {
    console.log("The menu is empty.")
  }
}

console.log(getRandomLunch(["Pizza", "Burger", "Fries", "Salad"]))
