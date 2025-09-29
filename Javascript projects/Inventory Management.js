// 1) Inventory: empty array; each product has lowercase `name` and integer `quantity`
let inventory = [];

// (Optional) seed — normalize to lowercase per requirement
inventory.push({ name: "apples", quantity: 5 });
inventory.push({ name: "oranges", quantity: 3 });
inventory.push({ name: "bananas", quantity: 10 });

// Small helper to normalize names
const normalize = s => s.toLowerCase().trim();

// 2) findProductIndex(name): case-insensitive search, returns index or -1
function findProductIndex(productName) {
  const key = normalize(productName);
  return inventory.findIndex(item => item.name === key);
}

// 3) addProduct(product): if exists → update quantity + log "<name> quantity updated"
//    else → push + log "<name> added to inventory"
function addProduct(product) {
  const name = normalize(product.name);
  const qty = Number.isInteger(product.quantity) ? product.quantity : 0;

  const idx = findProductIndex(name);
  if (idx !== -1) {
    inventory[idx].quantity += qty;
    console.log(`${name} quantity updated`);
  } else {
    inventory.push({ name, quantity: qty });
    console.log(`${name} added to inventory`);
  }
}

// 4) removeProduct(name, quantity):
//    - subtract quantity and log: "Remaining <name> pieces: <quantity>"
//    - if after subtraction is zero → remove the product
//    - if not enough stock → log: "Not enough <name> available, remaining pieces: <quantity>"
//    - if product missing → log: "<name> not found"
function removeProduct(productName, quantity) {
  const name = normalize(productName);
  const idx = findProductIndex(name);

  if (idx === -1) {
    console.log(`${name} not found`);
    return;
  }

  const current = inventory[idx].quantity;

  if (quantity > current) {
    console.log(`Not enough ${name} available, remaining pieces: ${current}`);
    return;
  }

  const newQty = current - quantity;

  if (newQty === 0) {
    // remove this product entirely
    inventory.splice(idx, 1);
    console.log(`Remaining ${name} pieces: 0`);
  } else {
    inventory[idx].quantity = newQty;
    console.log(`Remaining ${name} pieces: ${newQty}`);
  }
}

// --- Quick demo ---
addProduct({ name: "Apples", quantity: 2 });   // "apples quantity updated"
addProduct({ name: "Flour", quantity: 10 });   // "flour added to inventory"
removeProduct("FLOUR", 3);                     // "Remaining flour pieces: 7"
removeProduct("FlOuR", 10);                    // "Not enough flour available, remaining pieces: 7"
removeProduct("Unknown", 1);                   // "unknown not found"

// inspect
console.log(inventory);
