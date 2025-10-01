function truthCheck(collection, pre) {
  const truthy = collection.every(user => user[pre]);
  return truthy
}

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name"))