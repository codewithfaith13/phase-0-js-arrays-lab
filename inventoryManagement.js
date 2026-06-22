// Write your code here
1. //Create an array called products to store product names
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

// 2. Function to add a new product to the array
function addProduct(productName) {
  products.push(productName);
}

// 3. Function to remove the last product from the array
function removeLastProduct() {
  products.pop();
}

// 4. Function to update a product's name by its position in the array
function updateProductName(position, newName) {
  products[position] = newName;
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
